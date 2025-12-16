package controller;

import data.beans.PointsService;
import controller.sockets.PointSocket;
import data.dto.DtoRequest;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import service.readable.MessageContainer;
import service.readable.RawData;
import java.util.List;
import static utils.UserIdExtractor.getUserId;

@Path("/points")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class PointsController {
    @Inject
    private PointsService pointsService;

    @GET
    public Response getPoints() {
        final List<DtoRequest> points = pointsService.getPoints();
        return Response.ok(points).build();
    }

    @POST
    public Response addPoint(RawData data, @Context HttpServletRequest request) {
        try {
            final long userId = getUserId(request);
            pointsService.addPoint(userId, data);
            PointSocket.sendToUser("update");
            return Response.ok(
                    new MessageContainer("Точка успешно добавлена!")
            ).build();
        } catch (ValidationException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(
                    new MessageContainer(e.getMessage())).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.FORBIDDEN).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }

    @DELETE
    public Response deletePoint(@Context HttpServletRequest request) {
        try {
            final long userId = getUserId(request);
            pointsService.clear(userId);
            PointSocket.sendToUser("update");
            return Response.ok(
                    new MessageContainer("Точки успешно очищены")).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.FORBIDDEN).entity(e.getMessage()).build();
        }
    }
}
