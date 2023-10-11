/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SayariAnalyticsApi from "../../../../api";
import * as core from "../../../../core";
export declare const CountryContext: core.serialization.Schema<serializers.CountryContext.Raw, SayariAnalyticsApi.CountryContext>;
export declare namespace CountryContext {
    type Raw = "citizenship" | "incorporation" | "residence" | "nationality" | "address" | "vessel_flag" | "domicile" | "shipment_departure" | "shipment_arrival" | "shipment_transit" | "activity_in" | "mentioned_in";
}
micile: "domicile";
    readonly ShipmentDeparture: "shipment_departure";
    readonly ShipmentArrival: "shipment_arrival";
    readonly ShipmentTransit: "shipment_transit";
    readonly ActivityIn: "activity_in";
    readonly MentionedIn: "mentioned_in";
};
