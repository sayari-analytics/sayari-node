/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const AddressType: core.serialization.Schema<serializers.AddressType.Raw, SayariAnalyticsApi.AddressType>;
export declare namespace AddressType {
    type Raw = "arrival" | "departure" | "mailing" | "physical" | "registered" | "business";
}