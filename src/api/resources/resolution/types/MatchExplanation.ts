/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface MatchExplanation {
    matched?: string;
    uploaded?: string;
    nameCustomTfIdfScore?: number;
    highQualityMatchName?: boolean;
    isDeletionRecommended?: boolean;
    nCommonTermMatches?: number;
    nUncommonTermMatches?: number;
    matchQuality?: Sayari.MatchQuality;
}
