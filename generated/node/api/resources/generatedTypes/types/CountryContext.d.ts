/**
 * This file was auto-generated by Fern from our API Definition.
 */
/**
 * Country context enums describe different ways an entity can be connected to a country.
 */
export declare type CountryContext = 
/**
 * The reported citizenship of a person */
"citizenship"
/**
 * Rarely used. Converted to 'domicile.' */
 | "incorporation"
/**
 * The reported country of residence of a person */
 | "residence"
/**
 * The reported nationality of a person */
 | "nationality"
/**
 * The country of an entity address */
 | "address"
/**
 * The flag state of a vessel. Often changes over time. */
 | "vessel_flag"
/**
 * e.g. 'Country of incorporation,' 'Jurisdiction of formation,' 'Organized under the laws of.' A company can operate in multiple countries, but can only have one domicile at a time. */
 | "domicile"
/**
 * The country a shipment starts in */
 | "shipment_departure"
/**
 * The country of the consignee/recipient of a shipment */
 | "shipment_arrival"
/**
 * Any country a shipment moves through between its departure and arrival */
 | "shipment_transit"
/**
 * Indicates entity is principal entity in record in source from this country */
 | "activity_in"
/**
 * Indicates entity is mentioned in record in source from this country */
 | "mentioned_in";
export declare const CountryContext: {
    readonly Citizenship: "citizenship";
    readonly Incorporation: "incorporation";
    readonly Residence: "residence";
    readonly Nationality: "nationality";
    readonly Address: "address";
    readonly VesselFlag: "vessel_flag";
    readonly Domicile: "domicile";
    readonly ShipmentDeparture: "shipment_departure";
    readonly ShipmentArrival: "shipment_arrival";
    readonly ShipmentTransit: "shipment_transit";
    readonly ActivityIn: "activity_in";
    readonly MentionedIn: "mentioned_in";
};