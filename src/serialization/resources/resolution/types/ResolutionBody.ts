/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { BothIdentifierTypes } from "../../generatedTypes/types/BothIdentifierTypes";
import { Country } from "../../generatedTypes/types/Country";
import { Entities } from "../../generatedTypes/types/Entities";
import { ProfileEnum } from "./ProfileEnum";

export const ResolutionBody: core.serialization.ObjectSchema<serializers.ResolutionBody.Raw, Sayari.ResolutionBody> =
    core.serialization.object({
        name: core.serialization.list(core.serialization.string()).optional(),
        identifier: core.serialization.list(BothIdentifierTypes).optional(),
        country: core.serialization.list(Country).optional(),
        address: core.serialization.list(core.serialization.string()).optional(),
        dateOfBirth: core.serialization.property(
            "date_of_birth",
            core.serialization.list(core.serialization.string()).optional()
        ),
        contact: core.serialization.list(core.serialization.string()).optional(),
        type: core.serialization.list(Entities).optional(),
        profile: ProfileEnum.optional(),
    });

export declare namespace ResolutionBody {
    interface Raw {
        name?: string[] | null;
        identifier?: BothIdentifierTypes.Raw[] | null;
        country?: Country.Raw[] | null;
        address?: string[] | null;
        date_of_birth?: string[] | null;
        contact?: string[] | null;
        type?: Entities.Raw[] | null;
        profile?: ProfileEnum.Raw | null;
    }
}
