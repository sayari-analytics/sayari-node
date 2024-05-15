/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * Filter your search on the following attributes.
 */
export interface TradeFilterList {
    /** Exact match against the entity_id of the buyer. The buyer is the receiver_of shipments. */
    buyerId?: string[];
    /** Exact match against the entity_id of the supplier. The supplier is the shipper_of shipments. */
    supplierId?: string[];
    /** Buyers whose name contains the provided string. */
    buyerName?: string[];
    /** Shipper whose name contains the provided string. */
    supplierName?: string[];
    /** Buyer with an exact match for the provided [risk factor](/sayari-library/ontology/risk-factors). */
    buyerRisk?: SayariAnalyticsApi.Risk[];
    /** Shipper with an exact match for the provided [risk factor](/sayari-library/ontology/risk-factors). */
    supplierRisk?: SayariAnalyticsApi.Risk[];
    /** Buyer with an exact match for the provided [country code](/sayari-library/ontology/enumerated-types#country). */
    buyerCountry?: SayariAnalyticsApi.Country[];
    /** Supplier with an exact match for the provided [country code](/sayari-library/ontology/enumerated-types#country). */
    supplierCountry?: SayariAnalyticsApi.Country[];
    /** Shipment departs from a country with an exact match for the provided [country code](/sayari-library/ontology/enumerated-types#country). */
    departureCountry?: SayariAnalyticsApi.Country[];
    /** Shipment departs from a state that contains the provided state name. */
    departureState?: string[];
    /** Shipment departs from a city that contains the provided city name. */
    departureCity?: string[];
    /** Shipment arrives at a country with an exact match for the provided [country code](/sayari-library/ontology/enumerated-types#country). */
    arrivalCountry?: SayariAnalyticsApi.Country[];
    /** Shipment arrives at a state that contains the provided state name. */
    arrivalState?: string[];
    /** Shipment arrives at a city that contains the provided city name. */
    arrivalCity?: string[];
    /** The shipment HS code starts with the provided HS code. */
    hsCode?: string[];
    /** The HS description contains the provided string. */
    hsDescription?: string[];
    /** The supplier purpose contains the provided string. */
    supplierPurpose?: string[];
    /** The buyer purpose contains the provided string. */
    buyerPurpose?: string[];
    /** The arrival date is within the provided range. */
    arrivalDate?: string[];
    /** The departure date is within the provided range. */
    departureDate?: string[];
    /** The shipment identifier starts with the provided string. */
    shipmentIdentifier?: string[];
    /** The shipment weight is within the provided range. */
    weight?: string[];
    /** An exact match for the provided sources. */
    sources?: string[];
}
