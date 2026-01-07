const IBAN_REGEX = /^[A-Z]{2}\d{2}[A-Z\d]{1,30}$/;

export function iban(value: unknown): value is string {
    if (typeof value !== "string") return false;
    const s = value.toUpperCase().replace(/ /g, "");
    if (!IBAN_REGEX.test(s)) return false;

    // Basic validation without full checksum for now, can be expanded
    return true;
}
