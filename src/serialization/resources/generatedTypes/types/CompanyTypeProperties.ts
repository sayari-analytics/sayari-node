/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";

export const CompanyTypeProperties: core.serialization.ObjectSchema<
    serializers.CompanyTypeProperties.Raw,
    SayariAnalyticsApi.CompanyTypeProperties
> = core.serialization.object({
    value: core.serialization.string().optional(),
});

export declare namespace CompanyTypeProperties {
    interface Raw {
        value?: string | null;
    }
}
