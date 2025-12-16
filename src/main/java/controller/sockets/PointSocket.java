package controller.sockets;

import jakarta.websocket.*;
import jakarta.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.*;

@ServerEndpoint("/events")
public class PointSocket {
    private static final Set<Session> sessions = new HashSet<>();

    @OnOpen
    public void onOpen(Session session) {
        System.out.println("=== Открыто соединение ===");
        sessions.add(session);
    }

    @OnClose
    public void onClose(Session session) {
        System.out.println("=== Закрытие соединения ===");
        sessions.remove(session);
    }

    @OnError
    public void onError(Session session, Throwable ignore) {
        System.out.println("=== Произошла ошибка ===");
        try {
            session.close();
        } catch (IOException ignored) {
        } finally {
            sessions.remove(session);
        }
    }

    public static void sendToUser(String message) {
        System.out.println("=== Sending ===");
        sessions.removeIf(session -> !session.isOpen());
        if (!sessions.isEmpty()) {
            final Iterator<Session> iterator = sessions.iterator();
            System.out.println("Найдена сессия");

            while (iterator.hasNext()) {
                Session session = iterator.next();
                if (session != null && session.isOpen()) {
                    synchronized (session) {
                        try {
                            System.out.println("Отправляем сообщение");
                            session.getAsyncRemote().sendText(String.format("{\"message\": \"%s\"}", message));
                        } catch (Exception e) {
                            System.out.println("Не удалось");
                            iterator.remove();
                            sessions.remove(session);
                        }
                    }
                } else {
                    iterator.remove();
                }
            }
        }
        System.out.println("=== Sending ends ===");
    }
    /*
    private static final Map<Long, Set<Session>> userSessions = new ConcurrentHashMap<>();
    private static final Map<Session, Long> sessionUsers = new ConcurrentHashMap<>();

    @OnOpen
    public void onOpen(Session session) {
        System.out.println("=== Открыто соединение ===");
        String userIdParam = session.getRequestParameterMap()
                .getOrDefault("user_id", null)
                .stream()
                .findFirst()
                .orElse(null);
        getUserId(session);

        if (userIdParam != null) {
            try {
                Long userId = Long.parseLong(userIdParam);
                userSessions.computeIfAbsent(userId, k -> Collections.newSetFromMap(new ConcurrentHashMap<>()))
                        .add(session);
                sessionUsers.put(session, userId);
            } catch (NumberFormatException e) {
                try {
                    session.close();
                } catch (IOException ignored) {}
            }
        } else {
            try {
                session.close();
            } catch (IOException ignored) {}
        }
    }

    @OnClose
    public void onClose(Session session) {
        System.out.println("=== Закрытие соединения ===");
        final Long userId = sessionUsers.remove(session);
        if (userId != null) {
            final Set<Session> sessions = userSessions.get(userId);
            if (sessions != null) {
                sessions.remove(session);
                if (sessions.isEmpty()) {
                    userSessions.remove(userId);
                }
            }
        }
    }

    @OnError
    public void onError(Session session, Throwable error) {
        final Long userId = sessionUsers.get(session);
        if (userId != null) {
            final Set<Session> sessions = userSessions.get(userId);
            if (sessions != null) {
                sessions.remove(session);
                if (sessions.isEmpty()) {
                    userSessions.remove(userId);
                }
            }
            sessionUsers.remove(session);
        }
        try {
            session.close();
        } catch (IOException ignored) {}
    }

    public static void sendToUser(Long userId, String message) {
        System.out.println("=== Sending ===");
        Set<Session> sessions = userSessions.get(userId);
        if (sessions != null && !sessions.isEmpty()) {
            final Iterator<Session> iterator = sessions.iterator();
            System.out.println("Найдена сессия");

            while (iterator.hasNext()) {
                Session session = iterator.next();
                if (session != null && session.isOpen()) {
                    synchronized (session) {
                        try {
                            System.out.println("Отправляем сообщение");
                            session.getAsyncRemote().sendText(String.format("{\"message\": \"%s\"}", message));
                        } catch (Exception e) {
                            System.out.println("Не удалось");
                            iterator.remove();
                            sessionUsers.remove(session);
                        }
                    }
                } else {
                    iterator.remove();
                    sessionUsers.remove(session);
                }
            }
            if (sessions.isEmpty()) {
                userSessions.remove(userId);
            }
        }
        System.out.println("=== Sending ends ===");
    }

    public static void closeSessionById(Long userId) {
        final Set<Session> sessions = userSessions.get(userId);
        if (sessions != null && !sessions.isEmpty()) {
            sessions.forEach(session -> {
                sessionUsers.remove(session);
                try {
                    session.close();
                } catch (IOException ignored) {}
            });
            sessions.clear();
        }
    }
     */
}
