import { api } from "./api"

export const register = async(name, username, password) => {
    try {
        const response = await api.post('/register',
            {
                name: name,
                username: username,
                password: password
            });
        return {
            success: true,
            data: response?.data?.message ?? "Нет ответа"
        };
    } catch (error) {
        return {
            success: false,
            data: error?.response?.data?.message ?? "Произошла ошибка"
        }
    }
}

export const delete_acc = async() => {
    try {
        const response = await api.delete('/register');
        return {
            success: true,
            data: response?.data?.message ?? "Нет ответа"
        };
    } catch (error) {
        return {
            success: false,
            data: error?.response?.data?.message ?? "Произошла ошибка"
        }
    }
}
