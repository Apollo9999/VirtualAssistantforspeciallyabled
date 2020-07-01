import React,{useEffect} from 'react'
import axios from 'axios'
const Thanks = () => {
    useEffect(()=>{
        axios.get("http://localhost:5000/end")
    })
    const submit = (e)=>{
        e.preventDefault()
        axios.get("http://localhost:5000/brail")
    }
    return (
        <div >
            <div class="dt" style={{marginTop:"140px"}}>
                <form onSubmit={submit} style={{margin:"20px auto 20px auto",width:"100px"}}>
                    <button type="submit" name="button" class="btn btn-secondary"><i class="fas fa-download"></i> Braille</button>
                </form>
                <h1>Thanks for writing the paper. All the best for results.</h1>
            </div>
        </div>
    )
}

export default Thanks;