/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as core from "../../../../core/index.js";
export const RecordDetails = core.serialization.object({
    id: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../../index.js")).RecordId; })),
    label: core.serialization.string(),
    source: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../../index.js")).SourceId; })),
    publicationDate: core.serialization.property("publication_date", core.serialization.string().optional()),
    acquisitionDate: core.serialization.property("acquisition_date", core.serialization.string()),
    referencesCount: core.serialization.property("references_count", core.serialization.number()),
    recordUrl: core.serialization.property("record_url", core.serialization.string()),
    sourceUrl: core.serialization.property("source_url", core.serialization.string().optional()),
    matches: core.serialization
        .record(core.serialization.string(), core.serialization.list(core.serialization.string()))
        .optional(),
});
