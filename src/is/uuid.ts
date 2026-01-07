import { UUID_REGEX } from "../regex/identifiers";

export function uuid(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return UUID_REGEX.test(value);
}
