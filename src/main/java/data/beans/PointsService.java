package data.beans;

import data.dao.RequestDao;
import data.dao.UserDao;
import data.dto.DtoRequest;
import data.entity.Point;
import data.entity.Request;
import data.entity.Result;
import exception.ValidationException;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;
import service.readable.RawData;
import utils.builder.Builder;
import utils.builder.PointBuilder;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.stream.Collectors;

@Stateless
public class PointsService {
    @Inject
    private RequestDao requestDao;
    @Inject
    private CalculatorBean calculator;
    @Inject
    private UserDao userDao;
    private static final Builder<Point, RawData> BUILDER = new PointBuilder();
    private static final DateTimeFormatter FORMATTER = DateTimeFormatter.ofPattern("HH:mm:ss");

    public List<DtoRequest> getPoints() {
        return requestDao.getRequests().stream()
                .map(DtoRequest::ofEntity).collect(Collectors.toList());
    }

    public void addPoint(long userId, RawData rawData) throws ValidationException {
        final Instant now = Instant.now();
        final Point point = BUILDER.build(rawData);
        final Result result = new Result();
        result.setTime(FORMATTER.format(now.atZone(ZoneId.systemDefault())));
        result.setExecution(Duration.between(now, Instant.now()).toNanos() / 1000);
        final Request request = calculator.calculatePoint(point, result);
        request.setUser(userDao.findUserById(userId));
        requestDao.add(request);
    }

    public void clear(long userId) {
        requestDao.clear(userId);
    }
}
