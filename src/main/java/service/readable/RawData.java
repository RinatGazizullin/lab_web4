package service.readable;

import lombok.Getter;

@Getter
public class RawData {
    private String x;
    private String y;
    private String r;

    public void setX(String x) {
        this.x = prepareString(x);
    }

    public void setY(String y) {
        this.y = prepareString(y);
    }

    public void setR(String r) {
        this.r = prepareString(r);
    }

    private String prepareString(String s) {
        return s == null ? null : (s.startsWith(".") || s.startsWith(",") ? "0" : "")
                + s.replace(',', '.');
    }
}
