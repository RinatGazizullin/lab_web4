package data.dto;

import data.entity.Watch;
import lombok.Getter;
import lombok.Value;
import utils.ColorTheme;
import utils.TimeZone;
import utils.WatchType;

@Value
@Getter
public class WatchDto {
    TimeZone timezone;
    ColorTheme colorTheme;
    WatchType watchType;

    public static WatchDto ofEntity(Watch watch) {
        return new WatchDto(watch.getTimezone(), watch.getColorTheme(), watch.getWatchType());
    }

    public static WatchDto ofParams(TimeZone timezone,
                                    ColorTheme colorTheme,
                                    WatchType watchType) {
        return new WatchDto(timezone, colorTheme, watchType);
    }
}
