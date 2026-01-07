import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function uuid(value: unknown): asserts value is string {
    if (!isx.uuid(value)) {
        throw new ValidationError(
            "Invalid UUID",
            "INVALID_UUID"
        );
    }
}
