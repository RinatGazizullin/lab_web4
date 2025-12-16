import { api } from "./api"

export const time = async() => {
    try {
        const response = await api.get("/time");
        return {
            success: true,
            data: response.data || "Нет ответа"
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message || "Произошла ошибка"
        }
    }
}

export const options = async() => {
    try {
        const response = await api.get("/time/options");
        return {
            success: true,
            data: response.data.message || "Нет ответа"
        };
    } catch (error) {
        return {
            success: false,
            data: error.response.data.message || "Произошла ошибка"
        }
    }
}

export const change = async(number, clocks) => {
    try {
        const response = await api.post("/time", {
            number: number, clocks: clocks
        });
        return {
            success: true,
            data: response?.data?.message || "Нет ответа"
        }
    } catch (error) {
        return {
            success: false,
            data: error?.response?.data?.message || "Произошла ошибка"
        }
    }
}
