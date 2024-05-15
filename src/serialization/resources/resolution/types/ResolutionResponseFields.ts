/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { Country } from "../../generatedTypes/types/Country";
import { Entities } from "../../generatedTypes/types/Entities";

export const ResolutionResponseFields: core.serialization.ObjectSchema<
    serializers.ResolutionResponseFields.Raw,
    SayariAnalyticsApi.ResolutionResponseFields
> = core.serialization.object({
    name: core.serialization.list(core.serialization.string()).optional(),
    identifier: core.serialization.list(core.serialization.string()).optional(),
    country: core.serialization.list(Country).optional(),
    address: core.serialization.list(core.serialization.string()).optional(),
    dateOfBirth: core.serialization.property(
        "date_of_birth",
        core.serialization.list(core.serialization.string()).optional()
    ),
    contact: core.serialization.list(core.serialization.string()).optional(),
    type: core.serialization.list(Entities).optional(),
});

export declare namespace ResolutionResponseFields {
    interface Raw {
        name?: string[] | null;
        identifier?: string[] | null;
        country?: Country.Raw[] | null;
        address?: string[] | null;
        date_of_birth?: string[] | null;
        contact?: string[] | null;
        type?: Entities.Raw[] | null;
    }
}