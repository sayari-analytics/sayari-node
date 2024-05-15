/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Aggregations for entities in a project. Possible values are - hit_count Cardinality of unique entities. - country Count of entities per country. - upstream_country Count of entities per upstream country. - upstream_risk Count of entities per upstream risk factor. - source Count of entities per source. - business_purpose Count of entities per business purpose. - receiver_of Total number of shipments received by entities. - shipper_of Total number of shipments shipped by entities. - received_hs_codes Count of entities and shipments received per HS code. - shipped_hs_codes Count of entities and shipments shipped per HS code. - location Count of entities per grid cell within the specified `bounds` filter. Each cell corresponds to a [map tile](https://en.wikipedia.org/wiki/Tiled_web_map) as used by many online map sites. Each cell is labeled using a "{zoom}/{x}/{y}" format, where zoom is an automatically-selected precision. To use this aggregation, both `filters=bounds` and `geo_facets=true` query parameters must be provided. - <risk> where <risk> is a [risk factor](/sayari-library/ontology/risk-factors) ID. Count of entities per risk factor.
 */
export type ProjectEntitiesAggsDefinition = string;
