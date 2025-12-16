package controller;

import data.beans.UserLoginService;
import data.dto.DtoUser;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import service.readable.MessageContainer;
import service.readable.LoginUser;
import static utils.UserIdExtractor.getUserId;

@Path("/login")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class LoginController {
    @Inject
    private UserLoginService userLoginService;

    @GET
    public Response get(@Context HttpServletRequest request) {
        try {
            final DtoUser user = userLoginService.getInfo(getUserId(request));
            return Response.ok(user).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }

    @POST
    public Response login(LoginUser loginUser, @Context HttpServletRequest request) {
        try {
            final DtoUser user = userLoginService.login(loginUser);
            request.getSession(true).setAttribute("user_id", user.getId());
            return Response.ok(
                    new MessageContainer("Успешный вход в аккаунт!")).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(
                    new MessageContainer(e.getMessage())).build();
        } catch (ValidationException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }

    @DELETE
    public Response logout(@Context HttpServletRequest request) {
        request.getSession(false).invalidate();
        return Response.ok(new MessageContainer("Выход из аккаунта")).build();
    }
}
