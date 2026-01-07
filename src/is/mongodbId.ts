import { MONGODB_ID_REGEX } from "../regex/modern-identifiers";

export function mongodbId(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return MONGODB_ID_REGEX.test(value);
}
