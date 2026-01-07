import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function url(value: unknown): asserts value is string {
    if (!isx.url(value)) {
        throw new ValidationError(
            "Invalid URL",
            "INVALID_URL"
        );
    }
}
