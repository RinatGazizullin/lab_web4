package utils;

import lombok.Getter;

@Getter
public enum ExitCode {
    ERROR(2), HIT(0), MISS(1);
    private final int code;

    ExitCode(int code) {
        this.code = code;
    }
}
