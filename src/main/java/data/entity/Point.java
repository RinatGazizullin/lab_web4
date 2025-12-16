package data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;

@Embeddable
@Getter
@Setter
public class Point {
    @NotNull
    @Column(nullable = false)
    private Double x;
    @NotNull
    @Column(nullable = false)
    private BigDecimal y;
    @NotNull
    @Column(nullable = false)
    private Double r;

    public Point() {
    }
}
