import MaterialTable from 'material-table';
import {useState, useEffect} from 'react';
import Axios from 'axios'
import React, { useRef } from 'react';
const Table=()=>{
    // const setData = null;
    // const data=[
    // {restaurant_name: "Cold Stone Creamery", restaurant_phone: "(877) 585-1085", restaurant_website: "http:///fl/tampa/997116-cold-stone-creamery/", hours: "", price_range: ""},
    // {restaurant_name: "Smoothie King", restaurant_phone: "(813) 866-4847", restaurant_website: "http://www.smoothieking.com", hours: "", price_range: ""},
    // {restaurant_name: "Steak 'n Shake", restaurant_phone: "(813) 978-8819", restaurant_website: "http://www.steaknshake.com", hours: "", price_range: ""},
    // {restaurant_name: "Mahana Fresh", restaurant_phone: "(727) 238-9967", restaurant_website: "http:///fl/tampa/838743-mahana-fresh/", hours: "", price_range: ""},
    // {restaurant_name: "Chipotle", restaurant_phone: "(813) 977-1520", restaurant_website: "http:///fl/tampa/836802-chipotle/", hours: "", price_range: ""},
    // {restaurant_name: "Cold Stone Creamery", restaurant_phone: "(877) 585-1085", restaurant_website: "http:///fl/tampa/997116-cold-stone-creamery/", hours: "", price_range: ""},
    // {restaurant_name: "Smoothie King", restaurant_phone: "(813) 866-4847", restaurant_website: "http://www.smoothieking.com", hours: "", price_range: ""},
    // {restaurant_name: "Steak 'n Shake", restaurant_phone: "(813) 978-8819", restaurant_website: "http://www.steaknshake.com", hours: "", price_range: ""},
    // {restaurant_name: "Mahana Fresh", restaurant_phone: "(727) 238-9967", restaurant_website: "http:///fl/tampa/838743-mahana-fresh/", hours: "", price_range: ""},
    // {restaurant_name: "Chipotle", restaurant_phone: "(813) 977-1520", restaurant_website: "http:///fl/tampa/836802-chipotle/", hours: "", price_range: ""},
    // {restaurant_name: "Panera Bread", restaurant_phone: "(813) 979-6981", restaurant_website: "https://locations.panerabread.com/fl/tampa/18011-h…igital&utm_campaign=yext&utm_content=local-search", hours: "", price_range: ""},
    // ]
    const [data,setData] = useState();
    const columns=[
        {
            title: 'Restaurant', field: 'restaurant_name',
            cellStyle: {
            backgroundColor: '#ABB2B9',
            padding:"",
            margin:"0",
            marginTop:"0"
            },
        },
        {
            title:'Cuisine Type',field:'cuisines[0]'
        },
        {
            title:'Price',field:'price_range',


        },
        {
            title:'Phone Number',field:'restaurant_phone'
        },
        {
            title:'Address',field:'address.formatted'
        },


    ]
    const tableStyle={


        width:"1000",
        height:"auto"
    }


    // const [food,setFood] = useState([]);
    const access_token = "9c47031350ef330a31798dce1f716674"
    const [zip_code, setZip_code] = useState();
    const [table, setTable] = useState([]);
    
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(zip_code)
        // console.log(`https://api.documenu.com/v2/restaurants/zip_code/${Object.values(zip_code)}?key=${access_token}`, food)
        Axios.get(`https://api.documenu.com/v2/restaurants/zip_code/${Object.values(zip_code)}?size=100&key=${access_token}`,data)

        // https://api.documenu.com/v2/restaurants/zip_code/11211?size=5&key=9c47031350ef330a31798dce1f716674
            .then(res => {
                setData(res.data.data)
                console.log(data)
            })
            .catch(err => { console.log(err)
            })

    }
    

    const handleInputChange = e => {
        setZip_code({
            ...zip_code,
            [e.target.name] : e.target.value
        })
    }

    const [users,setUsers] = useState([]);
    const[loggedIn,setLoggedIn] = useState(JSON.parse(localStorage.getItem("user")) || "")



    return(

        <div style={tableStyle}>
            <div className="auto">
            <div>
                <form>
                    <label htmlFor="zipcode">ZipCode: </label>
                    <input type="text" name="zip_code" maxLength="5" onChange={handleInputChange}/>
                    <input type="submit" className="btn btn-primary" onClick={handleSubmit}/>
                </form>
            </div>
            </div>
            <MaterialTable title={`Where do you want to eat today ${loggedIn.firstName} ??`} 
            data={data}
            columns={columns}
            options={{
                headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF',
                width:"40"
                },
                titleStyle:{
                color:'red'
                },
                rowStyle: {
                backgroundColor: '#EEE',
                },
                
                pageSize: 15,
                pageSizeOptions: [20],
                toolbar: true,
                paging: true
            }}
            />

        </div>

    )
}

export default Table;