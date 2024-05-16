/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface FinancialsProperties {
    /** The total value of assets owned by a company */
    assets?: number;
    /** Reporting currency */
    currency?: Sayari.Currency;
    /** as-of date */
    date?: string;
    /** Total employees */
    employees?: number;
    /** start date */
    fromDate?: string;
    /** Sum of the combined debts a company owes */
    liabilities?: number;
    /** Company's earnings for a period after subtracting operating costs, taxes, and interest */
    netIncome?: number;
    /** Paid-up capital is the capital already held by the company */
    paidUpCapital?: number;
    /** Registered capital is the maximum amount of share capital that a company is authorized to raise */
    registeredCapital?: number;
    /** The total amount of income generated by the sale of goods or services related to the company's primary operations */
    revenue?: number;
    /** end date */
    toDate?: string;
}
