/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SayariAnalyticsApi from "../../../../api/index";
import * as core from "../../../../core";
import { Risk } from "../../generatedTypes/types/Risk";
import { Country } from "../../generatedTypes/types/Country";

export const PsaSummary: core.serialization.ObjectSchema<serializers.PsaSummary.Raw, SayariAnalyticsApi.PsaSummary> =
    core.serialization.object({
        risk: core.serialization.list(Risk),
        countries: core.serialization.list(Country),
        count: core.serialization.number(),
    });

export declare namespace PsaSummary {
    interface Raw {
        risk: Risk.Raw[];
        countries: Country.Raw[];
        count: number;
    }
}
