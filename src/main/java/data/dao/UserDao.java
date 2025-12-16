package data.dao;

import data.entity.User;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import service.readable.LoginUser;
import service.readable.RegisterUser;
import utils.ErrorCode;
import utils.builder.Builder;
import utils.builder.RegisterBuilder;
import utils.hash.Hash;
import utils.hash.HashMaker;

@Stateless
public class UserDao {
    private static final Hash HASH = new HashMaker();
    private static final Builder<User, RegisterUser> BUILDER = new RegisterBuilder();
    @PersistenceContext
    private EntityManager entityManager;

    public User change(String password, long id) throws NoAccessException {
        final User toChange =  findUserById(id);
        if (toChange == null || password == null) {
            throw new NoAccessException(ErrorCode.ERROR.getError());
        }
        toChange.setHash(HASH.hashPassword(password));
        return toChange;
    }

    public User find(LoginUser user) throws NoAccessException {
        final User checkUser = findUser(user.getUsername());
        if (checkUser != null && HASH.checkPassword(user.getPassword(), checkUser.getHash())) {
            return checkUser;
        }
        throw new NoAccessException(ErrorCode.ERROR.getError());
    }

    public User findUserById(long id) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
        final Root<User> root = criteriaQuery.from(User.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get("id"), id));
        return entityManager.createQuery(criteriaQuery)
                .getResultStream().findFirst().orElse(null);
    }

    public User add(RegisterUser registerUser) throws NoAccessException, ValidationException {
        final User checkUser = findUser(registerUser.getUsername());
        if (checkUser != null) {
            throw new NoAccessException(ErrorCode.NEW.getError());
        }
        final User user = BUILDER.build(registerUser);
        entityManager.persist(user);
        return user;
    }

    public User delete(long id) {
        final User user = findUserById(id);
        entityManager.remove(user);
        return user;
    }

    private User findUser(String name) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<User> criteriaQuery = criteriaBuilder.createQuery(User.class);
        final Root<User> root = criteriaQuery.from(User.class);

        criteriaQuery.select(root).where(criteriaBuilder.equal(root.get("user"), name));
        return entityManager.createQuery(criteriaQuery)
                .getResultStream().findFirst().orElse(null);
    }
}
