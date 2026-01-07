import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function ulid(value: unknown): asserts value is string {
    if (!isx.ulid(value)) {
        throw new ValidationError("Invalid ULID", "INVALID_ULID");
    }
}

export function cuid(value: unknown): asserts value is string {
    if (!isx.cuid(value)) {
        throw new ValidationError("Invalid CUID", "INVALID_CUID");
    }
}

export function mongodbId(value: unknown): asserts value is string {
    if (!isx.mongodbId(value)) {
        throw new ValidationError("Invalid MongoDB ID", "INVALID_MONGODB_ID");
    }
}
