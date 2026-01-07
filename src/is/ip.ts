import { IPV4_REGEX, IPV6_REGEX } from "../regex/identifiers";

export function ip(value: unknown, version?: 4 | 6): value is string {
    if (typeof value !== "string") return false;
    if (version === 4) return IPV4_REGEX.test(value);
    if (version === 6) return IPV6_REGEX.test(value);
    return IPV4_REGEX.test(value) || IPV6_REGEX.test(value);
}
