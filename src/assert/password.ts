import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function password(value: unknown, options?: { minLength?: number; requireSpecial?: boolean }): asserts value is string {
    if (!isx.password(value, options)) {
        throw new ValidationError(
            "Invalid password",
            "INVALID_PASSWORD"
        );
    }
}
