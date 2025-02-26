/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type RiskCategories =
    | "forced_labor"
    | "export_controls"
    | "sanctions"
    | "political_exposure"
    | "environmental_risk"
    | "regulatory_action"
    | "adverse_media";
export const RiskCategories = {
    ForcedLabor: "forced_labor",
    ExportControls: "export_controls",
    Sanctions: "sanctions",
    PoliticalExposure: "political_exposure",
    EnvironmentalRisk: "environmental_risk",
    RegulatoryAction: "regulatory_action",
    AdverseMedia: "adverse_media",
} as const;
