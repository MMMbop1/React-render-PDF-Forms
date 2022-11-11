import { useState } from "react";

export const SkillsInput = props => {
    const [skill, setSkill] = useState('');

    return (
        <>
        <input type="text" placeholder={`Skill #${props.id}`} className="input"
        onChange={(e) => setSkill(e.target.value)}
        value={skill}></input>
        </>
    )
}