/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors/index";
import * as Sayari from "../../../index";

export class Unauthorized extends errors.SayariError {
    constructor(body?: Sayari.UnauthorizedResponse) {
        super({
            message: "Unauthorized",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, Unauthorized.prototype);
    }
}
