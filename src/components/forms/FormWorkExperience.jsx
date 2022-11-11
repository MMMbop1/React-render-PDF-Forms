import { useState, useContext } from "react";
import { DataContext } from "../Form";
import { FormSkills } from "./FormSkills";
import { WorkInput } from "../formComponents/WorkInput"
import '../Form.css';

export const FormWorkExperience = () => {
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
        data.work = myData;
        setSubmit(1);
    }

    return (
        <>
        {submit === -1 ?
        <div className="form">
        <form onSubmit={addEducation}>
            <div className='input-container'>
                {display.map(val => <WorkInput key={val} id={val}/>)}
            </div>
            <div className="button-container">
                <button type="submit" className="button button-experience">Add Work</button>
                <button type="button" className="button" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
        <div id="education-text-container"></div>
        </div>
        :
        <FormSkills/>
        }
        </>
    )
}