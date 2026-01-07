export const CURRENCY_CODES = new Set(["USD", "EUR", "GBP", "JPY", "CNY", "INR", "CAD", "AUD", "CHF", "BTC", "ETH"]); // Add more as needed

export function currency(value: unknown, codes: string[] | Set<string> = CURRENCY_CODES): value is string {
    if (typeof value !== "string") return false;
    return codes instanceof Set ? codes.has(value.toUpperCase()) : codes.includes(value.toUpperCase());
}
