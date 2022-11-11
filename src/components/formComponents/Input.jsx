import './Input.css';
import { useState } from "react";


export const Input = () => {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [title, settitle] = useState("");
    const [about, setAbout] = useState("");

    return (
        <div className='input-container'>
            <input id="firstName" type="text" placeholder="firstName" className="input"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}>
            </input>
            <input id="secondName" type="text" placeholder="lastName" className="input"
            onChange={(e) => setSecondName(e.target.value)}
            value={secondName}>
            </input>
            <input id="title" type="text" placeholder="title" className="input"
            onChange={(e) => settitle(e.target.value)}
            value={title}>
            </input>
            <input id="about" type="text" placeholder="about" className="input"
            onChange={(e) => setAbout(e.target.value)}
            value={about}>
            </input>
        </div>
    )
}