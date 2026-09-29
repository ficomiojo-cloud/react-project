import {useState} from "react";

const Greeting = () => {
    const [name, setName] = useState<string>('John Doe');

const handleChange = () => {
        setName('Jane Smith');
};

    return (
        <div>
            <h1>Hello, welcome to my React app!</h1>
            <p>{name}</p>
            <button onClick={handleChange}>Change name</button>
        </div>
    );
};

export default Greeting;