package utils.builder;

import data.entity.User;
import exception.ValidationException;
import service.readable.LoginUser;
import utils.hash.Hash;
import utils.hash.HashMaker;
import utils.validation.LoginUserValidator;
import utils.validation.Validator;

public class UserBuilder implements Builder<User, LoginUser> {
    private static final Validator<LoginUser> VALIDATOR = new LoginUserValidator();
    private static final Hash HASH = new HashMaker();

    @Override
    public User build(LoginUser loginUser) throws ValidationException {
        VALIDATOR.validate(loginUser);
        final User user = new User();
        user.setUser(loginUser.getUsername());
        user.setHash(HASH.hashPassword(loginUser.getPassword()));
        return user;
    }
}
