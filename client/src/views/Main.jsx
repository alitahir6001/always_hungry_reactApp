import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';

import Table from '../component/Table';

import Map from '../component/Map'
const Main = props => {
    const [users,setUsers] = useState([]);
    const[loggedIn,setLoggedIn] = useState(JSON.parse(localStorage.getItem("user")) || {firstName:"benny bob", lastName: "Mcbob"})
    useEffect(()=> {
        Axios.get("http://localhost:8000/api/users",{withCredentials:true})
            .then(res=> setUsers(res.data.results))
            .catch(err=> {
                if(err.response.status === 401){
                    navigate('/');
                }
        })
    })
    const logout = () => {
        Axios.get('http://localhost:8000/api/logout', {withCredentials:true})
            .then(res => {
                localStorage.clear();
                navigate('/')
            })
            .catch(err => console.log(err));
    }

    const tableStyle={
        align_content:"center ",
        padding:10,
        margin:20,

    }


    return(
    <div style={tableStyle}>
        <div className="App">

        </div>
            
            <Table
            
            />
            <div>
            </div>
            <div>
                <button onClick={logout} className="btn btn-info">Logout</button>

            <Map/>
        </div>

    </div>

    )
}

export default Main