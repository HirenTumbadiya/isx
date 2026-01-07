import { URL_REGEX } from "../regex/url";

export function url(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return URL_REGEX.test(value);
}
