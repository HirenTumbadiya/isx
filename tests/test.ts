import { describe, it, expect } from "vitest";
import { isx, assert, ValidationError } from "../src";

describe("isx validation", () => {
    describe("core", () => {
        it("email", () => {
            expect(isx.email("test@example.com")).toBe(true);
            expect(isx.email("invalid")).toBe(false);
        });

        it("url", () => {
            expect(isx.url("https://google.com")).toBe(true);
            expect(isx.url("localhost:3000")).toBe(true);
            expect(isx.url("not-a-url")).toBe(false);
        });

        it("password", () => {
            expect(isx.password("12345678")).toBe(true);
            expect(isx.password("123")).toBe(false);
            expect(isx.password("pass123", { requireSpecial: true })).toBe(false);
            expect(isx.password("pass123!", { requireSpecial: true })).toBe(true);
        });

        it("uuid", () => {
            expect(isx.uuid("f47ac10b-58cc-4372-a567-0e02b2c3d479")).toBe(true);
            expect(isx.uuid("invalid")).toBe(false);
        });

        it("ip", () => {
            expect(isx.ip("127.0.0.1")).toBe(true);
            expect(isx.ip("::1")).toBe(true);
            expect(isx.ip("invalid")).toBe(false);
        });

        it("json", () => {
            expect(isx.json('{"a":1}')).toBe(true);
            expect(isx.json("invalid")).toBe(false);
        });
    });

    describe("identifiers", () => {
        it("ulid", () => {
            expect(isx.ulid("01ARZ3NDEKTSV4RRFFQ69G5FAV")).toBe(true);
            expect(isx.ulid("invalid")).toBe(false);
        });

        it("cuid", () => {
            expect(isx.cuid("ch72gsb320000ud31ispx70da")).toBe(true);
            expect(isx.cuid("invalid")).toBe(false);
        });

        it("mongodbId", () => {
            expect(isx.mongodbId("507f1f77bcf86cd799439011")).toBe(true);
            expect(isx.mongodbId("invalid")).toBe(false);
        });
    });

    describe("commerce", () => {
        it("creditCard", () => {
            expect(isx.creditCard("4242 4242 4242 4242")).toBe(true);
            expect(isx.creditCard("1234 5678 1234 5678")).toBe(false);
        });

        it("currency", () => {
            expect(isx.currency("USD")).toBe(true);
            expect(isx.currency("XYZ")).toBe(false);
        });

        it("iban", () => {
            expect(isx.iban("GB29 RBOS 6016 1331 9268 19")).toBe(true);
            expect(isx.iban("invalid")).toBe(false);
        });
    });

    describe("extended", () => {
        it("fqdn", () => {
            expect(isx.fqdn("example.com")).toBe(true);
            expect(isx.fqdn("invalid_domain")).toBe(false);
        });

        it("macAddress", () => {
            expect(isx.macAddress("00:1A:2B:3C:4D:5E")).toBe(true);
            expect(isx.macAddress("invalid")).toBe(false);
        });

        it("semver", () => {
            expect(isx.semver("1.2.3-beta.1")).toBe(true);
            expect(isx.semver("v1.0.0")).toBe(false);
        });

        it("colors", () => {
            expect(isx.hexColor("#FFF")).toBe(true);
            expect(isx.rgbColor("rgb(255, 0, 0)")).toBe(true);
            expect(isx.hslColor("hsl(0, 100%, 50%)")).toBe(true);
        });

        it("port", () => {
            expect(isx.port(8080)).toBe(true);
            expect(isx.port(70000)).toBe(false);
        });

        it("handle", () => {
            expect(isx.handle("@hiren")).toBe(true);
            expect(isx.handle("hiren")).toBe(false);
        });
    });
});

describe("assert validation", () => {
    it("should throw ValidationError on failure", () => {
        expect(() => assert.email("invalid")).toThrow(ValidationError);
        expect(() => assert.port(70000)).toThrow(ValidationError);
    });

    it("should not throw on success", () => {
        expect(() => assert.email("test@example.com")).not.toThrow();
    });
});
