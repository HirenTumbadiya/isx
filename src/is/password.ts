export function password(value: unknown, options: { minLength?: number; requireSpecial?: boolean } = {}): value is string {
    if (typeof value !== "string") return false;
    const { minLength = 8, requireSpecial = false } = options;
    if (value.length < minLength) return false;
    if (requireSpecial && !/[!@#$%^&*(),.?":{}|<>]/.test(value)) return false;
    return true;
}
