package data.dto;

import data.entity.User;
import lombok.Getter;
import lombok.Value;

@Value
@Getter
public class DtoUser {
    Long id;
    String name;
    String user;
    String hash;

    public static DtoUser ofEntity(User user) {
        return new DtoUser(user.getId(), user.getName(), user.getUser(), user.getHash());
    }
}
