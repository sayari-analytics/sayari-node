/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { IdentifierType } from "./IdentifierType";
import { WeakIdentifierType } from "./WeakIdentifierType";

export const BothIdentifierTypes: core.serialization.Schema<
    serializers.BothIdentifierTypes.Raw,
    Sayari.BothIdentifierTypes
> = core.serialization.undiscriminatedUnion([IdentifierType, WeakIdentifierType]);

export declare namespace BothIdentifierTypes {
    type Raw = IdentifierType.Raw | WeakIdentifierType.Raw;
}
