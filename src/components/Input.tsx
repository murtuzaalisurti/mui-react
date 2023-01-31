import React, { useState } from 'react'
import { Button } from '@mui/material'

const Input = () => {

    const [input, setInput] = useState("")

    function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
        const inputValue = (e.target as HTMLInputElement).value
        setInput(inputValue)
    }

    return (
        <>
            <input type="text" onChange={handleChange} value={input} />
            <p>{input}</p>
            <Button variant="contained">MUI Button</Button>
        </>
    )
}

export default Input