package controller;

import data.beans.UserLoginService;
import controller.sockets.PointSocket;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import service.readable.MessageContainer;
import service.readable.RegisterUser;
import static utils.UserIdExtractor.getUserId;

@Path("/register")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class RegisterController {
    @Inject
    private UserLoginService userLoginService;

    @POST
    public Response register(RegisterUser user) {
        try {
            return Response.ok(
                    new MessageContainer(String.format("Пользователь %s зарегистрирован",
                    userLoginService.register(user).getUser()))).build();
        } catch (ValidationException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(
                    new MessageContainer(e.getMessage())).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.FORBIDDEN).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }

    @DELETE
    public Response delete(@Context HttpServletRequest request) {
        try {
            final long userId = getUserId(request);
            request.getSession(true).invalidate();
            PointSocket.sendToUser("update");
            return Response.ok(
                    new MessageContainer(String.format("Пользователь %s был удален",
                    userLoginService.delete(userId).getUser()))).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.FORBIDDEN).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }
}
