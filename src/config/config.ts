import { InputProps } from "../components/Input";

export type FormDataI = {
    name: string;
    surname: string;
    email: string;
    password: string;
    duplicate: string | undefined;
}

type Config = (InputProps & {
    validate?: (state: FormDataI) => string;
    name: keyof FormDataI;
})[];

export const config: Config = [
    {
        name: 'name',
        placeholder: 'Имя',
        required: true,
    },
    {
        name: 'surname',
        placeholder: 'Фамилия',
        required: true,
    },
    {
        name: 'email',
        placeholder: 'E-mail',
        pattern: '^\\S+@\\S+\\.\\S+$',
        errorMessage: 'Некорректная почта',
    },
    {
        name: 'password',
        placeholder: 'Пароль',
        required: true,
        type: 'password',
        minLength: 6,
        errorMessage: 'Пароли не совпадают',
        // validate: (state: FormDataI) => !(state.password === state.duplicate),
        // validate: (error: FormDataI) => (error.password ? error.password : ""),
    },
    {
        name: 'duplicate',
        placeholder: 'Повторите пароль',
        required: true,
        type: 'password',
    }
]

export const initialState: FormDataI = {
    name: '',
    surname: '',
    email: '',
    password: '',
    duplicate: '',
}
