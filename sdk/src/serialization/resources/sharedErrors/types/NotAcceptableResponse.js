/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as core from "../../../../core/index.js";
export const NotAcceptableResponse = core.serialization.object({
    status: core.serialization.number(),
    message: core.serialization.list(core.serialization.string()),
    success: core.serialization.boolean(),
});