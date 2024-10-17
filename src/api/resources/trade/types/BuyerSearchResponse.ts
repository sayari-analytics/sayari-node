/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 1,
 *         size: {
 *             count: 3,
 *             qualifier: Sayari.CountQualifier.Eq
 *         },
 *         next: true,
 *         data: [{
 *                 id: "uWNWgzX-Kvp1j-WeXKmLQw",
 *                 label: "\u041E\u041E\u041E \"\u042D\u0420\u0411\u042D \u042D\u041B\u0415\u041A\u0422\u0420\u041E\u041C\u0415\u0414\u0418\u0426\u0418\u041D\"",
 *                 degree: 195,
 *                 entityUrl: "/v1/entity/uWNWgzX-Kvp1j-WeXKmLQw",
 *                 pep: false,
 *                 psaId: "4398046624552",
 *                 psaCount: 1,
 *                 sanctioned: false,
 *                 closed: false,
 *                 translatedLabel: "GESELLSCHAFT MIT BESCHRANKTER HAFTUNG \"ERBE ELEKTROMEDIZIN\"",
 *                 registrationDate: "Registered 2008-09-08",
 *                 tradeCount: {
 *                     "sent": 0,
 *                     "received": 192
 *                 },
 *                 type: Sayari.Entities.Company,
 *                 identifiers: [{
 *                         value: "7705856072",
 *                         type: Sayari.IdentifierType.RuInn,
 *                         label: "Ru Inn"
 *                     }, {
 *                         value: "5087746065578",
 *                         type: Sayari.IdentifierType.RuOgrn,
 *                         label: "Ru Ogrn"
 *                     }, {
 *                         value: "770401001",
 *                         type: Sayari.WeakIdentifierType.RuKpp,
 *                         label: "Ru Kpp"
 *                     }, {
 *                         value: "\u0424\u0421-99-04-005763",
 *                         type: Sayari.WeakIdentifierType.RuLicenseNumber,
 *                         label: "Ru License Number"
 *                     }, {
 *                         value: "\u041B016-00110-77/00565584",
 *                         type: Sayari.WeakIdentifierType.RuLicenseNumber,
 *                         label: "Ru License Number"
 *                     }],
 *                 addresses: ["119270, , \u0413.\u041C\u041E\u0421\u041A\u0412\u0410, \u0423\u041B.\u0425\u0410\u041C\u041E\u0412\u041D\u0418\u0427\u0415\u0421\u041A\u0418\u0419 \u0412\u0410\u041B,\u0414.12,\u042D\u0422.2,\u041F\u041E\u041C.\u0425,\u041A\u041E\u041C.15,", "119270, , \u0413.\u041C\u041E\u0421\u041A\u0412\u0410, \u0423\u041B.\u0425\u0410\u041C\u041E\u0412\u041D\u0418\u0427\u0415\u0421\u041A\u0418\u0419 \u0412\u0410\u041B,\u0414.12,\u042D\u042212,\u041F\u041E\u041C.\u0425,\u041A\u041E\u041C.15,", "119270, \u0413\u041E\u0420\u041E\u0414 \u041C\u041E\u0421\u041A\u0412\u0410, \u0423\u041B. \u0425\u0410\u041C\u041E\u0412\u041D\u0418\u0427\u0415\u0421\u041A\u0418\u0419 \u0412\u0410\u041B, \u0414. 12, \u042D\u0422\u0410\u0416 2 \u041F\u041E\u041C \u0425 \u041A\u041E\u041C 15"],
 *                 countries: [Sayari.Country.Rus],
 *                 relationshipCount: {
 *                     [Sayari.Relationships.HasShareholder]: 1,
 *                     [Sayari.Relationships.NotifyPartyOf]: 133,
 *                     [Sayari.Relationships.HasDirector]: 1,
 *                     [Sayari.Relationships.ReceivesFrom]: 1,
 *                     [Sayari.Relationships.HasLegalRepresentative]: 1
 *                 },
 *                 sourceCount: {
 *                     "a9a18eeb901e4376c912e95dc05ceb78": {
 *                         count: 9,
 *                         label: "Russia Federal Tax Registry"
 *                     },
 *                     "66dfefb726ae00fde8f09f34c5578d35": {
 *                         count: 360,
 *                         label: "Russia Imports & Exports (January 2023 - Present)"
 *                     },
 *                     "e61c3b3478534c110b46cd64c7746e82": {
 *                         count: 2,
 *                         label: "Russia Federal Tax Service Financial Statements"
 *                     },
 *                     "56bce0e008204712e302271ddd7b4fb1": {
 *                         count: 1,
 *                         label: "Russia Federal Tax Registry (2018)"
 *                     }
 *                 },
 *                 risk: {
 *                     [Sayari.Risk.ImportsBisHighPriorityItems]: {
 *                         value: 1,
 *                         metadata: {
 *                             "origin_shipment_product": [
 *                                 "853669"
 *                             ]
 *                         },
 *                         level: Sayari.RiskLevel.Elevated
 *                     },
 *                     [Sayari.Risk.ImportsBisHighPriorityItemsCriticalComponents]: {
 *                         value: 1,
 *                         metadata: {
 *                             "origin_shipment_product": [
 *                                 "854231"
 *                             ]
 *                         },
 *                         level: Sayari.RiskLevel.High
 *                     }
 *                 },
 *                 userAttributeCounts: {},
 *                 userAttributeCount: {},
 *                 userRecordCount: 0,
 *                 userRelatedEntitiesCount: 0,
 *                 userRelationshipCount: {},
 *                 relatedEntitiesCount: 195,
 *                 attributeCounts: {
 *                     "name": 3,
 *                     "business_purpose": 10,
 *                     "identifier": 7,
 *                     "additional_information": 2,
 *                     "country": 2,
 *                     "shares": 1,
 *                     "status": 1,
 *                     "address": 4,
 *                     "financials": 3
 *                 },
 *                 attributeCount: {
 *                     [Sayari.Attributes.Name]: 3,
 *                     [Sayari.Attributes.BusinessPurpose]: 10,
 *                     [Sayari.Attributes.Identifier]: 7,
 *                     [Sayari.Attributes.AdditionalInformation]: 2,
 *                     [Sayari.Attributes.Country]: 2,
 *                     [Sayari.Attributes.Shares]: 1,
 *                     [Sayari.Attributes.Status]: 1,
 *                     [Sayari.Attributes.Address]: 4,
 *                     [Sayari.Attributes.Financials]: 3
 *                 },
 *                 referenceId: "56bce0e008204712e302271ddd7b4fb1/5087746065578_7705856072_OOO-ERBE-ELEKTROMEDICIN.html/1552661755844:e39b6745ba02f2a46afdd7ffbd700920",
 *                 metadata: {
 *                     latestShipmentDate: "2024-07-10",
 *                     shipments: 6,
 *                     hsCodes: [{
 *                             key: "854231",
 *                             docCount: 6,
 *                             value: "Electronic integrated circuits; processors and controllers, whether or not combined with memories, converters, logic circuits, amplifiers, clock and timing circuits, or other circuits",
 *                             valueSimple: "Integrated Circuits"
 *                         }]
 *                 }
 *             }]
 *     }
 */
export interface BuyerSearchResponse extends Sayari.PaginatedResponse {
    offset: number;
    next: boolean;
    data: Sayari.SupplierOrBuyer[];
}
