/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * @example
 *     {
 *         data: [{
 *                 source: "ESkH7J-UCRfY5t0_JXIH3w",
 *                 target: {
 *                     id: "BAQGiWn9riAG10h4NuK_9w",
 *                     type: "company",
 *                     label: "TEXMARK CHEMICALS INC",
 *                     countries: ["USA"],
 *                     risk: ["forced_labor_xinjiang_origin_subtier"]
 *                 },
 *                 path: [{
 *                         entity: {
 *                             id: "ESkH7J-UCRfY5t0_JXIH3w",
 *                             type: "company",
 *                             label: "ACUMEN HOUSEWARE INDUSTRY VIETNAM CO LTD",
 *                             countries: ["VNM"],
 *                             risk: []
 *                         },
 *                         products: [{
 *                                 hsCode: {
 *                                     code: "3204",
 *                                     description: "Synthetic dyes & agents"
 *                                 },
 *                                 minDate: "2023-04-01",
 *                                 maxDate: "2024-03-27",
 *                                 arrivalCountries: ["VNM"],
 *                                 departureCountries: ["IND"]
 *                             }]
 *                     }, {
 *                         entity: {
 *                             id: "A84F35yJ_3FT_hVzD9EzAw",
 *                             type: "company",
 *                             label: "TOYO INK INDIA PRIVATE LIMITED",
 *                             countries: ["IND"],
 *                             risk: ["forced_labor_sheffield_hallam_university_reports_origin_subtier", "forced_labor_uflpa_origin_subtier", "forced_labor_xinjiang_origin_subtier"]
 *                         },
 *                         products: [{
 *                                 hsCode: {
 *                                     code: "3206",
 *                                     description: "Other dyes & colorants"
 *                                 },
 *                                 minDate: "2023-03-01",
 *                                 maxDate: "2024-02-12",
 *                                 arrivalCountries: ["IND"],
 *                                 departureCountries: ["CHN"]
 *                             }]
 *                     }]
 *             }]
 *     }
 */
export interface UpstreamTradeTraversalResponse {
    status?: number;
    success?: boolean;
    message?: string;
    data: Sayari.TradeTraversalPath[];
}
