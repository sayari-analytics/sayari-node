"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityDetails = void 0;
const core = __importStar(require("../../../../core"));
exports.EntityDetails = core.serialization
    .object({
    registrationDate: core.serialization.property("registration_date", core.serialization.string().optional()),
    translatedLabel: core.serialization.property("translated_label", core.serialization.string().optional()),
    hsCode: core.serialization.property("hs_code", core.serialization.string().optional()),
    shipmentArrival: core.serialization.property("shipment_arrival", core.serialization.string().optional()),
    shipmentDeparture: core.serialization.property("shipment_departure", core.serialization.string().optional()),
    companyType: core.serialization.property("company_type", core.serialization.string().optional()),
    latestStatus: core.serialization.property("latest_status", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).Status; })).optional()),
    risk: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).Risk; })),
    attributes: core.serialization
        .record(core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).Attributes; })), core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).AttributeDetails; })).optional())
        .optional(),
    relationships: core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).Relationships; })).optional(),
    possiblySameAs: core.serialization.property("possibly_same_as", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).PossiblySameAs; })).optional()),
    referencedBy: core.serialization.property("referenced_by", core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).ReferencedBy; })).optional()),
    matches: core.serialization
        .record(core.serialization.string(), core.serialization.list(core.serialization.string()))
        .optional(),
})
    .extend(core.serialization.lazyObject(() => __awaiter(void 0, void 0, void 0, function* () { return (yield Promise.resolve().then(() => __importStar(require("../../..")))).EmbeddedEntity; })));
