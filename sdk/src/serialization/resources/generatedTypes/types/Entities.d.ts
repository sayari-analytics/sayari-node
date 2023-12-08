/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const Entities: core.serialization.Schema<serializers.Entities.Raw, SayariAnalyticsApi.Entities>;
export declare namespace Entities {
    type Raw = "generic" | "unknown" | "intellectual_property" | "shipment" | "security" | "property" | "person" | "tradename" | "company" | "vessel" | "legal_matter" | "aircraft";
}
