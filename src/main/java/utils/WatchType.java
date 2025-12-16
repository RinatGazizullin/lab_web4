package utils;

import lombok.Getter;

@Getter
public enum WatchType {
    CLASSIC("Классический"),
    FUSION("Футуристичный"),
    FUNKY("Веселый"),
    VINTAGE("Винтажный");

    private final String label;
    private final String name;

    WatchType(String label) {
        this.label = label;
        this.name = this.name();
    }

    public static boolean check(String label) {
        try {
            WatchType.valueOf(label);
            return true;
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
            return false;
        }
    }
}
