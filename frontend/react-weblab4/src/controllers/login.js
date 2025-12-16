import { api } from "./api"

export const change = async(password) => {
    try {
        const response = await api.post("/change",
            {
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

export const get = async() => {
    try {
        const response = await api.get('/login');
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

export const login = async(username, password) => {
    try {
        const response = await api.post('/login',
            {
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

export const logout = async() => {
    try {
        const response = await api.delete('/login');
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
