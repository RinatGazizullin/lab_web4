package utils.validation;

import exception.ValidationException;
import service.readable.RawData;
import utils.ErrorCode;

public class RawDataValidator implements Validator<RawData> {
    private static final String PATTERN = "[-+]?\\d+(\\.\\d+)?";

    @Override
    public void validate(RawData data) throws ValidationException {
        validateNum(data.getX(), "X");
        validateNum(data.getY(), "Y");
        validateNum(data.getR(), "R");
    }

    public void validateNum(String s, String name) throws ValidationException {
        if (s == null || s.isEmpty()) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), name));
        }
        if (!s.matches(PATTERN)) {
            throw new ValidationException(String.format(ErrorCode.NUMBER.getError(), name));
        }
    }
}
