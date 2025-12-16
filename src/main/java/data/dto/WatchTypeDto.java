package data.dto;

import lombok.Getter;
import lombok.Value;
import utils.WatchType;

@Getter
@Value
public class WatchTypeDto {
    String label;
    String name;

    public static WatchTypeDto ofEnum(WatchType watchType) {
        return new WatchTypeDto(watchType.getLabel(), watchType.getName());
    }
}
