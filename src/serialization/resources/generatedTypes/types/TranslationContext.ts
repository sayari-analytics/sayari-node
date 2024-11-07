/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const TranslationContext: core.serialization.Schema<
    serializers.TranslationContext.Raw,
    Sayari.TranslationContext
> = core.serialization.enum_(["google_translate", "pinyin", "sayari_machine_translation"]);

export declare namespace TranslationContext {
    type Raw = "google_translate" | "pinyin" | "sayari_machine_translation";
}
