package service.readable;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginUser {
    private String username;
    private String password;

    public LoginUser() {
    }
}
