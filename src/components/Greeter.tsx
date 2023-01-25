import React from 'react'

interface GreetProps {
    name: string,
    message?: string
}

const Greeter = ({ name, message }: GreetProps) => {
    return (
        <div>
            <p>Hello {name}</p>
            <p>{message ? message : ''}</p>
        </div>
    )
}

export default Greeter