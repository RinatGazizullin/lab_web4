package controller;

import data.beans.WatchService;
import data.dto.ColorThemeDto;
import data.dto.TimeZoneDto;
import data.dto.WatchTypeDto;
import exception.NoAccessException;
import exception.ValidationException;
import jakarta.inject.Inject;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import lombok.Getter;
import service.readable.ChangeWatch;
import service.readable.MessageContainer;
import utils.ColorTheme;
import utils.TimeZone;
import utils.WatchType;
import java.util.Arrays;
import java.util.Map;
import java.util.stream.Collectors;
import static utils.UserIdExtractor.getUserId;

@Path("/time")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TimeController {
    private static final Options OPTIONS = new Options();
    @Inject
    private WatchService watchService;

    @GET
    public Response getTime(@Context HttpServletRequest request) {
        try {
            final Long userId = getUserId(request);
            return Response.ok(watchService.watchesByUser(userId)).build();
        } catch (NoAccessException e) {
            return Response.ok(watchService.defaultWatch()).build();
        }
    }

    @GET
    @Path("/options")
    public Response getOptions() {
        return Response.ok(OPTIONS).build();
    }

    @POST
    public Response setTime(ChangeWatch changeWatch, @Context HttpServletRequest request) {
        try {
            watchService.setWatch(getUserId(request), changeWatch);
            return Response.ok(
                    new MessageContainer("Часы успешно изменены")).build();
        } catch (ValidationException e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(
                    new MessageContainer(e.getMessage())).build();
        } catch (NoAccessException e) {
            return Response.status(Response.Status.FORBIDDEN).entity(
                    new MessageContainer(e.getMessage())).build();
        }
    }

    @Getter
    public static class Options {
        private final Map<TimeZone, TimeZoneDto> timeZone = Arrays.stream(TimeZone.values()).collect(
                Collectors.toMap(zone -> zone, TimeZoneDto::ofEnum));
        private final Map<WatchType, WatchTypeDto> watchType = Arrays.stream(WatchType.values()).collect(
                Collectors.toMap(type -> type, WatchTypeDto::ofEnum));
        private final Map<ColorTheme, ColorThemeDto> colorTheme = Arrays.stream(ColorTheme.values()).collect(
                Collectors.toMap(color -> color, ColorThemeDto::ofEnum));
    }
}
