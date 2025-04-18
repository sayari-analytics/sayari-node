/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { PsaMatchKeys } from "./PsaMatchKeys";

export const Psa: core.serialization.ObjectSchema<serializers.Psa.Raw, Sayari.Psa> = core.serialization.object({
    psaId: core.serialization.property("psa_id", core.serialization.string()),
    label: core.serialization.string(),
    count: core.serialization.number().optional(),
    matchKeys: core.serialization.property("match_keys", core.serialization.list(PsaMatchKeys)),
});

export declare namespace Psa {
    export interface Raw {
        psa_id: string;
        label: string;
        count?: number | null;
        match_keys: PsaMatchKeys.Raw[];
    }
}
