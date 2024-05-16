/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * An attribute for risk intelligence metadata
 */
export interface RiskIntelligenceInfo extends Sayari.PaginatedResponse {
    data: Sayari.RiskIntelligenceData[];
    next?: unknown;
    offset?: number;
}
