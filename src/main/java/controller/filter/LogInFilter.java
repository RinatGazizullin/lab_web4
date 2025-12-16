package controller.filter;

import jakarta.annotation.Priority;
import jakarta.ws.rs.Priorities;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import service.readable.MessageContainer;
import utils.ErrorCode;

import java.util.HashMap;
import java.util.Map;

@Provider
@Priority(Priorities.AUTHENTICATION)
public class LogInFilter implements ContainerRequestFilter {
    private static final Map<String, String> PUBLIC_MAP = new HashMap<>();
    @Context
    private HttpServletRequest httpServletRequest;

    static {
        PUBLIC_MAP.put("/login", "POST");
        PUBLIC_MAP.put("/register", "POST");
        PUBLIC_MAP.put("/time", "GET");
        PUBLIC_MAP.put("/time/options", "GET");
    }

    @Override
    public void filter(ContainerRequestContext requestContext) {
        final String path = requestContext.getUriInfo().getPath();
        final String method = requestContext.getMethod();

        System.out.println("=== FILTER START ===");
        System.out.println("Path: " + path);
        System.out.println("Method: " + method);
        System.out.println("HttpServletRequest: " + httpServletRequest);

        boolean isPublic = PUBLIC_MAP.entrySet().stream()
                .anyMatch(publicCheck -> path.endsWith(publicCheck.getKey())
                        && method.equals(publicCheck.getValue()));

        if (isPublic) {
            System.out.println("Public path with POST - ALLOWED");
            System.out.println("=== FILTER END ===");
            return;
        }

        if (httpServletRequest == null) {
            System.out.println("ERROR: HttpServletRequest is null!");
            requestContext.abortWith(
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                            .entity("Server configuration error").build());
            return;
        }

        HttpSession session = httpServletRequest.getSession(false);
        System.out.println("Session object: " + session);

        if (session == null) {
            System.out.println("No session found");
            requestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED)
                            .entity(new MessageContainer(ErrorCode.LOGIN.getError())).build());
            return;
        }

        Long userId = (Long) session.getAttribute("user_id");
        System.out.println("User ID from session: " + userId);

        if (userId == null) {
            System.out.println("User ID is null in session");
            requestContext.abortWith(
                    Response.status(Response.Status.UNAUTHORIZED)
                            .entity(new MessageContainer(ErrorCode.LOGIN.getError())).build());
            return;
        }

        System.out.println("User authenticated with ID: " + userId);
        System.out.println("=== FILTER END ===");
    }
}
