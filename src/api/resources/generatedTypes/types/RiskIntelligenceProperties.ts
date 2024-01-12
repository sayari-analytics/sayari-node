/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

export interface RiskIntelligenceProperties {
    /** Government authority issuing the enforcement or risk intelligence action */
    authority?: string;
    /** Official list where the entity's risk information or enforcement action is recorded */
    list?: string;
    /** Specific to sanctions risk. Sanctions program under which the entity is designated. */
    program?: string;
    /** Explanation or legal basis for the risk intelligence */
    reason?: string;
    /** Type of risk intelligence */
    type: SayariAnalyticsApi.Tag;
}
