package utils.builder;

import data.entity.Watch;
import exception.ValidationException;
import service.readable.ChangeWatch;
import service.readable.RawClock;
import utils.ColorTheme;
import utils.TimeZone;
import utils.WatchType;
import utils.validation.Validator;
import utils.validation.WatchValidator;
import java.util.ArrayList;
import java.util.List;

public class WatchBuilder implements Builder<List<Watch>, ChangeWatch> {
    private static final Validator<ChangeWatch> VALIDATOR = new WatchValidator();

    @Override
    public List<Watch> build(ChangeWatch changeWatch) throws ValidationException {
        final List<Watch> watches = new ArrayList<>();
        try {
            VALIDATOR.validate(changeWatch);
        } catch (ValidationException e) {
            e.printStackTrace();
            throw e;
        }
        for (RawClock clock : changeWatch.getClocks().subList(0, changeWatch.getNumber())) {
            final Watch watch = new Watch();
            watch.setTimezone(TimeZone.valueOf(clock.getTimezone()));
            watch.setWatchType(WatchType.valueOf(clock.getWatchType()));
            watch.setColorTheme(ColorTheme.valueOf(clock.getColorTheme()));
            watches.add(watch);
        }
        return watches;
    }
}
