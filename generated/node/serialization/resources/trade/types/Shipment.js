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
export const Shipment = core.serialization.object({
    monetaryValue: core.serialization.property("monetary_value", core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).MonetaryValue; })))),
    dst: core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).SourceOrDestinationEntity; }))),
    weight: core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).Weight; }))),
    businessPurpose: core.serialization.property("business_purpose", core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).BusinessPurpose; })))),
    identifier: core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).ShipmentIdentifier; }))),
    country: core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).ShipmentCountry; }))),
    src: core.serialization.list(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).SourceOrDestinationEntity; }))),
    metadata: core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).ShipmentMetadata; })),
});