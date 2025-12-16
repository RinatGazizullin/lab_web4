package data.beans;

import data.entity.Point;
import data.entity.Request;
import data.entity.Result;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;
import service.AreaChecker;
import service.CanCheck;
import utils.ExitCode;

/**
 * Класс-bean для проверки попадания точки.
 *
 * @author rinat
 */
@Named("calculation")
@ApplicationScoped
public class CalculatorBean {
    private static final CanCheck CHECKER = new AreaChecker();

    public Request calculatePoint(Point point, Result result) {
        final boolean isHit = CHECKER.check(point);
        result.setCode(isHit ? ExitCode.HIT : ExitCode.MISS);
        result.setMessage(isHit ? "Попадание" : "Промах");

        final Request request = new Request();
        request.setPoint(point);
        request.setResult(result);
        return request;
    }
}
