/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const ProjectNotificationRiskData: core.serialization.ObjectSchema<
    serializers.ProjectNotificationRiskData.Raw,
    Sayari.ProjectNotificationRiskData
> = core.serialization.object({
    added: core.serialization.list(core.serialization.string()),
    removed: core.serialization.list(core.serialization.string()),
    date: core.serialization.string(),
});

export declare namespace ProjectNotificationRiskData {
    export interface Raw {
        added: string[];
        removed: string[];
        date: string;
    }
}
