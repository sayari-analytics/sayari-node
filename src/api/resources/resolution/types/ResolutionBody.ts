/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface ResolutionBody {
    /** Entity name */
    name?: string[];
    /** Entity identifier. Can be from either the [Identifier Type](/sayari-library/ontology/enumerated-types#identifier-type) or [Weak Identifier Type](/sayari-library/ontology/enumerated-types#weak-identifier-type) enums. */
    identifier?: Sayari.BothIdentifierTypes;
    /** Entity address */
    address?: string[];
    /** Entity city that contains the provided city name. */
    city?: string;
    /** Entity state that contains the provided state name. */
    state?: string;
    /** Entity country - must be ISO (3166) Trigram i.e., `USA`. See complete list [here](/sayari-library/ontology/enumerated-types#country) */
    country?: Sayari.Country[];
    /** Entity date of birth */
    dateOfBirth?: string[];
    /** Entity contact */
    contact?: string[];
    /** [Entity type](/sayari-library/ontology/entities). If multiple values are passed for any field, the endpoint will match entities with ANY of the values. */
    type?: Sayari.Entities[];
    /** Specifies the search algorithm to use. `corporate` (default) is optimized for accurate entity attribute matching, ideal for business verification. `suppliers` is tailored for matching entities with trade data, suitable for supply chain use cases. `search` mimics /search/entity behavior, best for name-only matches. */
    profile?: Sayari.ProfileEnum;
    /** Adding this param enables an alternative matching logic. It will set a minimum percentage of tokens needed to match with user input to be considered a "hit". Accepts integers from 0 to 100 inclusive. */
    nameMinPercentage?: number;
    /** Adding this param enables an alternative matching logic. It sets the minimum number of matching tokens the resolved hits need to have in common with the user input to be considered a "hit". Accepts non-negative integers. */
    nameMinTokens?: number;
    /** Specifies the minimum score required to pass, which controls the strictness of the matching threshold. The default value is 77, and tuned for general use-case accuracy. Increase the value for stricter matching, reduce to loosen. */
    minimumScoreThreshold?: number;
    /** Enables a name search fallback when either the corporate or supplier profiles fails to find a match. When invoked, the fallback will make a call similar to /search/entity on name only. By default set to true. */
    searchFallback?: boolean;
}
