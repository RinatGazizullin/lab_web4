package utils.validation;

import exception.ValidationException;
import service.readable.LoginUser;
import utils.ErrorCode;

public class LoginUserValidator implements Validator<LoginUser> {
    private static final int MAX_LENGTH = 15;

    @Override
    public void validate(LoginUser loginUser) throws ValidationException {
        validateUser(loginUser.getUsername());
        validatePassword(loginUser.getPassword());
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
