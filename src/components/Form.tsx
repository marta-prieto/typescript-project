import React, { useReducer} from "react";
import { Sub } from "../types";

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const INITIAL_STATE = {
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''

}

type FormReducerAction = {
    type: "change_value",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear"
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const { inputName, inputValue } = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}
const Form = ({ onNewSub }: FormProps) => {

    const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        onNewSub(inputValues);
        handleClear();
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = evt.target;

        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })


    }

    const handleClear = () => {
        dispatch({ type: "clear" })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type='text' name='nick' placeholder='nick' />
                <input onChange={handleChange} value={inputValues.subMonths} type='text' name='subMonths' placeholder='subMonths' />
                <input onChange={handleChange} value={inputValues.avatar} type='text' name='avatar' placeholder='avatar' />
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='description' />
                <button onClick={handleClear} type='button'>Clear the form</button>
                <button type='submit'>click</button>
            </form>
        </div>
    )

}

export default Form;