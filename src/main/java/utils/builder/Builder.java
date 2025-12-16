package utils.builder;

import exception.ValidationException;

public interface Builder<R, T> {
    R build(T t) throws ValidationException;
}
