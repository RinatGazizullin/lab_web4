package data.beans;

import data.dao.WatchDao;
import data.dto.WatchDto;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.ejb.Stateless;
import jakarta.inject.Inject;
import service.readable.ChangeWatch;
import utils.ColorTheme;
import utils.TimeZone;
import utils.WatchType;
import java.util.List;

@Stateless
public class WatchService {
    private static final List<WatchDto> watches = List.of(
            WatchDto.ofParams(TimeZone.MOSCOW, ColorTheme.AUTO, WatchType.CLASSIC),
            WatchDto.ofParams(TimeZone.LONDON, ColorTheme.AUTO, WatchType.CLASSIC),
            WatchDto.ofParams(TimeZone.BEIJING, ColorTheme.AUTO, WatchType.CLASSIC),
            WatchDto.ofParams(TimeZone.NEW_YORK, ColorTheme.AUTO, WatchType.CLASSIC)
    );
    @Inject
    private WatchDao watchDao;

    public void setWatch(Long userId, ChangeWatch changeWatch) throws NoAccessException, ValidationException {
        watchDao.replaceWatches(userId, changeWatch);
    }

    public List<WatchDto> defaultWatch() {
        return watches;
    }

    public List<WatchDto> watchesByUser(Long userId) {
        final var watches = watchDao.watchesByUser(userId);
        return watches.isEmpty() ? defaultWatch() : watches;
    }
}
