import { useState, useContext } from "react";
import { DataContext } from "../Form";
import { FormContact } from "./FormContact";
import { SkillsInput } from "../formComponents/SkillsInput"
import '../Form.css';

export const FormSkills = () => {
    const [submit, setSubmit] = useState(-1);
    const [display, setDisplay] = useState([1]);
    const data = useContext(DataContext);

    const addEducation = e => {
        e.preventDefault();
        setDisplay([...display, display.length + 1])
    }

    const handleSubmit = () => {
        const myData = [];
        Array.from(document.getElementsByClassName("input")).forEach(function(element) {
            myData.push(element.value);
        });
        data.skills = myData;
        setSubmit(1);
    }

    return (
        <>
        {submit === -1 ?
        <div className="form">
        <form onSubmit={addEducation}>
            <div className="input-button-container">
            <div className='input-container'>
                {display.map(val => <SkillsInput key={val} id={val}/>)}
            <div className="button-container">
                <button type="submit" className="button button-experience">Add</button>
                <button type="button" className="button" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            </div>
        </form>
        </div>
        :
        <FormContact/>
        }
        </>
    )
}