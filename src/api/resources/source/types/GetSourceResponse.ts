/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * OK
 *
 * @example
 *     {
 *         id: "f4396e4b8a41d1fd9f09ea94d2ebedb9",
 *         label: "UAE Abu Dhabi Global Market Corporate Registry",
 *         description: "Contains profiles of registered companies. Provides standard company information including name, tax ID, status, address, and business purpose as well as current and former shareholders and directors.",
 *         country: Sayari.Country.Are,
 *         region: "middle_east_&_africa",
 *         dateAdded: "2022-07-25",
 *         sourceType: "company_data",
 *         recordType: "company_record",
 *         structure: "structured",
 *         sourceUrl: "https://www.adgm.com/public-registers",
 *         pep: false,
 *         watchlist: false
 *     }
 */
export interface GetSourceResponse extends Sayari.Source {}
