package utils;

import exception.NoAccessException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

public class UserIdExtractor {
    public static long getUserId(HttpServletRequest request) throws NoAccessException {
        HttpSession session = request.getSession(false);
        if (session == null) {
            throw new NoAccessException(ErrorCode.LOGIN.getError());
        }
        final Long userId = (Long) session.getAttribute("user_id");
        if (userId == null) {
            throw new NoAccessException(ErrorCode.LOGIN.getError());
        }
        return userId;
    }
}
