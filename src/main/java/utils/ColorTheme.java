package utils;

import lombok.Getter;

@Getter
public enum ColorTheme {
    DAY("Дневной"),
    NIGHT("Ночной"),
    AUTO("Адаптивный");

    private final String label;
    private final String name;

    ColorTheme(String label) {
        this.label = label;
        this.name = this.name();
    }

    public static boolean check(String label) {
        try {
            ColorTheme.valueOf(label);
            return true;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
