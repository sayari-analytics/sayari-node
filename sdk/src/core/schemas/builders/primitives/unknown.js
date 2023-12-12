import { SchemaType } from "../../Schema.js";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator.js";
export const unknown = createIdentitySchemaCreator(SchemaType.UNKNOWN, (value) => ({ ok: true, value }));