/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as errors from "../../../../errors";
export class ConnectionError extends errors.SayariAnalyticsApiError {
    constructor(body) {
        super({
            statusCode: 520,
            body: body,
        });
        Object.setPrototypeOf(this, ConnectionError.prototype);
    }
}
