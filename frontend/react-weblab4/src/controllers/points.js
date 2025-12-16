import { api } from "./api"

export const get_points = async() => {
    try {
        const response = await api.get('/points');
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            data: error?.response?.data?.message
        }
    }
};

export const add_point = async(x, y, r) => {
    try {
        const response = await api.post('/points',
            {
                x: x,
                y: y,
                r: r
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

export const clear = async() => {
    try {
        const response = await api.delete('/points');
        return {
            success: true,
            data: response.data
        };
    } catch (error) {
        return {
            success: false,
            data: error
        };
    }
}
