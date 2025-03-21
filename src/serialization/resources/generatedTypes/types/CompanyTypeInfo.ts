/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { CompanyTypeData } from "./CompanyTypeData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const CompanyTypeInfo: core.serialization.ObjectSchema<serializers.CompanyTypeInfo.Raw, Sayari.CompanyTypeInfo> =
    core.serialization
        .object({
            data: core.serialization.list(CompanyTypeData),
            next: core.serialization.unknown().optional(),
            offset: core.serialization.number().optional(),
        })
        .extend(PaginatedResponse);

export declare namespace CompanyTypeInfo {
    export interface Raw extends PaginatedResponse.Raw {
        data: CompanyTypeData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}
