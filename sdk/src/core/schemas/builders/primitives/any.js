import { SchemaType } from "../../Schema.js";
import { createIdentitySchemaCreator } from "../../utils/createIdentitySchemaCreator.js";
export const any = createIdentitySchemaCreator(SchemaType.ANY, (value) => ({ ok: true, value }));
