package utils.builder;

import data.entity.User;
import exception.ValidationException;
import service.readable.RegisterUser;
import utils.hash.Hash;
import utils.hash.HashMaker;
import utils.validation.RegisterValidator;
import utils.validation.Validator;

public class RegisterBuilder implements Builder<User, RegisterUser> {
    private static final Validator<RegisterUser> VALIDATOR = new RegisterValidator();
    private static final Hash HASH = new HashMaker();

    @Override
    public User build(RegisterUser loginUser) throws ValidationException {
        VALIDATOR.validate(loginUser);
        final User user = new User();
        user.setName(loginUser.getName());
        user.setUser(loginUser.getUsername());
        user.setHash(HASH.hashPassword(loginUser.getPassword()));
        return user;
    }
}
