
import { config } from "../config/config";
import Input from "./Input";


const VersionSenior = () => {
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = Object.fromEntries(new FormData(event.target as HTMLFormElement));

        // отправка данных
        console.log(data);
    }

    return (
        <form className="form_container" onSubmit={onSubmit}>
            <p className="form_title">Регистрация</p>

            {config.map(item => (
                <Input
                    key={item.name}
                    {...item}
                />
            ))}

            <button className="form_button">регистрация</button>
        </form>
    );
}

export default VersionSenior;