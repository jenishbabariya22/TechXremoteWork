import axios from 'axios'
import React, { useState } from 'react'

function Add() {
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [email, setemail] = useState("")
    const [course, setcourse] = useState("")
    const [password, setpassword] = useState("")
    const [github, setgithub] = useState("")

    const submit = async () => {
        let obj = { name, phone, password, email, course }
        if (!name || !password || !email || !course || !phone) {
            alert("All Field Necessary Submited")
            return false
        } else {
            try {
                let { data } = await axios.post(`https://fir-data-21482-default-rtdb.asia-southeast1.firebasedatabase.app/user.json`, {
                    obj
                })
                setemail("")
                setphone("")
                setname("")
                setcourse("")
                setgithub("")
                setpassword("")
                alert("Record Succesfully Submited")
            } catch (error) {
                console.log(error);
                return false
            }
        }
        alert("Record Succesfully Submited")
    }
    return (
        <div>
            <div classname="container">
                <form action>
                    <div className="main">
                        <h1>Open Letter Maker</h1>
                        <hr />
                        <p>
                            All the Submissions to this form will be appended into a table as
                            signatures in the style of open letter.
                        </p>
                        <h4 style={{ color: 'red' }}>* Required</h4>
                    </div>
                    <div className="name">
                        <h3>Name <span style={{ color: 'red' }}>*</span></h3>
                        <input value={name} onChange={(e) => setname(e.target.value)} type="text" name="name" />
                    </div>
                    <div className="name">
                        <h3>Github Id Name <span style={{ color: 'red' }}>*</span></h3>
                        <input value={github} onChange={(e) => setgithub(e.target.value)} type="text" name="name" />
                    </div>
                    <div className="email">
                        <h3>Email <span style={{ color: 'red' }}>*</span></h3>
                        <input value={email} onChange={(e) => setemail(e.target.value)} type="email" name="name" id required />
                    </div>
                    <div className="email">
                        <h3>Password <span style={{ color: 'red' }}>*</span></h3>
                        <input style={{ borderBottom: "1px solid black", width: "90%", paddingBottom: "10px" }} type="password" value={password} onChange={(e) => setpassword(e.target.value)} name="password" id required />
                    </div>
                    <div className="email">
                        <h3>Phone Number <span style={{ color: 'red' }}>*</span></h3>
                        <input style={{ borderBottom: "1px solid black", width: "90%", paddingBottom: "10px" }} value={phone} onChange={(e) => setphone(e.target.value)} type="nname" name="Number" />
                    </div>
                    <div className="email">
                        <h3>Your Course Name<span style={{ color: 'red' }}>*</span></h3>
                        <input style={{ borderBottom: "1px solid black", width: "90%", paddingBottom: "10px" }} value={course} onChange={(e) => setcourse(e.target.value)} type="name" name="Number" />
                    </div>

                    <div className="submit">
                        <button onClick={submit} >Submit</button>
                    </div>
                    <p className="rule">Never submit passwords through Google Forms</p>
                    <p className="policy">
                        This content is neither created nor endrosed by Google.
                        <a href="#">Report Abuse.</a> <a href="#">Terms of condition.</a>
                        <a href="#">Privacy Policy.</a>
                    </p><h1 className="Google" style={{ color: 'grey', fontWeight: 550, width: '50vw' }}>Google Forms</h1>
                    <p />
                </form>
            </div>
        </div>

    )
}

export default Add