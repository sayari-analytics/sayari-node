/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import * as SayariAnalyticsApi from "../../..";

export class MethodNotAllowed extends errors.SayariAnalyticsApiError {
    constructor(body: SayariAnalyticsApi.MethodNotAllowedResponse) {
        super({
            message: "MethodNotAllowed",
            statusCode: 405,
            body: body,
        });
        Object.setPrototypeOf(this, MethodNotAllowed.prototype);
    }
}
