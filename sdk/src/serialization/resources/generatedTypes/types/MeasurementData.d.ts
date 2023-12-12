/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const MeasurementData: core.serialization.ObjectSchema<serializers.MeasurementData.Raw, SayariAnalyticsApi.MeasurementData>;
export declare namespace MeasurementData {
    interface Raw extends serializers.AttributeData.Raw {
        properties: serializers.MeasurementProperties.Raw;
    }
}