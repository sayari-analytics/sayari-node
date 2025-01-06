/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface ProjectEntitiesFilter {
    /** Filter by [risk factor](/sayari-library/ontology/risk-factors) ID. */
    risk?: Sayari.Risk[];
    /** Filter by upstream (supply chain) [risk factor](/sayari-library/ontology/risk-factors) ID. */
    upstreamRisk?: Sayari.Risk[];
    /** Filter by upstream (supply chain) tiers that has one or more risks */
    upstreamRiskTiers?: Sayari.UpstreamTiers[];
    /** Filter by [country](/sayari-library/ontology/enumerated-types#country). */
    country?: Sayari.Country[];
    /** Filter by upstream (supply chain) [country](/sayari-library/ontology/enumerated-types#country). */
    upstreamCountry?: Sayari.Country[];
    /** Filter by upstream (supply chain) tiers that has one or more countries */
    upstreamCountryTiers?: Sayari.UpstreamTiers[];
    /** Filter by HS code, HS code description, or business description. */
    businessPurpose?: string[];
    /** Filter by entity label with fuzzy matching. */
    labelFuzzy?: string[];
    /** Filter by entity city with fuzzy matching. */
    cityFuzzy?: string[];
    /** Filter by entity address state with fuzzy matching. */
    stateFuzzy?: string[];
    /** Filter by entity identifier attributes with fuzzy matching. */
    identifierFuzzy?: string[];
    /** Filter by entity source ID. */
    sourceExact?: string[];
    /** Filter by entity [company status](/sayari-library/ontology/enumerated-types#company-status). */
    statusExact?: Sayari.CompanyStatus[];
    /** Filter by risk factor `category`, e.g. `sanctions`. At least one risk factor from each provided category must be present. */
    riskCategory?: string[];
    /** Filter by a geographical bounding box. The value is a pipe-delimited set of four values representing the top, left, bottom, and right sides of the bounding box, in that order. The pipes should be URL-encoded as `%7C`. The top coordinate must greater than the bottom coordinate, and the left coordinate must be less than the right coordinate. A sample is `55.680357237879136|-71.53607290158526|41.10876347746233|-40.963927098414736` */
    bounds?: string;
    /** <Warning>This property is in beta and is subject to change. It is provided for early access and testing purposes only.</Warning> custom user key/value pairs (key must be prefixed with "custom_" and value must be "string" type) */
    customFieldName?: string[];
}
