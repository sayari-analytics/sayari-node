/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Tag: core.serialization.Schema<serializers.Tag.Raw, Sayari.Tag> = core.serialization.enum_([
    "pep",
    "state_owned",
    "former_soe",
    "sanctioned",
    "formerly_sanctioned",
    "reputational_risk_terrorism",
    "reputational_risk_organized_crime",
    "reputational_risk_financial_crime",
    "reputational_risk_bribery_and_corruption",
    "reputational_risk_other",
    "reputational_risk_cybercrime",
    "reputational_risk_modern_slavery",
    "regulatory_action",
    "law_enforcement_action",
    "export_controls",
    "forced_labor_xinjiang_contractors",
    "wro_entity",
    "uflpa_entity",
    "sheffield_hallam_university_forced_labor_entity",
    "aspi_uyghur_forced_labor_report_entity",
    "bis_boycott_requester_list",
]);

export declare namespace Tag {
    type Raw =
        | "pep"
        | "state_owned"
        | "former_soe"
        | "sanctioned"
        | "formerly_sanctioned"
        | "reputational_risk_terrorism"
        | "reputational_risk_organized_crime"
        | "reputational_risk_financial_crime"
        | "reputational_risk_bribery_and_corruption"
        | "reputational_risk_other"
        | "reputational_risk_cybercrime"
        | "reputational_risk_modern_slavery"
        | "regulatory_action"
        | "law_enforcement_action"
        | "export_controls"
        | "forced_labor_xinjiang_contractors"
        | "wro_entity"
        | "uflpa_entity"
        | "sheffield_hallam_university_forced_labor_entity"
        | "aspi_uyghur_forced_labor_report_entity"
        | "bis_boycott_requester_list";
}
