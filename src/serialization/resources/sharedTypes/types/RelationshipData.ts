/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { RelationshipInfo } from "./RelationshipInfo";
import { Relationships } from "../../generatedTypes/types/Relationships";

export const RelationshipData: core.serialization.ObjectSchema<
    serializers.RelationshipData.Raw,
    Sayari.RelationshipData
> = core.serialization.object({
    target: core.serialization.lazyObject(async () => (await import("../../..")).EntityDetails),
    types: core.serialization.record(Relationships, core.serialization.list(RelationshipInfo).optional()),
    dates: core.serialization.list(core.serialization.string()),
    firstObserved: core.serialization.property("first_observed", core.serialization.string().optional()),
    former: core.serialization.boolean().optional(),
    lastObserved: core.serialization.property("last_observed", core.serialization.string().optional()),
    startDate: core.serialization.property("start_date", core.serialization.string().optional()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
});

export declare namespace RelationshipData {
    interface Raw {
        target: serializers.EntityDetails.Raw;
        types: Record<Relationships.Raw, RelationshipInfo.Raw[] | null | undefined>;
        dates: string[];
        first_observed?: string | null;
        former?: boolean | null;
        last_observed?: string | null;
        start_date?: string | null;
        end_date?: string | null;
    }
}
