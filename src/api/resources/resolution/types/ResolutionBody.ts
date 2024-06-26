/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

export interface ResolutionBody {
    /** Entity name */
    name?: string[];
    /** Entity identifier. Can be from either the [Identifier Type](/sayari-library/ontology/enumerated-types#identifier-type) or [Weak Identifier Type](/sayari-library/ontology/enumerated-types#weak-identifier-type) enums. */
    identifier?: Sayari.BothIdentifierTypes[];
    /** Entity country - must be ISO (3166) Trigram i.e., `USA`. See complete list [here](/sayari-library/ontology/enumerated-types#country) */
    country?: Sayari.Country[];
    /** Entity address */
    address?: string[];
    /** Entity date of birth */
    dateOfBirth?: string[];
    /** Entity contact */
    contact?: string[];
    /** [Entity type](/sayari-library/ontology/entities). If multiple values are passed for any field, the endpoint will match entities with ANY of the values. */
    type?: Sayari.Entities[];
    /** Profile can be used to switch between search algorithms. The default profile `corporate` is optimized for accurate entity attribute matching and is ideal for business verification and matching entities with corporate data. The `suppliers` profile is optimized for matching entities with extensive trade data. Ideal for supply chain and trade-related use cases. */
    profile?: Sayari.ProfileEnum;
}
