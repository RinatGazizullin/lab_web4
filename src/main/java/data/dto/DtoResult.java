package data.dto;

import data.entity.Result;
import lombok.Getter;
import lombok.Value;
import utils.ExitCode;

@Value
@Getter
public class DtoResult {
    String time;
    ExitCode code;
    Long execution;
    String message;

    public static DtoResult ofEntity(Result result) {
        return new DtoResult(result.getTime(), result.getCode(), result.getExecution(), result.getMessage());
    }
}
