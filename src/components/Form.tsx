import React, { useState } from "react";

const Form = () => {
    const [inputValues, setInputValues] = useState({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = () => {}

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [evt.target.name]: evt.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick'/>
                <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths'/>
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar'/>
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description'/>
                <button>click</button>
            </form>
        </div>
    )

}

export default Form;