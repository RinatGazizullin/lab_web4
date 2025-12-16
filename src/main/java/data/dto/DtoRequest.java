package data.dto;

import data.entity.Request;
import lombok.Getter;
import lombok.Value;

@Value
@Getter
public class DtoRequest {
    DtoPoint point;
    DtoResult result;
    DtoUser user;

    public static DtoRequest ofEntity(Request request) {
        return new DtoRequest(DtoPoint.ofEntity(request.getPoint()),
                DtoResult.ofEntity(request.getResult()),
                DtoUser.ofEntity(request.getUser()));
    }
}
