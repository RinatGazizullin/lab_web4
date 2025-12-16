package utils.validation;

import exception.ValidationException;
import service.readable.RegisterUser;
import utils.ErrorCode;

public class RegisterValidator implements Validator<RegisterUser> {
    private static final int MAX_LENGTH = 15;

    @Override
    public void validate(RegisterUser loginUser) throws ValidationException {
        validateName(loginUser.getName());
        validateUser(loginUser.getUsername());
        validatePassword(loginUser.getPassword());
    }

    private void validateName(String name) throws ValidationException {
        if (name == null || name.isEmpty()) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Имя"));
        }
        if (name.length() > MAX_LENGTH) {
            throw new ValidationException(String.format(ErrorCode.LONG.getError(), "Имя"));
        }
    }

    private void validateUser(String user) throws ValidationException {
        if (user == null || user.isEmpty()) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Пользователь"));
        }
        if (user.length() > MAX_LENGTH) {
            throw new ValidationException(String.format(ErrorCode.LONG.getError(), "Пользователь"));
        }
    }

    private void validatePassword(String password) throws ValidationException {
        if (password == null || password.isEmpty()) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Пароль"));
        }
        if (password.length() > MAX_LENGTH) {
            throw new ValidationException(String.format(ErrorCode.LONG.getError(), "Пароль"));
        }
    }
}
