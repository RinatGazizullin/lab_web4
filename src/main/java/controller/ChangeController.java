package controller;

import data.beans.UserLoginService;
import exception.NoAccessException;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import service.readable.MessageContainer;
import service.readable.RawPassword;
import static utils.UserIdExtractor.getUserId;

@Path("/change")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ChangeController {
    @Inject
    private UserLoginService userLoginService;
    @POST
    public Response change(RawPassword password, @Context HttpServletRequest request) {
        try {
            final long id = getUserId(request);
            userLoginService.change(password.getPassword(), id);
            return Response.ok(
                    new MessageContainer("Данные успешно изменены")).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }
}
