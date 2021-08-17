import React , { useEffect , useState } from 'react'
import PropTypes from 'prop-types'

import {Dialog , DialogItems} from './containers'
import {Search} from './components'

import './Account.css'

import {ImExit} from 'react-icons/im'
import Loader from 'react-loader-spinner'
import { useHistory } from 'react-router'

import {connect} from 'react-redux'
import { setAuth } from '../../redux/actions/auth'
import { BiMessageSquareX } from 'react-icons/bi'
import titleFilter from '../../utils/title.utils'

const AccountPage = ({dispatch , auth}) => {

    const history = useHistory()

    const [loader , setLoader] = useState(false)
    const [dialogItemList , setDialogItemList] = useState([])
    const [searchList , setSerchList] = useState([]) 
    const [currentDialog , setCurrentDialog] = useState({})

    useEffect(() => {

        titleFilter('Account page!')
        
        async function fetchDada(){
            setLoader(true)
            
            try{
                let dialogs = await fetch('http://localhost:4000/acc/getd' , { method : "POST" , headers : {"Content-Type" : "application/json"} , body: JSON.stringify({email : JSON.parse(window.localStorage.getItem('currentUser')).email}) })                                    .then( res => res.json() )
                
                dialogs = await Promise.all(dialogs.map( async(item) => {

                    const authorEmail = item.authors.filter( email => JSON.parse(window.localStorage.getItem('currentUser')).email !== email)

                    const response = await fetch( 'http://localhost:4000/acc/getun' , { method : "POST" , headers : { "Content-Type" : "application/json" } , body : JSON.stringify({email : authorEmail})  } ).
                               then( res => res.json() )
                    return{
                        ...item ,
                        name : response.name , 
                        active : false , 
                        online : response.online
                    }
                } ) )
            
                setDialogItemList(dialogs)
                setSerchList(dialogs)

                if(dialogs.length !== 0){
                    dialogs[0].active = true
                    setCurrentDialog(dialogs[0])
                }
                
            }catch (e){
                onExitHandler()
            }
            setLoader(false)
        }   
        fetchDada()
    } , [auth])


    const onExitHandler = async () => {
        await fetch('http://localhost:4000/acc/exit' , {method:"POST" , headers: {"Content-Type" : "application/json"} , body : JSON.stringify( {email : JSON.parse(localStorage.getItem('currentUser') ).email})})
        dispatch(setAuth(false))    
        window.localStorage.removeItem('currentUser')
        history.push('/login')
        
    }


    const onDialogItemClick = (id) => {
        currentDialog.active = false
        setCurrentDialog( dialogItemList.filter( item => item.dialogId === id )[0] )
        setDialogItemList( dialogItemList.map( item => {
            if(item.dialogId === id ){
                item.active = true
            }

            return item 
        } ) )
    }

    const changeSearchList = (value) => {
        if(value.length > 0){
            setSerchList( dialogItemList.filter( item => item.name.toLowerCase().includes(value.toLowerCase()) ) )
        }else{
            setSerchList(dialogItemList)
        }
    }

    return (
        <>
            <div className="account">

                <ImExit className='icon_exit' onClick={onExitHandler} />
                
                {
                    loader  && 
                    <div className="loader_div">
                        <Loader 
                            type="Oval"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>
                    
                }
                {
                    !loader  &&
                    <>
                        <div className="account_sidebar">

                            <Search setDialogItemsList={changeSearchList} />

                            <DialogItems currentDialog={currentDialog} onDialogItemClick={onDialogItemClick} dialogItemsList={searchList} />
                            
                        </div>

                        <div className="account_main">
                            <Dialog setCurrentDialog={setCurrentDialog} currentDialogItem={currentDialog}/>
                        </div>
                    </>
                    
                }

            </div>
        </>
    )
}

AccountPage.propTypes = {
    dispatch : PropTypes.func ,
    auth : PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        auth : state.authReducer.auth
    }
}

export default connect(
    mapStateToProps
)(AccountPage);