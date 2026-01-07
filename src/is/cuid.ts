import { CUID_REGEX } from "../regex/modern-identifiers";

export function cuid(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return CUID_REGEX.test(value);
}
