/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../../index";

/**
 * @example
 *     {
 *         name: "Gazprom",
 *         topic: "sanctions",
 *         until: "2024-10-01"
 *     }
 *
 * @example
 *     {
 *         name: "JBS",
 *         topic: "environmental"
 *     }
 *
 * @example
 *     {
 *         name: "Alameda Research",
 *         topic: "financial"
 *     }
 */
export interface NegativeNews {
    /**
     * Target entity name for adverse media screening.
     */
    name: string;
    /**
     * Risk category filter for targeted screening. Each topic represents a distinct risk domain (e.g., `environmental` for environmental violations, `financial` for financial misconduct).
     */
    topic?: Sayari.Topics;
    /**
     * Date cutoff for article inclusion in `YYYY-MM-DD` format. If provided, only articles published before this date will be included in results.
     */
    until?: string;
}
