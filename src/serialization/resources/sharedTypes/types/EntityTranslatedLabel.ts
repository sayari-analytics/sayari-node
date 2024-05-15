/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const EntityTranslatedLabel: core.serialization.Schema<
    serializers.EntityTranslatedLabel.Raw,
    SayariAnalyticsApi.EntityTranslatedLabel
> = core.serialization.string();

export declare namespace EntityTranslatedLabel {
    type Raw = string;
}