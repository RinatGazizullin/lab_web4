package data.dto;

import lombok.Getter;
import lombok.Value;
import utils.TimeZone;

@Getter
@Value
public class TimeZoneDto {
    String label;
    String name;
    String cityName;
    double offsetFromGMT;
    String ianaId;

    public static TimeZoneDto ofEnum(TimeZone timeZone) {
        return new TimeZoneDto(timeZone.getLabel(), timeZone.getName(), timeZone.getCityName(),
                timeZone.getOffsetFromGMT(), timeZone.getIanaId());
    }
}
