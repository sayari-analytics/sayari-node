/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         offset: 0,
 *         limit: 2,
 *         size: {
 *             count: 547,
 *             qualifier: SayariAnalyticsApi.CountQualifier.Eq
 *         },
 *         next: true,
 *         data: [{
 *                 id: "e85d865943ee6d8369307569d2ad9de0",
 *                 label: "Acuris Risk Intelligence Adverse Media Data",
 *                 description: "Contains PDFs and URLs to adverse media reporting for PEPs, SOEs, sanctioned entities, and entities linked to financial regulatory and law enforcement actions. Available for millions of entities from 'Acuris Risk Intelligence KYC6 (3rd Party Data)' in 'Records' section.",
 *                 country: SayariAnalyticsApi.Country.Xxx,
 *                 region: "international_(multi-region_coverage)",
 *                 dateAdded: "2022-04-11",
 *                 sourceType: "adverse_media_/_negative_news_data",
 *                 recordType: "adverse_media_record",
 *                 structure: "unstructured",
 *                 sourceUrl: "https://www.acurisriskintelligence.com/",
 *                 pep: false,
 *                 watchlist: false
 *             }, {
 *                 id: "a8c6ee1cd4dfc952105ee8c0e4836f08",
 *                 label: "Acuris Risk Intelligence KYC6 (3rd Party Data)",
 *                 description: "Contains profiles of PEPs, sanctioned entities, SOEs, and entities linked to financial regulatory and law enforcement actions from hundreds of international watchlists. Provides identifying information on individuals and companies as available.",
 *                 country: SayariAnalyticsApi.Country.Xxx,
 *                 region: "international_(multi-region_coverage)",
 *                 dateAdded: "2022-02-09",
 *                 sourceType: "risk_intelligence_data",
 *                 recordType: "risk_intelligence_record",
 *                 structure: "unstructured",
 *                 sourceUrl: "https://www.acurisriskintelligence.com/",
 *                 pep: false,
 *                 watchlist: false
 *             }]
 *     }
 */
export interface ListSourcesResponse extends SayariAnalyticsApi.PaginatedResponse {
    offset: number;
    next: boolean;
    data: SayariAnalyticsApi.Source[];
}