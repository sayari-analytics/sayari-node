/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Measurement type enums refer to the type of measurement applied to the entity, e.g., net weight.
 */
export type MeasurementType =
    /**
     * Total weight including the weight of goods, packaging, and any additional accessories used for shipping */
    | "gross_weight"
    /**
     * Weight of raw goods only */
    | "net_weight"
    /**
     * Describes the number of units of product */
    | "quantity";
export const MeasurementType = {
    GrossWeight: "gross_weight",
    NetWeight: "net_weight",
    Quantity: "quantity",
} as const;
