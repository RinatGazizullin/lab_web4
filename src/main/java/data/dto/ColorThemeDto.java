package data.dto;

import lombok.Getter;
import lombok.Value;
import utils.ColorTheme;

@Getter
@Value
public class ColorThemeDto {
    String label;
    String name;

    public static ColorThemeDto ofEnum(ColorTheme colorTheme) {
        return new ColorThemeDto(colorTheme.getLabel(), colorTheme.getName());
    }
}
