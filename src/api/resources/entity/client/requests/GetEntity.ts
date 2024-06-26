/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../../index";

/**
 * @example
 *     {
 *         attributesNameLimit: 1,
 *         attributesAddressLimit: 1,
 *         attributesCountryLimit: 1,
 *         attributesAdditionalInformationLimit: 1,
 *         attributesBusinessPurposeLimit: 1,
 *         attributesCompanyTypeLimit: 1,
 *         attributesIdentifierLimit: 1,
 *         attributesStatusLimit: 1,
 *         relationshipsLimit: 1,
 *         possiblySameAsLimit: 1,
 *         referencedByLimit: 1
 *     }
 */
export interface GetEntity {
    /**
     * The pagination token for the next page of attribute `additional_information`.
     */
    attributesAdditionalInformationNext?: string;
    /**
     * The pagination token for the previous page of attribute `additional_information`.
     */
    attributesAdditionalInformationPrev?: string;
    /**
     * Limit total values returned for attribute `additional_information`. Defaults to 100.
     */
    attributesAdditionalInformationLimit?: number;
    /**
     * The pagination token for the next page of attribute `address`.
     */
    attributesAddressNext?: string;
    /**
     * The pagination token for the previous page of attribute `address`.
     */
    attributesAddressPrev?: string;
    /**
     * Limit total values returned for attribute `address`. Defaults to 100.
     */
    attributesAddressLimit?: number;
    /**
     * The pagination token for the next page of attribute `business_purpose`.
     */
    attributesBusinessPurposeNext?: string;
    /**
     * The pagination token for the previous page of attribute `business_purpose`.
     */
    attributesBusinessPurposePrev?: string;
    /**
     * Limit total values returned for attribute `business_purpose`. Defaults to 100.
     */
    attributesBusinessPurposeLimit?: number;
    /**
     * The pagination token for the next page of attribute `company_type`.
     */
    attributesCompanyTypeNext?: string;
    /**
     * The pagination token for the previous page of attribute `company_type`.
     */
    attributesCompanyTypePrev?: string;
    /**
     * Limit total values returned for attribute `company_type`. Defaults to 100.
     */
    attributesCompanyTypeLimit?: number;
    /**
     * The pagination token for the next page of attribute `country`.
     */
    attributesCountryNext?: string;
    /**
     * The pagination token for the previous page of attribute `country`.
     */
    attributesCountryPrev?: string;
    /**
     * Limit total values returned for attribute `country`. Defaults to 100.
     */
    attributesCountryLimit?: number;
    /**
     * The pagination token for the next page of attribute `identifier`.
     */
    attributesIdentifierNext?: string;
    /**
     * The pagination token for the previous page of attribute `identifier`.
     */
    attributesIdentifierPrev?: string;
    /**
     * Limit total values returned for attribute `identifier`. Defaults to 100.
     */
    attributesIdentifierLimit?: number;
    /**
     * The pagination token for the next page of attribute `name`.
     */
    attributesNameNext?: string;
    /**
     * The pagination token for the previous page of attribute `name`.
     */
    attributesNamePrev?: string;
    /**
     * Limit total values returned for attribute `name`. Defaults to 100.
     */
    attributesNameLimit?: number;
    /**
     * The pagination token for the next page of attribute `status`.
     */
    attributesStatusNext?: string;
    /**
     * The pagination token for the previous page of attribute `status`.
     */
    attributesStatusPrev?: string;
    /**
     * Limit total values returned for attribute `status`. Defaults to 100.
     */
    attributesStatusLimit?: number;
    /**
     * The pagination token for the next page of relationship results
     */
    relationshipsNext?: string;
    /**
     * The pagination token for the previous page of relationship results
     */
    relationshipsPrev?: string;
    /**
     * Limit total relationship values. Defaults to 50.
     */
    relationshipsLimit?: number;
    /**
     * Filter relationships to [relationship type](/sayari-library/ontology/relationships), e.g. director_of or has_shareholder
     */
    relationshipsType?: Sayari.Relationships;
    /**
     * Sorts relationships by As Of date or Shareholder percentage, e.g. date or -shares
     */
    relationshipsSort?: string;
    /**
     * Filters relationships to after a date
     */
    relationshipsStartDate?: string;
    /**
     * Filters relationships to before a date
     */
    relationshipsEndDate?: string;
    /**
     * Filters relationships to greater than or equal to a Shareholder percentage
     */
    relationshipsMinShares?: number;
    /**
     * Filters relationships to a list of [countries](/sayari-library/ontology/enumerated-types#country)
     */
    relationshipsCountry?: Sayari.Country | Sayari.Country[];
    /**
     * Filters shipment relationships to a list of arrival [countries](/sayari-library/ontology/enumerated-types#country)
     */
    relationshipsArrivalCountry?: Sayari.Country | Sayari.Country[];
    /**
     * Filters shipment relationships to an arrival state
     */
    relationshipsArrivalState?: string;
    /**
     * Filters shipment relationships to an arrival city
     */
    relationshipsArrivalCity?: string;
    /**
     * Filters shipment relationships to a list of departure [countries](/sayari-library/ontology/enumerated-types#country)
     */
    relationshipsDepartureCountry?: Sayari.Country | Sayari.Country[];
    /**
     * Filters shipment relationships to a departure state
     */
    relationshipsDepartureState?: string;
    /**
     * Filters shipment relationships to a departure city
     */
    relationshipsDepartureCity?: string;
    /**
     * Filters shipment relationships to a trade partner name
     */
    relationshipsPartnerName?: string;
    /**
     * Filters shipment relationships to a trade partner [risk tag](/sayari-library/ontology/enumerated-types#tag)
     */
    relationshipsPartnerRisk?: Sayari.Risk | Sayari.Risk[];
    /**
     * Filters shipment relationships to an HS code
     */
    relationshipsHsCode?: string;
    /**
     * The pagination token for the next page of possibly same entities.
     */
    possiblySameAsNext?: string;
    /**
     * The pagination token for the previous page of possibly same entities.
     */
    possiblySameAsPrev?: string;
    /**
     * Limit total possibly same as entities. Defaults to 100.
     */
    possiblySameAsLimit?: number;
    /**
     * The pagination token for the next page of the entity's referencing records
     */
    referencedByNext?: string;
    /**
     * The pagination token for the previous page of the entity's referencing records
     */
    referencedByPrev?: string;
    /**
     * Limit totals values returned for entity's referencing records. Defaults to 100.
     */
    referencedByLimit?: number;
}
