package utils.validation;

import exception.ValidationException;

/**
 * Проверка данных клиента.
 *
 * @param <T> Тип данных для проверки
 *
 * @author rinat
 */
public interface Validator<T> {
    /**
     * Метод проверки.
     *
     * @param t Объект для проверки
     * @throws ValidationException Ошибка проверка
     */
    void validate(T t) throws ValidationException;
}
