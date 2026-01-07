import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function json(value: unknown): asserts value is string {
    if (!isx.json(value)) {
        throw new ValidationError(
            "Invalid JSON string",
            "INVALID_JSON"
        );
    }
}
