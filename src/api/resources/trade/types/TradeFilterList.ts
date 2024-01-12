/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

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
    /** Buyer with an exact match for the provided risk factor. */
    buyerRisk?: string[];
    /** Shipper with an exact match for the provided risk factor. */
    supplierRisk?: string[];
    /** Buyer with an exact match for the provided country code. */
    buyerCountry?: SayariAnalyticsApi.Country[];
    /** Supplier with an exact match for the provided country code. */
    supplierCountry?: SayariAnalyticsApi.Country[];
    /** Shipment departs from a country with an exact match for the provided country code. */
    departureCountry?: SayariAnalyticsApi.Country[];
    /** Shipment departs from a state that contains the provided state name. */
    departureState?: string[];
    /** Shipment departs from a city that contains the provided city name. */
    departureCity?: string[];
    /** Shipment arrives at a country with an exact match for the provided country code. */
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
    /** The shipment weight is within the provided range. */
    weight?: string[];
    /** An exact match for the provided sources. */
    sources?: string[];
}
