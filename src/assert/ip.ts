import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function ip(value: unknown, version?: 4 | 6): asserts value is string {
    if (!isx.ip(value, version)) {
        throw new ValidationError(
            `Invalid IPv${version || "any"} address`,
            "INVALID_IP"
        );
    }
}
