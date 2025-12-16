package data.entity;

import jakarta.persistence.*;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="requests")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Valid
    @NotNull
    @Embedded
    private Point point;
    @Valid
    @NotNull
    @Embedded
    private Result result;
    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false)
    private User user;

    public Request() {
    }
}
