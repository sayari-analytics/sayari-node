/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     {
 *         limit: 10000,
 *         size: {
 *             count: 1,
 *             qualifier: Sayari.CountQualifier.Eq
 *         },
 *         data: [{
 *                 type: "entity",
 *                 id: "GOeOE8",
 *                 project: "gPq6EY",
 *                 label: "RAMESH FLOWERS PRIVATE LIMITED",
 *                 created: "2024-03-08 18:52:59.41176+00",
 *                 updated: "2024-03-08 18:52:59.41176+00",
 *                 updatedBy: "auth0|5e45bd8caccd890e68147513",
 *                 version: 0,
 *                 entityId: "FyI9lrlmA-7z_3enlTOhlw",
 *                 tagIds: [],
 *                 caseStatus: "not_assigned",
 *                 customFields: {
 *                     "custom_company_size": "200+",
 *                     "custom_company_type": "flower services"
 *                 },
 *                 receivedHsCodes: ["271290", "271220"],
 *                 shippedHsCodes: [],
 *                 combinedHsCodes: ["271290", "271220"],
 *                 tradeCountInclMg: {
 *                     receiverOf: 5,
 *                     shipperOf: 0
 *                 },
 *                 matchStrength: {
 *                     "rules": {
 *                         "is_strong_v1": false,
 *                         "any_v1": "",
 *                         "is_any_v1": false,
 *                         "strong_v1": "",
 *                         "is_weak_v1": false,
 *                         "weak_v1": "",
 *                         "strength_v1": "none"
 *                     }
 *                 },
 *                 upstream: {
 *                     risk: [],
 *                     countries: [],
 *                     entities: 0,
 *                     matchHasUpstream: {
 *                         "FyI9lrlmA-7z_3enlTOhlw": false
 *                     },
 *                     matchProducts: {
 *                         "FyI9lrlmA-7z_3enlTOhlw": []
 *                     }
 *                 },
 *                 psa: {
 *                     risk: [Sayari.Risk.EuHighRiskThird, Sayari.Risk.BaselAml, Sayari.Risk.CpiScore, Sayari.Risk.OwnerOfRegulatoryActionEntity],
 *                     countries: [Sayari.Country.Usa, Sayari.Country.Can, Sayari.Country.Mar, Sayari.Country.Bel, Sayari.Country.Geo],
 *                     count: 2
 *                 },
 *                 summary: {
 *                     id: "FyI9lrlmA-7z_3enlTOhlw",
 *                     type: Sayari.Entities.Company,
 *                     label: "RAMESH FLOWERS PRIVATE LIMITED",
 *                     identifiers: [],
 *                     addresses: ["A62(A) SIPCOT INDUSTRIAL COMPLEX THERKU VEERAPANDIAPURAM P.O. TUTICORIN628002 TAMIL NADU INDIA GSTIN 33AAACR9251P1ZY IEC 3595005775 PANNO AAACR92", "A62(A) SIPCOT INDUSTRIAL COMPLEX TUTICORIN628002 TAMIL NADU INDIA GSTIN 33AAACR9251P1ZY IEC 3595005775 PH914612340505 TO 2340509"],
 *                     countries: [Sayari.Country.Ind],
 *                     names: ["RAMESH FLOWERS PRIVATE LIMITED"],
 *                     relatedEntitiesCount: 8,
 *                     userRelatedEntitiesCount: 0,
 *                     relationshipCounts: {
 *                         [Sayari.Relationships.NotifyPartyOf]: 5,
 *                         [Sayari.Relationships.ReceivesFrom]: 3,
 *                         [Sayari.Relationships.ReceiverOf]: 5
 *                     },
 *                     userRelationshipCounts: {},
 *                     attributeCounts: {
 *                         "name": 1,
 *                         "country": 1,
 *                         "address": 2
 *                     },
 *                     tradeCount: {
 *                         "sent": 0,
 *                         "received": 5
 *                     },
 *                     userAttributeCounts: {},
 *                     recordCount: 5,
 *                     userRecordCount: 0,
 *                     sourceCounts: {
 *                         "faa9caafcfabcee04ef2f0b21dd9197a": {
 *                             count: 10,
 *                             label: "South Korea Imports & Exports (2021 - Present)"
 *                         }
 *                     },
 *                     risk: {
 *                         [Sayari.Risk.ForcedLaborXinjiangOriginSubtier]: {
 *                             value: 3,
 *                             metadata: {},
 *                             level: Sayari.RiskLevel.High
 *                         },
 *                         [Sayari.Risk.BaselAml]: {
 *                             value: 4.95,
 *                             metadata: {
 *                                 "country": [
 *                                     "IND"
 *                                 ]
 *                             },
 *                             level: Sayari.RiskLevel.Relevant
 *                         },
 *                         [Sayari.Risk.ForcedLaborSheffieldHallamUniversityReportsOriginSubtier]: {
 *                             value: 3,
 *                             metadata: {},
 *                             level: Sayari.RiskLevel.High
 *                         },
 *                         [Sayari.Risk.CpiScore]: {
 *                             value: 40,
 *                             metadata: {
 *                                 "country": [
 *                                     "IND"
 *                                 ]
 *                             },
 *                             level: Sayari.RiskLevel.Relevant
 *                         },
 *                         [Sayari.Risk.ForcedLaborUflpaOriginSubtier]: {
 *                             value: 3,
 *                             metadata: {},
 *                             level: Sayari.RiskLevel.High
 *                         }
 *                     },
 *                     attributes: {
 *                         [Sayari.Attributes.Address]: [{
 *                                 "value": {
 *                                     "value": "A62(A) SIPCOT INDUSTRIAL COMPLEX THERKU VEERAPANDIAPURAM P.O. TUTICORIN628002 TAMIL NADU INDIA GSTIN 33AAACR9251P1ZY IEC 3595005775 PANNO AAACR92",
 *                                     "house": "Gstin 33aaacr9251p1zy",
 *                                     "house_number": "3595005775",
 *                                     "road": "Panno",
 *                                     "city": "NADU",
 *                                     "state": "Tamil Nadu",
 *                                     "postcode": "Aaacr92",
 *                                     "country": "India",
 *                                     "x": 74.99698,
 *                                     "y": 12.85316,
 *                                     "precision_code": "G3",
 *                                     "normalized": "33AAACR9251P1ZY 3595005775 A62A AAACR92 COMPLEX GSTIN IEC INDIA INDUSTRIAL NADU O P PANNO SIPCOT TAMIL THERKU TUTICORIN628002 VEERAPANDIAPURAM"
 *                                 },
 *                                 "properties": [
 *                                     {
 *                                         "record": "faa9caafcfabcee04ef2f0b21dd9197a/MAEU226738031/1693109172077",
 *                                         "record_count": 4,
 *                                         "editable": false
 *                                     }
 *                                 ]
 *                             }, {
 *                                 "value": {
 *                                     "value": "A62(A) SIPCOT INDUSTRIAL COMPLEX TUTICORIN628002 TAMIL NADU INDIA GSTIN 33AAACR9251P1ZY IEC 3595005775 PH914612340505 TO 2340509",
 *                                     "house": "Gstin 33aaacr9251p1zy",
 *                                     "house_number": "3595005775",
 *                                     "road": "Ph914612340505 To 2340509",
 *                                     "city": "TO",
 *                                     "state": "Tamil Nadu",
 *                                     "postcode": "Tuticorin628002",
 *                                     "country": "India",
 *                                     "x": 77.06,
 *                                     "y": 20.00896,
 *                                     "precision_code": "G3",
 *                                     "normalized": "2340509 33AAACR9251P1ZY 3595005775 A62A COMPLEX GSTIN IEC INDIA INDUSTRIAL NADU PH914612340505 SIPCOT TAMIL TO TUTICORIN628002"
 *                                 },
 *                                 "properties": [
 *                                     {
 *                                         "record": "faa9caafcfabcee04ef2f0b21dd9197a/MAEU1KT860018/1693109343516",
 *                                         "record_count": 2,
 *                                         "editable": false
 *                                     }
 *                                 ]
 *                             }],
 *                         [Sayari.Attributes.Country]: [{
 *                                 "value": {
 *                                     "value": "IND",
 *                                     "context": "address",
 *                                     "Original Text": "India"
 *                                 },
 *                                 "properties": [
 *                                     {
 *                                         "record": "faa9caafcfabcee04ef2f0b21dd9197a/MAEU226738031/1693109172077",
 *                                         "record_count": 6,
 *                                         "editable": false
 *                                     }
 *                                 ]
 *                             }],
 *                         [Sayari.Attributes.Name]: [{
 *                                 "value": {
 *                                     "value": "RAMESH FLOWERS PRIVATE LIMITED",
 *                                     "context": "primary"
 *                                 },
 *                                 "properties": [
 *                                     {
 *                                         "record": "faa9caafcfabcee04ef2f0b21dd9197a/MAEU226738031/1693109172077",
 *                                         "record_count": 10,
 *                                         "editable": false
 *                                     }
 *                                 ]
 *                             }]
 *                     }
 *                 }
 *             }],
 *         aggregations: {
 *             risk: [{
 *                     key: "basel_aml",
 *                     docCount: 1
 *                 }, {
 *                     key: "cpi_score",
 *                     docCount: 1
 *                 }, {
 *                     key: "forced_labor_xinjiang_origin_subtier",
 *                     docCount: 1
 *                 }, {
 *                     key: "forced_labor_uflpa_origin_subtier",
 *                     docCount: 1
 *                 }, {
 *                     key: "forced_labor_sheffield_hallam_university_reports_origin_subtier",
 *                     docCount: 1
 *                 }],
 *             tagIds: [],
 *             upstreamRisk: [{
 *                     key: "eu_high_risk_third",
 *                     docCount: 1
 *                 }, {
 *                     key: "export_to_soe",
 *                     docCount: 4
 *                 }],
 *             hitCount: [{
 *                     key: "hit_count",
 *                     docCount: 1
 *                 }],
 *             country: [{
 *                     key: "IND",
 *                     docCount: 1,
 *                     label: "India"
 *                 }],
 *             shipmentCounts: [{
 *                     key: "receiver_of",
 *                     docCount: 5,
 *                     comment: "Sum of all shipments of this type across matching documents"
 *                 }, {
 *                     key: "shipper_of",
 *                     docCount: 0,
 *                     comment: "Sum of all shipments of this type across matching documents"
 *                 }],
 *             source: [{
 *                     key: "faa9caafcfabcee04ef2f0b21dd9197a",
 *                     label: "South Korea Imports & Exports (2021 - Present)",
 *                     docCount: 1
 *                 }],
 *             sourceType: [{
 *                     key: "trade_data",
 *                     docCount: 1
 *                 }],
 *             region: [{
 *                     key: "asia_pacific",
 *                     docCount: 1
 *                 }],
 *             matchResults: [{
 *                     key: "sayari",
 *                     docCount: 1
 *                 }],
 *             businessPurpose: [],
 *             upstreamCountry: [{
 *                     key: "USA",
 *                     docCount: 1
 *                 }, {
 *                     key: "CAN",
 *                     docCount: 3
 *                 }],
 *             receivedHsCodes: {
 *                 docCount: 2,
 *                 hsCodeTerms: {
 *                     docCountErrorUpperBound: 0,
 *                     sumOtherDocCount: 0,
 *                     buckets: [{
 *                             key: "271290",
 *                             docCount: 1,
 *                             hsCodeSums: {
 *                                 value: 4
 *                             }
 *                         }, {
 *                             key: "271220",
 *                             docCount: 1,
 *                             hsCodeSums: {
 *                                 value: 1
 *                             }
 *                         }]
 *                 }
 *             },
 *             customFields: [{
 *                     key: "custom_id1",
 *                     docCount: 7
 *                 }, {
 *                     key: "custom_size",
 *                     docCount: 15
 *                 }],
 *             customFieldsCount: {
 *                 value: 2
 *             },
 *             caseStatuses: [{
 *                     key: "not_assigned",
 *                     docCount: 1
 *                 }],
 *             upstreamCountryTiers: {
 *                 "USA": {
 *                     [Sayari.UpstreamTiers.Tier2]: 1,
 *                     "totalCount": 1
 *                 },
 *                 "CAN": {
 *                     [Sayari.UpstreamTiers.Tier1]: 1,
 *                     [Sayari.UpstreamTiers.Tier2]: 2,
 *                     "totalCount": 3
 *                 }
 *             },
 *             upstreamRiskTiers: {
 *                 "eu_high_risk_third": {
 *                     [Sayari.UpstreamTiers.Tier4]: 1,
 *                     "totalCount": 1
 *                 },
 *                 "export_to_soe": {
 *                     [Sayari.UpstreamTiers.Tier1]: 1,
 *                     [Sayari.UpstreamTiers.Tier3]: 1,
 *                     [Sayari.UpstreamTiers.Tier4]: 2,
 *                     "totalCount": 4
 *                 }
 *             },
 *             shippedHsCodes: {
 *                 docCount: 0,
 *                 hsCodeTerms: {
 *                     docCountErrorUpperBound: 0,
 *                     sumOtherDocCount: 0,
 *                     buckets: []
 *                 }
 *             },
 *             combinedHsCodes: {
 *                 docCount: 2,
 *                 hsCodeTerms: {
 *                     docCountErrorUpperBound: 0,
 *                     sumOtherDocCount: 0,
 *                     buckets: [{
 *                             key: "271290",
 *                             docCount: 1,
 *                             hsCodeSums: {
 *                                 value: 4
 *                             }
 *                         }, {
 *                             key: "271220",
 *                             docCount: 1,
 *                             hsCodeSums: {
 *                                 value: 1
 *                             }
 *                         }]
 *                 }
 *             }
 *         }
 *     }
 */
export interface GetProjectEntitiesResponse extends Sayari.PaginatedResponse {
    next?: string;
    prev?: string;
    data: Sayari.ProjectEntity[];
    aggregations: Sayari.ProjectEntitiesAggs;
}
