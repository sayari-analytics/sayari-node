/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors";
export class BadGateway extends errors.SayariAnalyticsApiError {
    constructor(body) {
        super({
            statusCode: 502,
            body: body,
        });
        Object.setPrototypeOf(this, BadGateway.prototype);
    }
}