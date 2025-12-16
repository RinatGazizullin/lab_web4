package data.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;
import utils.ColorTheme;
import utils.TimeZone;
import utils.WatchType;

@Entity
@Getter
@Setter
@Table(name="watch")
public class Watch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private TimeZone timezone;
    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ColorTheme colorTheme;
    @NotNull
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private WatchType watchType;
    @NotNull
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(nullable = false)
    private User user;
}
