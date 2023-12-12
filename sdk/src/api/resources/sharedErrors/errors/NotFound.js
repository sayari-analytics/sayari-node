/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors/index.js";
export class NotFound extends errors.SayariAnalyticsApiError {
    constructor(body) {
        super({
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFound.prototype);
    }
}
