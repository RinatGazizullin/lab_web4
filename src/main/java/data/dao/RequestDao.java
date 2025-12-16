package data.dao;

import data.entity.Request;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaDelete;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;
import java.util.List;

@Stateless
public class RequestDao {
    @PersistenceContext
    private EntityManager entityManager;

    public List<Request> getRequests() {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaQuery<Request> criteriaQuery = criteriaBuilder.createQuery(Request.class);
        final Root<Request> requestRoot = criteriaQuery.from(Request.class);

        criteriaQuery.select(requestRoot);
        return entityManager.createQuery(criteriaQuery).getResultList();
    }

    public void add(Request request) {
        entityManager.persist(request);
    }

    public void clear(long id) {
        final CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        final CriteriaDelete<Request> delete = criteriaBuilder.createCriteriaDelete(Request.class);
        final Root<Request> requestRoot = delete.from(Request.class);

        delete.where(criteriaBuilder.equal(requestRoot.get("user").get("id"), id));
        entityManager.createQuery(delete).executeUpdate();
    }
}
