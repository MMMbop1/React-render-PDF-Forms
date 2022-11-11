import { useState, useContext, createContext } from "react";
import { DataContext } from "../Form";
import { InputContact } from "../formComponents/InputContact";
import { Button } from "../formComponents/Button";
import { Template } from '../Template'
import '../Form.css';

export const FormContact = () => {
    const data = useContext(DataContext);
    const [submit, setSubmit] = useState(-1);

    const handleSubmit = e => {
        e.preventDefault();
        const myData = [];
        Array.from(document.getElementsByClassName("input")).forEach(function(element) {
            myData.push(element.value);
        });
        data.contact = myData;
        console.log(myData);
        setSubmit(1);
    }

    return (
        <>
        {submit === -1 ? 
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-button-container">
             <InputContact/>
             <Button/>
            </div>
        </form>
        </div>
        :
        <Template/>
        }
        </>
    )
}
