/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../../index";

/**
 * @example
 *     {
 *         name: "victoria beckham limited",
 *         limit: 1
 *     }
 *
 * @example
 *     {
 *         name: "victoria beckham limited",
 *         limit: 1,
 *         profile: Sayari.ProfileEnum.Suppliers
 *     }
 */
export interface Resolution {
    /**
     * A limit on the number of objects to be returned with a range between 1 and 10 inclusive. Defaults to 10.
     */
    limit?: number;
    /**
     * Number of results to skip before returning response. Defaults to 0.
     */
    offset?: number;
    /**
     * Entity name
     */
    name?: string | string[];
    /**
     * Entity identifier. Can be from either the [Identifier Type](/sayari-library/ontology/enumerated-types#identifier-type) or [Weak Identifier Type](/sayari-library/ontology/enumerated-types#weak-identifier-type) enums.
     */
    identifier?: Sayari.BothIdentifierTypes | Sayari.BothIdentifierTypes[];
    /**
     * Entity country - must be ISO (3166) Trigram i.e., `USA`. See complete list [here](/sayari-library/ontology/enumerated-types#country)
     */
    country?: Sayari.Country | Sayari.Country[];
    /**
     * Entity address
     */
    address?: string | string[];
    /**
     * Entity date of birth
     */
    dateOfBirth?: string | string[];
    /**
     * Entity contact
     */
    contact?: string | string[];
    /**
     * [Entity type](/sayari-library/ontology/entities). If multiple values are passed for any field, the endpoint will match entities with ANY of the values.
     */
    type?: Sayari.Entities | Sayari.Entities[];
    /**
     * Profile can be used to switch between search algorithms. The default profile `corporate` is optimized for accurate entity attribute matching and is ideal for business verification and matching entities with corporate data. The `suppliers` profile is optimized for matching entities with extensive trade data. Ideal for supply chain and trade-related use cases.
     */
    profile?: Sayari.ProfileEnum;
    /**
     * Adding this param enable an alternative matching logic. It will set a minimum percentage of tokens needed to match with user input to be considered a "hit". Accepts integers from 0 to 100 inclusive.
     */
    nameMinPercentage?: number;
}
