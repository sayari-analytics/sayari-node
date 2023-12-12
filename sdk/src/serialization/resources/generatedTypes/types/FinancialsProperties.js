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
export const FinancialsProperties = core.serialization.object({
    assets: core.serialization.number().optional(),
    currency: core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../../index.js")).Currency; })).optional(),
    employees: core.serialization.number().optional(),
    liabilities: core.serialization.number().optional(),
    netIncome: core.serialization.property("net_income", core.serialization.number().optional()),
    paidUpCapital: core.serialization.property("paid_up_capital", core.serialization.number().optional()),
    registeredCapital: core.serialization.property("registered_capital", core.serialization.number().optional()),
    revenue: core.serialization.number().optional(),
});
