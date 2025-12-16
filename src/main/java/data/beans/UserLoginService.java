package data.beans;

import data.dao.UserDao;
import data.dto.DtoUser;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;
import service.readable.LoginUser;
import service.readable.RegisterUser;

@Stateless
public class UserLoginService {
    @Inject
    private UserDao userDao;

    public DtoUser change(String password, long id) throws NoAccessException {
        return DtoUser.ofEntity(userDao.change(password, id));
    }

    public DtoUser getInfo(long id) {
        return DtoUser.ofEntity(userDao.findUserById(id));
    }

    public DtoUser login(LoginUser loginUser) throws NoAccessException, ValidationException {
        return DtoUser.ofEntity(userDao.find(loginUser));
    }

    public DtoUser register(RegisterUser registerUser) throws NoAccessException, ValidationException {
        return DtoUser.ofEntity(userDao.add(registerUser));
    }

    public DtoUser delete(long id) throws NoAccessException {
        return DtoUser.ofEntity(userDao.delete(id));
    }
}
