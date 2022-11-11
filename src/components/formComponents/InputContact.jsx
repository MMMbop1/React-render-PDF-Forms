import './Input.css';
import { useState } from "react";


export const InputContact = () => {
    const [address, setAddress] = useState("");
    const [postNumber, setPostNumber] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    return (
        <div className='input-container'>
            <input id="address" type="text" placeholder="address" className="input"
            onChange={(e) => setAddress(e.target.value)}
            value={address}>
            </input>
            <input id="postNumber" type="text" placeholder="postNumber" className="input"
            onChange={(e) => setPostNumber(e.target.value)}
            value={postNumber}>
            </input>
            <input id="city" type="text" placeholder="city" className="input"
            onChange={(e) => setCity(e.target.value)}
            value={city}>
            </input>
            <input id="country" type="text" placeholder="country" className="input"
            onChange={(e) => setCountry(e.target.value)}
            value={country}>
            </input>
        </div>
    )
}