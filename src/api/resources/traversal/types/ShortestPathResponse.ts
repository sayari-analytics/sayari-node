/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         entities: ["H1y25N5ymnFyZ-q9Lpwm_g", "1nOeH5G2EhmRVtmeVqO2Lw"],
 *         data: [{
 *                 source: "H1y25N5ymnFyZ-q9Lpwm_g",
 *                 target: {
 *                     id: "1nOeH5G2EhmRVtmeVqO2Lw",
 *                     label: "Mr Thomas Bangalter",
 *                     degree: 1,
 *                     entityUrl: "/v1/entity/1nOeH5G2EhmRVtmeVqO2Lw",
 *                     pep: false,
 *                     psaCount: 0,
 *                     sanctioned: false,
 *                     closed: false,
 *                     tradeCount: {
 *                         "sent": 0,
 *                         "received": 0
 *                     },
 *                     type: Sayari.Entities.Person,
 *                     identifiers: [{
 *                             value: "053673450003",
 *                             type: Sayari.IdentifierType.UkPersonNumber,
 *                             label: "Uk Person Number"
 *                         }, {
 *                             value: "053673450002",
 *                             type: Sayari.IdentifierType.UkPersonNumber,
 *                             label: "Uk Person Number"
 *                         }],
 *                     addresses: ["5TH FLOOR 104 OXFORD STREET, W1D 1LP, LONDON, UNITED KINGDOM", "Oxford Street, London, W1D 1LP", "8 AVENUE RACHEL, 75018, FRANCE"],
 *                     dateOfBirth: "1975-01",
 *                     countries: [Sayari.Country.Fra, Sayari.Country.Gbr],
 *                     relationshipCount: {
 *                         [Sayari.Relationships.RegisteredAgentOf]: 1,
 *                         [Sayari.Relationships.ShareholderOf]: 1,
 *                         [Sayari.Relationships.DirectorOf]: 1
 *                     },
 *                     sourceCount: {
 *                         "4ea8bac1bed868e1510ffd21842e9551": {
 *                             count: 28,
 *                             label: "UK Persons with Significant Control"
 *                         },
 *                         "ecdfb3f2ecc8c3797e77d5795a8066ef": {
 *                             count: 17,
 *                             label: "UK Corporate Registry"
 *                         }
 *                     },
 *                     risk: {
 *                         [Sayari.Risk.BaselAml]: {
 *                             value: 3.67,
 *                             metadata: {
 *                                 "country": [
 *                                     "GBR"
 *                                 ]
 *                             },
 *                             level: Sayari.RiskLevel.Relevant
 *                         },
 *                         [Sayari.Risk.CpiScore]: {
 *                             value: 71,
 *                             metadata: {
 *                                 "country": [
 *                                     "FRA"
 *                                 ]
 *                             },
 *                             level: Sayari.RiskLevel.Relevant
 *                         }
 *                     },
 *                     userAttributeCount: {},
 *                     userRecordCount: 0,
 *                     userRelatedEntitiesCount: 0,
 *                     userRelationshipCount: {},
 *                     relatedEntitiesCount: 1,
 *                     attributeCount: {
 *                         [Sayari.Attributes.Name]: 1,
 *                         [Sayari.Attributes.Identifier]: 2,
 *                         [Sayari.Attributes.AdditionalInformation]: 2,
 *                         [Sayari.Attributes.Country]: 4,
 *                         [Sayari.Attributes.DateOfBirth]: 1,
 *                         [Sayari.Attributes.Address]: 5
 *                     },
 *                     referenceId: "ecdfb3f2ecc8c3797e77d5795a8066ef/03389614/1540252800000:9030330caf25555c42c0bc0d84ea4aa1"
 *                 },
 *                 path: [{
 *                         field: "has_lawyer",
 *                         entity: {
 *                             id: "xthsA_jQuKn3GW8-9ILQqg",
 *                             label: "LAWRENCE E. APOLZON",
 *                             degree: 179,
 *                             entityUrl: "/v1/entity/xthsA_jQuKn3GW8-9ILQqg",
 *                             pep: false,
 *                             psaCount: 0,
 *                             sanctioned: false,
 *                             closed: false,
 *                             tradeCount: {
 *                                 "sent": 0,
 *                                 "received": 0
 *                             },
 *                             type: Sayari.Entities.Person,
 *                             identifiers: [],
 *                             addresses: ["Fross Zelnick Lehrman & Zissu, P.C., 866 United Nations Plaza, New York NY 10017", "FROSS ZELNICK LEHRMAN & ZISSU, P.C., 4 TIMES SQUARE, 17TH FLOOR, NEW YORK, NY 10036", "Fross Zelnick Lehrman & Zissu, P.C., 151 West 42nd Street, 17th Floor, New York, NY 10036"],
 *                             countries: [Sayari.Country.Usa],
 *                             relationshipCount: {
 *                                 [Sayari.Relationships.LawyerOf]: 179
 *                             },
 *                             sourceCount: {
 *                                 "ac1fa195f9cd4ccf657bca3c6db0bb19": {
 *                                     count: 199,
 *                                     label: "USA Patents and Trademark Office Trademark Applications"
 *                                 }
 *                             },
 *                             risk: {},
 *                             userAttributeCount: {},
 *                             userRecordCount: 0,
 *                             userRelatedEntitiesCount: 0,
 *                             userRelationshipCount: {},
 *                             relatedEntitiesCount: 179,
 *                             attributeCount: {
 *                                 [Sayari.Attributes.Country]: 1,
 *                                 [Sayari.Attributes.Address]: 5,
 *                                 [Sayari.Attributes.Name]: 1
 *                             },
 *                             referenceId: "ac1fa195f9cd4ccf657bca3c6db0bb19/76232419/1717632000000:6d0f0edbd065319df4be58c3bc7909f5"
 *                         },
 *                         relationships: {
 *                             [Sayari.Relationships.HasLawyer]: {
 *                                 values: [{
 *                                         record: "ac1fa195f9cd4ccf657bca3c6db0bb19/76082348/1717632000000",
 *                                         acquisitionDate: "2024-06-06",
 *                                         attributes: {}
 *                                     }]
 *                             }
 *                         }
 *                     }]
 *             }]
 *     }
 */
export interface ShortestPathResponse {
    entities: string[];
    data: Sayari.ShortestPathData[];
}
