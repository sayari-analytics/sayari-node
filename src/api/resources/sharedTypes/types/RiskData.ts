/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface RiskData {
    value: Sayari.RiskValue;
    metadata: Record<string, unknown>;
    /** The severity of the risk. */
    level: Sayari.RiskLevel;
}
