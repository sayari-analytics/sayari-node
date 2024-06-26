/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * These enums describe the unit of measurement (i.e., using SI base units) for some dimension of an entity.
 */
export type Unit =
    /**
     * Indicates meters (m) */
    | "metre"
    /**
     * Indicates kilograms (kg) */
    | "kilogram"
    /**
     * Used to show the number of units of a product */
    | "unit";

export const Unit = {
    Metre: "metre",
    Kilogram: "kilogram",
    Unit: "unit",
} as const;
