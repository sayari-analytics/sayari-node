/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as Sayari from "../../../index";

export class BadRequest extends errors.SayariError {
    constructor(body?: Sayari.BadRequestResponse) {
        super({
            message: "BadRequest",
            statusCode: 400,
            body: body,
        });
        Object.setPrototypeOf(this, BadRequest.prototype);
    }
}
