/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const PossiblySameAs: core.serialization.ObjectSchema<serializers.PossiblySameAs.Raw, SayariAnalyticsApi.PossiblySameAs>;
export declare namespace PossiblySameAs {
    interface Raw extends serializers.PaginatedResponse.Raw {
        data: (serializers.PossiblySameAsData.Raw | undefined)[];
    }
}
