package data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import utils.ExitCode;

@Embeddable
@Getter
@Setter
public class Result {
    @NotNull
    @Column(nullable = false)
    private String time;
    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ExitCode code;
    @NotNull
    @Column(nullable = false)
    private Long execution;
    @NotNull
    @Column(nullable = false)
    private String message;

    public Result() {
    }
}