import { getSchemaUtils } from "../builders/schema-utils/index.js";
import { maybeSkipValidation } from "./maybeSkipValidation.js";
export function createIdentitySchemaCreator(schemaType, validate) {
    return () => {
        const baseSchema = {
            parse: validate,
            json: validate,
            getType: () => schemaType,
        };
        return Object.assign(Object.assign({}, maybeSkipValidation(baseSchema)), getSchemaUtils(baseSchema));
    };
}
