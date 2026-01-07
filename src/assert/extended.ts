import { isx } from "../is";
import { ValidationError } from "../errors/ValidationError";

export function creditCard(value: unknown): asserts value is string {
    if (!isx.creditCard(value)) throw new ValidationError("Invalid credit card", "INVALID_CREDIT_CARD");
}

export function currency(value: unknown, codes?: string[] | Set<string>): asserts value is string {
    if (!isx.currency(value, codes)) throw new ValidationError("Invalid currency code", "INVALID_CURRENCY");
}

export function iban(value: unknown): asserts value is string {
    if (!isx.iban(value)) throw new ValidationError("Invalid IBAN", "INVALID_IBAN");
}

export function fqdn(value: unknown): asserts value is string {
    if (!isx.fqdn(value)) throw new ValidationError("Invalid FQDN", "INVALID_FQDN");
}

export function macAddress(value: unknown): asserts value is string {
    if (!isx.macAddress(value)) throw new ValidationError("Invalid MAC address", "INVALID_MAC");
}

export function semver(value: unknown): asserts value is string {
    if (!isx.semver(value)) throw new ValidationError("Invalid Semantic Version", "INVALID_SEMVER");
}

export function hexColor(value: unknown): asserts value is string {
    if (!isx.hexColor(value)) throw new ValidationError("Invalid hex color", "INVALID_HEX_COLOR");
}

export function rgbColor(value: unknown): asserts value is string {
    if (!isx.rgbColor(value)) throw new ValidationError("Invalid RGB color", "INVALID_RGB_COLOR");
}

export function hslColor(value: unknown): asserts value is string {
    if (!isx.hslColor(value)) throw new ValidationError("Invalid HSL color", "INVALID_HSL_COLOR");
}

export function port(value: unknown): asserts value is number {
    if (!isx.port(value)) throw new ValidationError("Invalid port number", "INVALID_PORT");
}

export function handle(value: unknown): asserts value is string {
    if (!isx.handle(value)) throw new ValidationError("Invalid handle", "INVALID_HANDLE");
}
