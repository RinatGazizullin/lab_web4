package data.dto;

import data.entity.Point;
import lombok.Getter;
import lombok.Value;
import java.math.BigDecimal;

@Value
@Getter
public class DtoPoint {
    Double x;
    BigDecimal y;
    Double r;

    public static DtoPoint ofEntity(Point point) {
        return new DtoPoint(point.getX(), point.getY(), point.getR());
    }
}
