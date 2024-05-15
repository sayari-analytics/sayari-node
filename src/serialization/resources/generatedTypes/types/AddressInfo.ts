/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { AddressData } from "./AddressData";
import { PaginatedResponse } from "../../baseTypes/types/PaginatedResponse";

export const AddressInfo: core.serialization.ObjectSchema<serializers.AddressInfo.Raw, SayariAnalyticsApi.AddressInfo> =
    core.serialization
        .object({
            data: core.serialization.list(AddressData),
            next: core.serialization.unknown().optional(),
            offset: core.serialization.number().optional(),
        })
        .extend(PaginatedResponse);

export declare namespace AddressInfo {
    interface Raw extends PaginatedResponse.Raw {
        data: AddressData.Raw[];
        next?: unknown | null;
        offset?: number | null;
    }
}