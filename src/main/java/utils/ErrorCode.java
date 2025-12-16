package utils;

import lombok.Getter;

@Getter
public enum ErrorCode {
    LOGIN("Сначала авторизуйтесь в свой аккаунт"),
    NULL("%s не может быть пустым"),
    NUMBER("%s должно быть числом"),
    NEW("Данное имя уже занято"),
    LONG("%s слишком длинное"),
    ERROR("Неверные данные пользователя"),
    RANGE("%s должно быть от %d до %d"),
    NOT("Не хватает данных"),
    ENUM("Неверное значение");
    private final String error;

    ErrorCode(String error) {
        this.error = error;
    }
}
