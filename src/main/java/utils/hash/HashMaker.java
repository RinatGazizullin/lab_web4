package utils.hash;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashMaker implements Hash {
    private static final String HASH_ALGORITHM = "SHA-256";

    @Override
    public String hashPassword(String password) {
        try {
            final MessageDigest hashInstance = MessageDigest.getInstance(HASH_ALGORITHM);
            final byte[] hash = hashInstance.digest(password.getBytes());
            return bytesToHex(hash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Hash algorithm not available", e);
        }
    }

    @Override
    public boolean checkPassword(String password, String storedHash) {
        final String hash = hashPassword(password);
        return hash.equals(storedHash);
    }

    private String bytesToHex(byte[] hash) {
        final StringBuilder result = new StringBuilder();
        for (byte elem : hash) {
            result.append(String.format("%02x", elem));
        }
        return result.toString();
    }
}
