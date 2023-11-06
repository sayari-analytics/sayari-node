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
export const AuthResponse = core.serialization.object({
    accessToken: core.serialization.property("access_token", core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).AccessToken; }))),
    expiresIn: core.serialization.property("expires_in", core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).ExpiresIn; }))),
    tokenType: core.serialization.property("token_type", core.serialization.lazy(() => __awaiter(void 0, void 0, void 0, function* () { return (yield import("../../..")).TokenType; }))),
});