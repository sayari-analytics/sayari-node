/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const Shipment: core.serialization.ObjectSchema<serializers.Shipment.Raw, SayariAnalyticsApi.Shipment>;
export declare namespace Shipment {
    interface Raw {
        monetary_value: serializers.MonetaryValue.Raw[];
        dst: serializers.SourceOrDestinationEntity.Raw[];
        weight: serializers.Weight.Raw[];
        business_purpose: serializers.BusinessPurpose.Raw[];
        identifier: serializers.ShipmentIdentifier.Raw[];
        country: serializers.ShipmentCountry.Raw[];
        src: serializers.SourceOrDestinationEntity.Raw[];
        metadata: serializers.ShipmentMetadata.Raw;
    }
}
