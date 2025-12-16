package service;

import data.entity.Point;
import java.math.BigDecimal;

public class AreaChecker implements CanCheck {
    @Override
    public boolean check(Point point) {
        final double r = point.getR();
        final double x = point.getX() * (r < 0 ? -1 : 1);
        final BigDecimal y = point.getY().multiply(new BigDecimal(r < 0 ? -1 : 1));
        return checkFirst(x, y, r) || checkSecond(x, y, r) || checkFourth(x, y, r);
    }

    private boolean checkFirst(double x, BigDecimal y, double r) {
        if (y.compareTo(BigDecimal.ZERO) >= 0 && x >= 0) {
            return y.compareTo(BigDecimal.valueOf(-x + r/2)) <= 0;
        }
        return false;
    }

    private boolean checkSecond(double x, BigDecimal y, double r) {
        if (y.compareTo(BigDecimal.ZERO) >= 0 && x <= 0) {
            return y.compareTo(BigDecimal.valueOf(r)) <= 0 && x >= -r;
        }
        return false;
    }

    private boolean checkFourth(double x, BigDecimal y, double r) {
        if (y.compareTo(BigDecimal.ZERO) <= 0 && x >= 0) {
            return y.pow(2).compareTo(BigDecimal.valueOf(Math.pow(r/2, 2) - Math.pow(x, 2))) <= 0;
        }
        return false;
    }
}
