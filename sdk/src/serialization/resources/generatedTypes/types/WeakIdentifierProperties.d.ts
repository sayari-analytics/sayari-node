/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const WeakIdentifierProperties: core.serialization.ObjectSchema<serializers.WeakIdentifierProperties.Raw, SayariAnalyticsApi.WeakIdentifierProperties>;
export declare namespace WeakIdentifierProperties {
    interface Raw {
        type: serializers.WeakIdentifierType.Raw;
        value: string;
    }
}
