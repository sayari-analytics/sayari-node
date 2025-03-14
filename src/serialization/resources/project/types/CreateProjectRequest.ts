/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { ProjectShareOnCreate } from "./ProjectShareOnCreate";

export const CreateProjectRequest: core.serialization.ObjectSchema<
    serializers.CreateProjectRequest.Raw,
    Sayari.CreateProjectRequest
> = core.serialization.object({
    label: core.serialization.string(),
    share: ProjectShareOnCreate.optional(),
});

export declare namespace CreateProjectRequest {
    export interface Raw {
        label: string;
        share?: ProjectShareOnCreate.Raw | null;
    }
}
