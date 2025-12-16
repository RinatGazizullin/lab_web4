package service.readable;

import lombok.Getter;
import lombok.Setter;
import java.util.List;

@Getter
@Setter
public class ChangeWatch {
    private Integer number;
    private List<RawClock> clocks;
}
