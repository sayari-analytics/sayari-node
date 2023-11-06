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
import * as core from "../../../../core";
export const EntityDetails = core.serialization
    .object({
    registrationDate: core.serialization.property("registration_date", core.serialization.string().optional()),
    translatedLabel: core.serialization.property("translated_label", core.serialization.string().optional()),
    hsCode: core.serialization.property("hs_code", core.serialization.string().optional()),
    shipmentArrival: core.serialization.property("shipment_arrival", core.serialization.string().optional()),
    shipmentDeparture: core.serialization.property("shipment_departure", core.serialization.string().optional()),
    companyType: core.serialization.property("company_type", core.serialization.string().optional()),
    latestStatus: core.serialization.property("latest_status", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).Status; })).optional()),
    risk: core.serialization.record(core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).Risk; })), core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).RiskData; })).optional()),
    attributes: core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).AttributeDetails; })).optional(),
    relationships: core.serialization
        .lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).EntityRelationships; }))
        .optional(),
    possiblySameAs: core.serialization.property("possibly_same_as", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).PossiblySameAs; })).optional()),
    referencedBy: core.serialization.property("referenced_by", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).ReferencedBy; })).optional()),
    matches: core.serialization
        .record(core.serialization.string(), core.serialization.list(core.serialization.string()))
        .optional(),
})
    .extend(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).EmbeddedEntity; })));