/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../..";

export interface NameProperties {
    context?: string;
    /** The language that the name is in */
    language?: SayariAnalyticsApi.Language;
    /** The name value translated to English */
    translated?: string;
    /** The name value transliterated to English */
    transliterated?: string;
    /** The name, as text */
    value: string;
}
