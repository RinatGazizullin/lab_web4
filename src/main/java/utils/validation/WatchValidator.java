package utils.validation;

import exception.ValidationException;
import service.readable.ChangeWatch;
import service.readable.RawClock;
import utils.ColorTheme;
import utils.ErrorCode;
import utils.TimeZone;
import utils.WatchType;
import java.util.List;

public class WatchValidator implements Validator<ChangeWatch> {
    @Override
    public void validate(ChangeWatch changeWatch) throws ValidationException {
        validateAll(changeWatch);
        validateNumber(changeWatch.getNumber(), changeWatch.getClocks().size());
        validateData(changeWatch.getClocks());
        System.out.println("Валидация закончена");
    }

    private void validateData(List<RawClock> clocks) throws ValidationException {
        for (RawClock clock : clocks) {
            if (clock.getWatchType() == null) {
                throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Тип часов"));
            } else if (clock.getTimezone() == null) {
                throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Часовой пояс"));
            } else if (clock.getColorTheme() == null) {
                throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Тема часов"));
            }

            System.out.println("Пытаемся пофиксить");
            System.out.println();
            if (!WatchType.check(clock.getWatchType())
                    || !TimeZone.check(clock.getTimezone())
                    || !ColorTheme.check(clock.getColorTheme())) {
                throw new ValidationException(ErrorCode.ENUM.getError());
            }
            System.out.println("валидация (ОДНА) прошла");
        }
    }

    private void validateAll(ChangeWatch changeWatch) throws ValidationException {
        if (changeWatch == null) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Значение"));
        }
        if (changeWatch.getNumber() == null) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Количество"));
        }
        if (changeWatch.getClocks() == null) {
            throw new ValidationException(String.format(ErrorCode.NULL.getError(), "Список часов"));
        }
    }

    private void validateNumber(Integer number, int toCheck) throws ValidationException {
        if (number < 1 || number > 4) {
            throw new ValidationException(String.format(ErrorCode.RANGE.getError(), "Количество", 1, 4));
        }
        if (number > toCheck) {
            throw new ValidationException(ErrorCode.NOT.getError());
        }
    }
}
