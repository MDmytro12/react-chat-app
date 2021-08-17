import React , {useState , useEffect} from 'react'
import {Switch , Route} from 'react-router-dom'
import {LoginPage , RegisterPage , NoMatchPage} from './pages'

import socketClientIO from 'socket.io-client'

const ENDPOINT = 'http://localhost:4000'

const App = () => {

    // const [res , setRes] = useState(false)
    // useEffect(() => {
    //     const socket = socketClientIO(ENDPOINT)

    //     socket.on('true' , () => {
    //         console.log('Connect!')
    //     })

    // } , [] )

    return( 
        <>
            <Switch>
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/reg' component={RegisterPage} />
                <Route path="*" component={NoMatchPage}/>
            </Switch>
        </>
    )
}

export default App;