import { useState, createContext } from "react";
import { Input } from "./formComponents/Input";
import { Button } from "./formComponents/Button";
import { FormExperience } from "./forms/FormExperience";
import './Form.css';

export const DataContext = createContext();

export const Form = () => {
    const [submit, setSubmit] = useState(-1);
    const [data, setData] = useState({
        firstName: null,
        secondName: null,
        title: null,
        about: null,
        education: null,
        work: null,
        skills: null,
        contact: null
    });

    const handleSubmit = e => {
        e.preventDefault();
        const myData = data;
        Array.from(document.getElementsByClassName("input")).forEach(function(element) {
            myData[element.id] = element.value;
        });
        setData(myData);
        setSubmit(1);
    }

    return (
        <>
        {submit === -1 ? 
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="input-button-container">
             <Input/>
             <Button/>
            </div>
        </form>
        </div>
        :
        <DataContext.Provider value={data}>
            <FormExperience/>
        </DataContext.Provider>
        }
        </>
    )
}
