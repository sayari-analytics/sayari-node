/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";

export const CompanyType: core.serialization.Schema<serializers.CompanyType.Raw, SayariAnalyticsApi.CompanyType> =
    core.serialization.string();

export declare namespace CompanyType {
    type Raw = string;
}
