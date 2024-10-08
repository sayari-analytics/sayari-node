/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../../index";

/**
 * @example
 *     {
 *         minDate: "2023-03-15",
 *         product: ["3204"],
 *         risk: ["forced_labor_xinjiang_origin_subtier"]
 *     }
 */
export interface UpstreamTradeTraversalRequest {
    /**
     * Risk leaf node filter. Only return supply chains that end with a supplier that has 1+ of the specified [risk factors](/sayari-library/ontology/risk-factors).
     */
    risk?: Sayari.Risk[];
    /**
     * Risk leaf node filter. Only return supply chains that end with a supplier that has none of the specified [risk factors](/sayari-library/ontology/risk-factors).
     */
    notRisk?: Sayari.Risk[];
    /**
     * Country leaf node filter. Only return supply chains that end with a supplier in 1+ of the specified countries.
     */
    countries?: Sayari.Country[];
    /**
     * Country leaf node filter. Only return supply chains that end with a supplier in none of the specified countries.
     */
    notCountries?: Sayari.Country[];
    /**
     * Product root edge filter. Only return supply chains that start with an edge that has 1+ of the specified HS codes.
     */
    product?: string[];
    /**
     * Product root edge filter. Only return supply chains that start with an edge that has none of the specified HS codes.
     */
    notProduct?: string[];
    /**
     * Component node filter. Only return supply chains that contain at least one edge with 1+ of the specified HS codes.
     */
    component?: string[];
    /**
     * Component node filter. Only return supply chains that contain no edges with any of the specified HS codes.
     */
    notComponent?: string[];
    /**
     * Minimum date edge filter. Only return supply chains with edge dates that are greater than or equal to this date.
     */
    minDate?: string;
    /**
     * Maximum date edge filter. Only return supply chains with edge dates that are less than or equal to this date.
     */
    maxDate?: string;
    /**
     * The maximum depth of the traversal, from 1 to 4 inclusive. Default is 4. Reduce if query is timing out.
     */
    maxDepth?: number;
    /**
     * The maximum number of results to return. Default and maximum values are 25,000.
     */
    limit?: number;
}
