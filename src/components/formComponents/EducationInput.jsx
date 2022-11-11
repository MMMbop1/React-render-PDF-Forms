import { useState } from "react";

export const EducationInput = props => {
    const [Education, setEducation] = useState('');
    const [educationDescription, setEducationDescription] = useState('');

    return (
        <>
        <input type="text" placeholder={`Education #${props.id}`} className="input"
        onChange={(e) => setEducation(e.target.value)}
        value={Education}></input>
        <input type="text" placeholder={`Description #${props.id}`} className="input"
        onChange={(e) => setEducationDescription(e.target.value)}
        value={educationDescription}></input>
        </>
    )
}