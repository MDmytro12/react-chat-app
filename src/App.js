import React , {useState , useEffect} from 'react'
import {Switch , Route} from 'react-router-dom'
import {LoginPage , RegisterPage , NoMatchPage , AccountPage} from './pages'

import {connect} from 'react-redux'
import { setAuth } from './redux/actions/auth'


const App = ({dispatch , auth}) => {

    useEffect(() => {
        const assecc = window.localStorage.getItem('currentUser')
        if(assecc){
            dispatch(setAuth(true))
        }
    } , 
    [auth])

    if(auth){
        return(
            <>
                <Switch>
                    <Route path={['/' , '/acc']} component={AccountPage} />
                    <Route path='*' component={NoMatchPage} />
                </Switch>
            </>
        )
    }

    return( 
        <>
            <Switch>
                <Route exact path={['/login' , '/']} component={LoginPage} />
                <Route exact path='/reg' component={RegisterPage} />
                <Route path="*" component={NoMatchPage}/>
            </Switch>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        auth : state.authReducer.auth
    }
}

export default connect(
    mapStateToProps
)(App);