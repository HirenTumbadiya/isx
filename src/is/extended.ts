import { FQDN_REGEX, MAC_REGEX, SEMVER_REGEX, HEX_COLOR_REGEX, RGB_COLOR_REGEX, HSL_COLOR_REGEX } from "../regex/extended";

export function fqdn(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return FQDN_REGEX.test(value);
}

export function macAddress(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return MAC_REGEX.test(value);
}

export function semver(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return SEMVER_REGEX.test(value);
}

export function hexColor(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return HEX_COLOR_REGEX.test(value);
}

export function rgbColor(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return RGB_COLOR_REGEX.test(value);
}

export function hslColor(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return HSL_COLOR_REGEX.test(value);
}

export function port(value: unknown): value is number {
    if (typeof value !== "number" || isNaN(value)) return false;
    return value >= 0 && value <= 65535;
}

export function handle(value: unknown): value is string {
    if (typeof value !== "string") return false;
    return /^@[a-z0-9_]{1,30}$/i.test(value);
}

