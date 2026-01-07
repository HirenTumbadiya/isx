import { ULID_REGEX } from "../regex/modern-identifiers";

export function ulid(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return ULID_REGEX.test(value);
}
