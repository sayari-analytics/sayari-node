/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Sayari from "../../../index";

/**
 * Identifiers associated with the entity.
 */
export interface Identifier {
    value: string;
    /** [Identifier Type](/sayari-library/ontology/enumerated-types#identifier-type) or [Weak Identifier Type](/sayari-library/ontology/enumerated-types#weak-identifier-type) */
    type: Sayari.BothIdentifierTypes;
    label: string;
}
