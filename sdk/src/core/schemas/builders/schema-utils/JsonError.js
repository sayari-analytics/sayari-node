import { stringifyValidationError } from "./stringifyValidationErrors.js";
export class JsonError extends Error {
    constructor(errors) {
        super(errors.map(stringifyValidationError).join("; "));
        this.errors = errors;
        Object.setPrototypeOf(this, JsonError.prototype);
    }
}
