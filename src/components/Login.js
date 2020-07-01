import React, {useEffect} from 'react'
import Disp from './picture.jpg'
import axios from 'axios'
const Login = (props) => {
    useEffect(()=>{
        axios.get("http://localhost:5000/verify")
    })
    const login = async (e) => {
        e.preventDefault()
        const res = await axios.post("http://localhost:5000/verify")
        if (res.data.resu === "1") {
            props.history.push('/home')

        }
        else {
            props.history.push('/')
        }
    }
    return (
        <div onClick={login}>
            <div class="home">
                <img src="https://image.freepik.com/free-photo/closeup-person-filling-out-questionary-form_1262-2259.jpg"
                    alt="bgimg" />
            </div>
            <div class="content">
                <h1>Click anywhere to verify the user.</h1>
            </div>
            <div class="card data">
                <img class="dp" src={Disp} alt="dpimg"/>
                <div class="card-body">
                    <h5 class="card-title">Name : Sateyndra Mishra</h5>
                    <h5 class="card-title">Roll Number : 1092</h5>
                    <h5 class="card-title">Subject : English</h5>
                </div>
            </div>
        </div>
    )
}

export default Login;