/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Monetary value context enums describe the types of financial values an asset can have.
 */
export type MonetaryValueContext =
    /**
     * Indicates cost, insurance, and freight (CIF) arrangement */
    | "cost_insurance_and_freight"
    /**
     * Indicates free on board (FOB) arrangement */
    | "free_on_board"
    /**
     * Indicates value determined by customs authorities */
    | "assessed_value";

export const MonetaryValueContext = {
    CostInsuranceAndFreight: "cost_insurance_and_freight",
    FreeOnBoard: "free_on_board",
    AssessedValue: "assessed_value",
} as const;
