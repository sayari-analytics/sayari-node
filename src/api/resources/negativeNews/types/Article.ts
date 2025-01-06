/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Array of analyzed news articles and risk assessments. Each article includes source metadata and identified risk categories based on content analysis.
 */
export interface Article {
    /** Article publication date */
    published: string;
    /** Array of risk flags */
    riskFlags: string[];
    /** Contains the search query and associated terms used to find the article */
    searchTerm?: unknown;
    /** Brief excerpt or summary of the article content */
    snippet: string;
    /** Name of the publishing organization or media outlet */
    source: string;
    /** Article headline or title from the source publication */
    title: string;
    /** Direct URL link to the original article */
    url: string;
}
