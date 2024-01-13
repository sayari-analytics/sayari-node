/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

/**
 * OK
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 2,
 *         size: {
 *             count: 5287,
 *             qualifier: "eq"
 *         },
 *         next: true,
 *         data: [{
 *                 id: "VRttegVx-TLCsNHKfNe1Cw",
 *                 label: "\u0422\u043E\u0432\u0430\u0440\u0438\u0441\u0442\u0432\u043E \u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u043E\u044E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044E \"\u0412\u0415\u0421\u0422-\u0421\u041F\u0420\u0418\u041D\u0422\"",
 *                 degree: 1111,
 *                 entityUrl: "/v1/entity/VRttegVx-TLCsNHKfNe1Cw",
 *                 pep: false,
 *                 psaCount: 0,
 *                 sanctioned: false,
 *                 closed: false,
 *                 translatedLabel: "VOLYN LIMITED LIABILITY COMPANY VOLYN INSTITUTE OF INFORMATION TECHNOLOGIES",
 *                 companyType: "\u0410\u0414\u0412\u041E\u041A\u0410\u0422\u0421\u042C\u041A\u0415 \u0411\u042E\u0420\u041E",
 *                 registrationDate: "Registered 2021-02-02",
 *                 type: SayariAnalyticsApi.Entities.Company,
 *                 identifiers: [{
 *                         value: "44102648",
 *                         type: "ukr_edrpou",
 *                         label: "Ukr Edrpou"
 *                     }, {
 *                         value: "43994030",
 *                         type: "ukr_edrpou",
 *                         label: "Ukr Edrpou"
 *                     }, {
 *                         value: "10019810200000131",
 *                         type: "ukr_reg_num",
 *                         label: "Ukr Reg Num"
 *                     }, {
 *                         value: "43913941",
 *                         type: "ukr_edrpou",
 *                         label: "Ukr Edrpou"
 *                     }, {
 *                         value: "44154434",
 *                         type: "ukr_edrpou",
 *                         label: "Ukr Edrpou"
 *                     }],
 *                 addresses: ["43025, \u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430 \u041E\u0431\u043B\u0430\u0441\u0442\u044C, \u041C\u0456\u0441\u0442\u043E \u041B\u0443\u0446\u044C\u043A(\u0417), \u0412\u0443\u043B\u0438\u0446\u044F \u0421\u043B\u043E\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E, \u0411\u0443\u0434\u0438\u043D\u043E\u043A 30, \u041E\u0444\u0456\u0441 4", "43025 \u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430 \u043E\u0431\u043B., \u043C. \u041B\u0443\u0446\u044C\u043A, \u0432\u0443\u043B. \u0421\u043B\u043E\u0432\u0430\u0446\u044C\u043A\u043E\u0433\u043E, 30, \u043E\u0444. 4", "\u0423\u043A\u0440\u0430\u0457\u043D\u0430, 43020, \u0412\u043E\u043B\u0438\u043D\u0441\u044C\u043A\u0430 \u043E\u0431\u043B., \u043C\u0456\u0441\u0442\u043E \u041B\u0443\u0446\u044C\u043A, \u0432\u0443\u043B.\u0420\u0456\u0432\u043D\u0435\u043D\u0441\u044C\u043A\u0430, \u0431\u0443\u0434\u0438\u043D\u043E\u043A 48"],
 *                 countries: [SayariAnalyticsApi.Country.Ukr],
 *                 relationshipCount: {
 *                     [SayariAnalyticsApi.Relationships.ReceiverOf]: 951,
 *                     [SayariAnalyticsApi.Relationships.HasBeneficialOwner]: 73,
 *                     [SayariAnalyticsApi.Relationships.HasOfficer]: 65,
 *                     [SayariAnalyticsApi.Relationships.HasShareholder]: 75,
 *                     [SayariAnalyticsApi.Relationships.HasFounder]: 78,
 *                     [SayariAnalyticsApi.Relationships.ReceivesFrom]: 67,
 *                     [SayariAnalyticsApi.Relationships.HasLegalRepresentative]: 4
 *                 },
 *                 sourceCount: {
 *                     "96c06a5a03b61b91324c7e05b3114fb6": {
 *                         count: 951,
 *                         label: "Ukraine Imports & Exports (January 2023 - Present)"
 *                     },
 *                     "d1bce737c158efddbef5048d63aaf124": {
 *                         count: 241,
 *                         label: "Ukraine Ministry of Justice Registry of Companies"
 *                     }
 *                 },
 *                 risk: {},
 *                 userAttributeCounts: {},
 *                 userRecordCount: 0,
 *                 userRelatedEntitiesCount: 0,
 *                 userRelationshipCount: {},
 *                 relatedEntitiesCount: 1111,
 *                 attributeCounts: {
 *                     "company_type": 6,
 *                     "name": 79,
 *                     "business_purpose": 100,
 *                     "identifier": 70,
 *                     "additional_information": 56,
 *                     "country": 2,
 *                     "contact": 27,
 *                     "status": 70,
 *                     "address": 100
 *                 },
 *                 metadata: {
 *                     latestShipmentDate: "2023-07-31",
 *                     shipments: 951,
 *                     hsCodes: [{
 *                             key: "870323",
 *                             docCount: 259,
 *                             value: "Vehicles; with only spark-ignition internal combustion reciprocating piston engine, cylinder capacity over 1500 but not over 3000cc",
 *                             valueSimple: "Cars & Passenger Vehicles"
 *                         }, {
 *                             key: "8703239013",
 *                             docCount: 258,
 *                             value: "Vehicles; with only spark-ignition internal combustion reciprocating piston engine, cylinder capacity over 1500 but not over 3000cc",
 *                             valueSimple: "Cars & Passenger Vehicles"
 *                         }, {
 *                             key: "870332",
 *                             docCount: 211,
 *                             value: "Vehicles; with only compression-ignition internal combustion piston engine (diesel or semi-diesel), cylinder capacity over 1500 but not over 2500cc",
 *                             valueSimple: "Cars & Passenger Vehicles"
 *                         }, {
 *                             key: "8703329030",
 *                             docCount: 194,
 *                             value: "Vehicles; with only compression-ignition internal combustion piston engine (diesel or semi-diesel), cylinder capacity over 1500 but not over 2500cc",
 *                             valueSimple: "Cars & Passenger Vehicles"
 *                         }, {
 *                             key: "870322",
 *                             docCount: 98,
 *                             value: "Vehicles; with only spark-ignition internal combustion piston engine, cylinder capacity over 1000 but not over 1500cc",
 *                             valueSimple: "Cars & Passenger Vehicles"
 *                         }]
 *                 }
 *             }, {
 *                 id: "pvg2oozEO4Z0igkTezE-tg",
 *                 label: "HA & COM BEBIDAS DEL MUNDO S.A.",
 *                 degree: 1768,
 *                 entityUrl: "/v1/entity/pvg2oozEO4Z0igkTezE-tg",
 *                 pep: false,
 *                 psaCount: 0,
 *                 sanctioned: false,
 *                 closed: false,
 *                 type: SayariAnalyticsApi.Entities.Company,
 *                 identifiers: [{
 *                         value: "310100339533",
 *                         type: "cri_imp",
 *                         label: "Cri Imp"
 *                     }],
 *                 addresses: ["Local 22"],
 *                 countries: [SayariAnalyticsApi.Country.Cri],
 *                 relationshipCount: {
 *                     [SayariAnalyticsApi.Relationships.ShipperOf]: 83,
 *                     [SayariAnalyticsApi.Relationships.ReceiverOf]: 1685
 *                 },
 *                 sourceCount: {
 *                     "2357c5dd6165c028180761babd0efc14": {
 *                         count: 1768,
 *                         label: "Costa Rica Imports & Exports (January 2022 - Present)"
 *                     }
 *                 },
 *                 risk: {},
 *                 userAttributeCounts: {},
 *                 userRecordCount: 0,
 *                 userRelatedEntitiesCount: 0,
 *                 userRelationshipCount: {},
 *                 relatedEntitiesCount: 1768,
 *                 attributeCounts: {
 *                     "identifier": 1,
 *                     "address": 1,
 *                     "name": 1,
 *                     "country": 1
 *                 },
 *                 metadata: {
 *                     latestShipmentDate: "2023-08-30",
 *                     shipments: 584,
 *                     hsCodes: [{
 *                             key: "220840",
 *                             docCount: 577,
 *                             value: "Rum and other spirits obtained by distilling fermented sugar-cane products",
 *                             valueSimple: "Denatured alcohol & spirits"
 *                         }, {
 *                             key: "2208401023",
 *                             docCount: 334,
 *                             value: "Rum and other spirits obtained by distilling fermented sugar-cane products",
 *                             valueSimple: "Denatured alcohol & spirits"
 *                         }, {
 *                             key: "2208401022",
 *                             docCount: 243,
 *                             value: "Rum and other spirits obtained by distilling fermented sugar-cane products",
 *                             valueSimple: "Denatured alcohol & spirits"
 *                         }, {
 *                             key: "610910",
 *                             docCount: 1,
 *                             value: "T-shirts, singlets and other vests; of cotton, knitted or crocheted",
 *                             valueSimple: "Knitted T-shirts & vests"
 *                         }, {
 *                             key: "6109100000",
 *                             docCount: 1,
 *                             value: "T-shirts, singlets and other vests; of cotton, knitted or crocheted",
 *                             valueSimple: "Knitted T-shirts & vests"
 *                         }]
 *                 }
 *             }]
 *     }
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 2,
 *         size: {
 *             count: 19,
 *             qualifier: "eq"
 *         },
 *         next: true,
 *         data: [{
 *                 id: "tGkI13RWXCVig2W9MYje8w",
 *                 label: "VCY SALES CORP.",
 *                 degree: 1394,
 *                 entityUrl: "/v1/entity/tGkI13RWXCVig2W9MYje8w",
 *                 pep: false,
 *                 psaCount: 0,
 *                 sanctioned: false,
 *                 closed: false,
 *                 type: SayariAnalyticsApi.Entities.Company,
 *                 identifiers: [],
 *                 addresses: ["VCY CENTER BLDG HILADO ST BARANGAY 17,BACOLOD CITY", "HILADO STREET, BRGY.17, BACOLOD CITY,6100, PHILIPPINES, PH"],
 *                 countries: [SayariAnalyticsApi.Country.Phl],
 *                 relationshipCount: {
 *                     [SayariAnalyticsApi.Relationships.ReceivesFrom]: 138,
 *                     [SayariAnalyticsApi.Relationships.ReceiverOf]: 1256
 *                 },
 *                 sourceCount: {
 *                     "8de630b7a702183da138321ae0f1c4b0": {
 *                         count: 585,
 *                         label: "China Imports & Exports (2022 - Present)"
 *                     },
 *                     "b7593dcf982bcb9ca86f24ef369ed1e5": {
 *                         count: 645,
 *                         label: "Philippines Imports & Exports (January 2023 - Present)"
 *                     },
 *                     "e5de7b52cc88ef4cd1a10e201bdf46ee": {
 *                         count: 26,
 *                         label: "Vietnam Imports & Exports (January 2023 - Present)"
 *                     }
 *                 },
 *                 risk: {
 *                     [SayariAnalyticsApi.Risk.ForcedLaborXinjiangOriginSubtier]: {
 *                         value: 3,
 *                         metadata: {},
 *                         level: SayariAnalyticsApi.RiskLevel.High
 *                     }
 *                 },
 *                 userAttributeCounts: {},
 *                 userRecordCount: 0,
 *                 userRelatedEntitiesCount: 0,
 *                 userRelationshipCount: {},
 *                 relatedEntitiesCount: 1394,
 *                 attributeCounts: {
 *                     "address": 2,
 *                     "name": 1,
 *                     "country": 1
 *                 },
 *                 metadata: {
 *                     latestShipmentDate: "2023-09-29",
 *                     shipments: 1256,
 *                     hsCodes: [{
 *                             key: "99",
 *                             docCount: 584,
 *                             value: "Commodities not specified according to kind"
 *                         }, {
 *                             key: "690721",
 *                             docCount: 96,
 *                             value: "Ceramic tiles; flags and paving, hearth or wall tiles other than those of subheadings 6907.30 and 6907.40, of a water absorption coefficient by weight not over 0.5%",
 *                             valueSimple: "Unglazed ceramic tiles"
 *                         }, {
 *                             key: "69072194000",
 *                             docCount: 96,
 *                             value: "Ceramic tiles; flags and paving, hearth or wall tiles other than those of subheadings 6907.30 and 6907.40, of a water absorption coefficient by weight not over 0.5%",
 *                             valueSimple: "Unglazed ceramic tiles"
 *                         }, {
 *                             key: "691090",
 *                             docCount: 42,
 *                             value: "Ceramic sinks, wash basins, wash basin pedestals, baths, bidets, water closet pans, flushing cisterns, urinals and similar sanitary fixtures; of other than porcelain or china",
 *                             valueSimple: "Ceramic sanitary wares"
 *                         }, {
 *                             key: "69109000000",
 *                             docCount: 42,
 *                             value: "Ceramic sinks, wash basins, wash basin pedestals, baths, bidets, water closet pans, flushing cisterns, urinals and similar sanitary fixtures; of other than porcelain or china",
 *                             valueSimple: "Ceramic sanitary wares"
 *                         }]
 *                 }
 *             }, {
 *                 id: "YGV8N-cO7QV462jvv7Oq6w",
 *                 label: "BONFIGLIOLI RIDUTTORI SPA DIVISIONE",
 *                 degree: 197,
 *                 entityUrl: "/v1/entity/YGV8N-cO7QV462jvv7Oq6w",
 *                 pep: false,
 *                 psaCount: 0,
 *                 sanctioned: false,
 *                 closed: false,
 *                 type: SayariAnalyticsApi.Entities.Company,
 *                 identifiers: [],
 *                 addresses: [],
 *                 countries: [],
 *                 relationshipCount: {
 *                     [SayariAnalyticsApi.Relationships.ReceiverOf]: 196,
 *                     [SayariAnalyticsApi.Relationships.ReceivesFrom]: 1
 *                 },
 *                 sourceCount: {
 *                     "ce462e9deea545cce35df38c48512a0c": {
 *                         count: 196,
 *                         label: "India Imports & Exports (January 2023 - Present)"
 *                     }
 *                 },
 *                 risk: {},
 *                 userAttributeCounts: {},
 *                 userRecordCount: 0,
 *                 userRelatedEntitiesCount: 0,
 *                 userRelationshipCount: {},
 *                 relatedEntitiesCount: 197,
 *                 attributeCounts: {
 *                     "name": 1
 *                 },
 *                 metadata: {
 *                     latestShipmentDate: "2023-08-14",
 *                     shipments: 4,
 *                     hsCodes: [{
 *                             key: "870840",
 *                             docCount: 3,
 *                             value: "Vehicle parts; gear boxes and parts thereof",
 *                             valueSimple: "Vehicle Parts & Accessories"
 *                         }, {
 *                             key: "87084000",
 *                             docCount: 3,
 *                             value: "Vehicle parts; gear boxes and parts thereof",
 *                             valueSimple: "Vehicle Parts & Accessories"
 *                         }, {
 *                             key: "848340",
 *                             docCount: 1,
 *                             value: "Gears and gearing; (not toothed wheels, chain sprockets and other transmission elements presented separately); ball or roller screws; gear boxes and other speed changers, including torque converters",
 *                             valueSimple: "Transmission & Gear Components"
 *                         }, {
 *                             key: "84834000",
 *                             docCount: 1,
 *                             value: "Gears and gearing; (not toothed wheels, chain sprockets and other transmission elements presented separately); ball or roller screws; gear boxes and other speed changers, including torque converters",
 *                             valueSimple: "Transmission & Gear Components"
 *                         }]
 *                 }
 *             }]
 *     }
 */
export interface BuyerSearchResponse extends SayariAnalyticsApi.PaginatedResponse {
    offset: number;
    next: boolean;
    data: SayariAnalyticsApi.SupplierOrBuyer[];
}
