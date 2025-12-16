package utils.hash;

public interface Hash {
    boolean checkPassword(String password, String storedHash);
    String hashPassword(String password);
}
