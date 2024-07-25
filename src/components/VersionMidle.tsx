import { useState } from "react";
import { config, initialState } from "../config/config";
import Input from "./Input";


const VersionMidle = () => {
    const [formState, setFormState] = useState(initialState);

    const onChage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        const name = event.target.name;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log('generate payload');
        console.log(formState);
    }

    return (
        <form onSubmit={onSubmit}>
            <p>Регистрация</p>

            {config.map(item => (
                <Input
                    key={item.name}
                    {...item}
                    value={formState[item.name]}
                    onChange={onChage}
                    error={item.validate?.(formState)}
                />
            ))}
        </form>
    );
}

export default VersionMidle;