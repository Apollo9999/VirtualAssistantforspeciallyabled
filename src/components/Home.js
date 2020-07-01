import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aigif from './giphy.gif'
const Home = (props) => {
    useEffect(() => {
        axios.get("http://localhost:5000/time")
    })
    const [data, setData] = useState({
        qno: "0",
        qnm: "No question",
        mn: "Answer goes here",
        op1: "None",
        op2: "None",
        c1: false,
        c2: false,
        spk: 0
    })
    const { qno, qnm, mn, op1, op2, c1, c2, spk } = data
    const change = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value(),
        })
    }
    const func = async (e) => {
        e.preventDefault()
        const fd = new FormData();
        fd.append('question', qnm)
        fd.append('qno', qno)
        fd.append('answer', mn)
        const res = await axios.post("http://localhost:5000/speech", fd)
        if(res.data.qno==="end"){
            props.history.push('/thanks')
        }
        if (res.data.answer === "option A") {
            setData({
                ...data,
                qno: res.data.qno,
                qnm: res.data.question,
                op1: res.data.option1,
                op2: res.data.option2,
                c1: true,
            })
        }
        else if (res.data.answer === "option B") {
            setData(
                {
                    ...data,
                    qno: res.data.qno,
                    qnm: res.data.question,
                    op1: res.data.option1,
                    op2: res.data.option2,
                    c2: true,
                }
            )
        }
        else {
            setData({
                ...data,
                mn: res.data.answer,
                qno: res.data.qno,
                qnm: res.data.question,
                op1: res.data.option1,
                op2: res.data.option2,
            })
        }

        console.log(res)
    }
    if (qno === "0") {
        return (
            <div>
                <div class="dt" onClick={func}>
                    <div style={{ clear: "both" }}>
                        <h4 id="qno" style={{ display: "inline" }}>{qno}</h4>
                        <h5 id="question" style={{ display: "inline" }}>{qnm}</h5>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center", border: "1px solid grey", width: "40%", height: "200px", fontSize: "1.2rem" }}>
                        <p>
                            {mn}
                        </p>
                    </div>
                    <br />
                    <h4 id="option1">{op1}</h4>
                    <br />
                    <input type="checkbox" id="checkop1" name="op1" /><br />
                    <h4 id="option2">{op2}</h4>
                    <br />
                    <input type="checkbox" id="checkop2" name="op2" /><br />
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>{spk ? <img src={Aigif} alt="Speaking..."></img> : null}</div>
            </div>
        )
    }
    if (qno !== "3") {
        return (
            <div>
                <div class="dt" onClick={func}>
                    <div style={{ clear: "both" }}>
                        <h4 id="qno" style={{ display: "inline" }}>{qno}</h4>
                        <h5 id="question" style={{ display: "inline" }}>{qnm}</h5>
                    </div>
                    <br />
                    <div style={{ margin: "auto", textAlign: "center", border: "1px solid grey", width: "40%", height: "200px", fontSize: "1.2rem" }}>
                        
                            {mn}
                    
                    </div>
                    <br />
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>{spk ? <img src={Aigif} alt="Speaking..."></img> : null}</div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div class="dt" onClick={func}>
                    <div style={{ clear: "both" }}>
                        <h4 id="qno" style={{ display: "inline" }}>{qno}</h4>
                        <h5 id="question" style={{ display: "inline" }}>{qnm}</h5>
                    </div>
                    <br />
                    <h4 id="option1">{op1}</h4>
                    <br />
                    <input type="checkbox" checked={c1} name="op1" /><br />
                    <h4 id="option2">{op2}</h4>
                    <br />
                    <input type="checkbox" checked={c2} name="op2" /><br />
                </div>
                <div style={{ margin: "auto", textAlign: "center" }}>{spk ? <img src={Aigif} alt="Speaking..."></img> : null}</div>
            </div>
        )
    }
}

export default Home;