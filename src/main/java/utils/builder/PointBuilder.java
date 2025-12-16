package utils.builder;

import data.entity.Point;
import exception.ValidationException;
import service.readable.RawData;
import utils.validation.RawDataValidator;
import utils.validation.Validator;
import java.math.BigDecimal;

public class PointBuilder implements Builder<Point, RawData> {
    private static final Validator<RawData> VALIDATOR = new RawDataValidator();

    @Override
    public Point build(RawData rawData) throws ValidationException {
        VALIDATOR.validate(rawData);
        final Point point = new Point();
        point.setX(Double.parseDouble(rawData.getX()));
        point.setY(BigDecimal.valueOf(Double.parseDouble(rawData.getY())));
        point.setR(Double.parseDouble(rawData.getR()));
        return point;
    }
}
