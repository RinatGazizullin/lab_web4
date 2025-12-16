package data.dao;

import data.dto.WatchDto;
import data.entity.User;
import data.entity.Watch;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaDelete;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import service.readable.ChangeWatch;
import utils.ErrorCode;
import utils.builder.Builder;
import utils.builder.WatchBuilder;
import java.util.List;

@Stateless
public class WatchDao {
    private static final Builder<List<Watch>, ChangeWatch> BUILDER = new WatchBuilder();
    @PersistenceContext
    private EntityManager entityManager;
    @Inject
    private UserDao userDao;

    public void replaceWatches(Long userId, ChangeWatch changeWatch) throws NoAccessException, ValidationException {
        System.out.println("=== Сохраняем часы ====");
        final List<Watch> watches = BUILDER.build(changeWatch);
        System.out.println("Сборка прошла");

        final CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        final CriteriaDelete<Watch> criteria = builder.createCriteriaDelete(Watch.class);
        final Root<Watch> watchRoot = criteria.from(Watch.class);

        criteria.where(builder.equal(watchRoot.get("user").get("id"), userId));
        entityManager.createQuery(criteria).executeUpdate();

        final User user = userDao.findUserById(userId);
        if (user == null) {
            throw new NoAccessException(ErrorCode.ERROR.getError());
        }
        watches.forEach(watch -> {
            watch.setUser(user);
            entityManager.persist(watch);
        });
        System.out.println("=== Сохранение часов завершено ====");
    }

    public List<WatchDto> watchesByUser(Long userId) {
        final CriteriaBuilder builder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<Watch> query = builder.createQuery(Watch.class);
        final Root<Watch> watch = query.from(Watch.class);

        query.select(watch).where(builder.equal(watch.get("user").get("id"), userId));
        return entityManager.createQuery(query).getResultList()
                .stream().map(WatchDto::ofEntity).toList();
    }
}
