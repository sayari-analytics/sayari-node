/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const Risk: core.serialization.Schema<serializers.Risk.Raw, Sayari.Risk> = core.serialization.enum_([
    "sheffield_hallam_university_forced_labor_entity",
    "forced_labor_xinjiang_origin_direct",
    "regulatory_action",
    "forced_labor_uflpa_origin_subtier_product_map",
    "forced_labor_xinjiang_geospatial",
    "eu_high_risk_third",
    "sheffield_hallam_university_useful_resources",
    "exports_to_entity_licensed_with_fsb_rf",
    "owner_of_aspi_forced_labor_entity",
    "sanctioned",
    "reputational_risk_financial_crime",
    "cmic_entity",
    "psa_pep",
    "export_controls",
    "wro_entity",
    "imports_bis_high_priority_items",
    "reputational_risk_bribery_and_corruption",
    "sanctioned_adjacent",
    "forced_labor_aspi_origin_subtier_product_map",
    "psa_export_controls",
    "owner_of_sanctioned_entity",
    "psa_regulatory_action",
    "forced_labor_xinjiang_contractors",
    "owned_by_xinjiang_entity",
    "forced_labor_xinjiang_origin_subtier",
    "psa_forced_labor_xinjiang_name",
    "basel_aml",
    "aspi_uyghur_forced_labor_report_entity_adjacent",
    "owned_by_cmic_entity",
    "ofac_sdn",
    "owned_by_bis_meu_entity",
    "owned_by_forced_labor_xinjiang_uflpa",
    "forced_labor_xinjiang_uflpa_adjacent",
    "owned_by_wro_entity",
    "psa_military_civil_fusion",
    "forced_labor_aspi_origin_subtier",
    "former_wro_entity",
    "forced_labor_wro_origin_direct",
    "owned_by_sheffield_hallam_university_reports_forced_labor_entity",
    "eu_sanctioned",
    "aspi_uyghur_forced_labor_report_entity",
    "forced_labor_china_keywords",
    "exports_bis_high_priority_items_critical_components",
    "soe_adjacent",
    "state_owned",
    "psa_sheffield_hallam_university_forced_labor_entity",
    "export_controls_adjacent",
    "export_to_soe",
    "forced_labor_sheffield_hallam_university_reports_origin_subtier_product_map",
    "psa_sanctioned",
    "ofac_50_percent_rule",
    "owner_of_export_controls_entity",
    "forced_labor_sheffield_hallam_university_reports_origin_subtier",
    "meu_list_contractors",
    "owner_of_forced_labor_xinjiang_uflpa",
    "pep",
    "owned_by_entity_in_export_controls",
    "psa_forced_labor_aspi_uyghur",
    "eu_50_percent_rule",
    "forced_labor_xinjiang_operations",
    "forced_labor_wro_origin_subtier",
    "reputational_risk_other",
    "export_to_sanctioned",
    "sheffield_hallam_university_forced_labor_reports_entity_adjacent",
    "former_soe",
    "reputational_risk_organized_crime",
    "reputational_risk_forced_labor",
    "imports_bis_high_priority_items_critical_components",
    "owner_of_sheffield_hallam_university_reports_forced_labor_entity",
    "cpi_score",
    "psa_sheffield_hallam_university_useful_resources",
    "psa_wro_entity",
    "psa_entity_licensed_with_fsb_rf",
    "psa_forced_labor_xinjiang_uflpa",
    "owner_of_wro_entity",
    "forced_labor_xinjiang_origin_subtier_product_map",
    "military_civil_fusion",
    "forced_labor_xinjiang_registration",
    "forced_labor_xinjiang_name",
    "owned_by_aspi_forced_labor_entity",
    "reputational_risk_terrorism",
    "formerly_sanctioned",
    "owned_by_section_1260h_entity",
    "sheffield_hallam_university_forced_labor_reports_intermediary_entity",
    "pep_adjacent",
    "owner_of_forced_labor_xinjiang_entity",
    "law_enforcement_action",
    "owned_by_soe",
    "forced_labor_wro_origin_subtier_product_map",
    "entity_licensed_with_fsb_rf",
    "psa_forced_labor_xinjiang_registration",
    "forced_labor_sheffield_hallam_university_reports_origin_direct",
    "psa_forced_labor_xinjiang_geospatial",
    "wro_entity_adjacent",
    "reputational_risk_cybercrime",
    "psa_forced_labor_xinjiang_operations",
    "owner_of_soe",
    "forced_labor_aspi_origin_direct",
    "exports_bis_high_priority_items",
    "forced_labor_uflpa_origin_subtier",
    "owner_of_regulatory_action_entity",
    "psa_sheffield_hallam_university_intermediary_entity",
    "forced_labor_xinjiang_uflpa",
    "psa_state_owned",
    "forced_labor_uflpa_origin_direct",
    "owned_by_sanctioned_entity",
]);

export declare namespace Risk {
    type Raw =
        | "sheffield_hallam_university_forced_labor_entity"
        | "forced_labor_xinjiang_origin_direct"
        | "regulatory_action"
        | "forced_labor_uflpa_origin_subtier_product_map"
        | "forced_labor_xinjiang_geospatial"
        | "eu_high_risk_third"
        | "sheffield_hallam_university_useful_resources"
        | "exports_to_entity_licensed_with_fsb_rf"
        | "owner_of_aspi_forced_labor_entity"
        | "sanctioned"
        | "reputational_risk_financial_crime"
        | "cmic_entity"
        | "psa_pep"
        | "export_controls"
        | "wro_entity"
        | "imports_bis_high_priority_items"
        | "reputational_risk_bribery_and_corruption"
        | "sanctioned_adjacent"
        | "forced_labor_aspi_origin_subtier_product_map"
        | "psa_export_controls"
        | "owner_of_sanctioned_entity"
        | "psa_regulatory_action"
        | "forced_labor_xinjiang_contractors"
        | "owned_by_xinjiang_entity"
        | "forced_labor_xinjiang_origin_subtier"
        | "psa_forced_labor_xinjiang_name"
        | "basel_aml"
        | "aspi_uyghur_forced_labor_report_entity_adjacent"
        | "owned_by_cmic_entity"
        | "ofac_sdn"
        | "owned_by_bis_meu_entity"
        | "owned_by_forced_labor_xinjiang_uflpa"
        | "forced_labor_xinjiang_uflpa_adjacent"
        | "owned_by_wro_entity"
        | "psa_military_civil_fusion"
        | "forced_labor_aspi_origin_subtier"
        | "former_wro_entity"
        | "forced_labor_wro_origin_direct"
        | "owned_by_sheffield_hallam_university_reports_forced_labor_entity"
        | "eu_sanctioned"
        | "aspi_uyghur_forced_labor_report_entity"
        | "forced_labor_china_keywords"
        | "exports_bis_high_priority_items_critical_components"
        | "soe_adjacent"
        | "state_owned"
        | "psa_sheffield_hallam_university_forced_labor_entity"
        | "export_controls_adjacent"
        | "export_to_soe"
        | "forced_labor_sheffield_hallam_university_reports_origin_subtier_product_map"
        | "psa_sanctioned"
        | "ofac_50_percent_rule"
        | "owner_of_export_controls_entity"
        | "forced_labor_sheffield_hallam_university_reports_origin_subtier"
        | "meu_list_contractors"
        | "owner_of_forced_labor_xinjiang_uflpa"
        | "pep"
        | "owned_by_entity_in_export_controls"
        | "psa_forced_labor_aspi_uyghur"
        | "eu_50_percent_rule"
        | "forced_labor_xinjiang_operations"
        | "forced_labor_wro_origin_subtier"
        | "reputational_risk_other"
        | "export_to_sanctioned"
        | "sheffield_hallam_university_forced_labor_reports_entity_adjacent"
        | "former_soe"
        | "reputational_risk_organized_crime"
        | "reputational_risk_forced_labor"
        | "imports_bis_high_priority_items_critical_components"
        | "owner_of_sheffield_hallam_university_reports_forced_labor_entity"
        | "cpi_score"
        | "psa_sheffield_hallam_university_useful_resources"
        | "psa_wro_entity"
        | "psa_entity_licensed_with_fsb_rf"
        | "psa_forced_labor_xinjiang_uflpa"
        | "owner_of_wro_entity"
        | "forced_labor_xinjiang_origin_subtier_product_map"
        | "military_civil_fusion"
        | "forced_labor_xinjiang_registration"
        | "forced_labor_xinjiang_name"
        | "owned_by_aspi_forced_labor_entity"
        | "reputational_risk_terrorism"
        | "formerly_sanctioned"
        | "owned_by_section_1260h_entity"
        | "sheffield_hallam_university_forced_labor_reports_intermediary_entity"
        | "pep_adjacent"
        | "owner_of_forced_labor_xinjiang_entity"
        | "law_enforcement_action"
        | "owned_by_soe"
        | "forced_labor_wro_origin_subtier_product_map"
        | "entity_licensed_with_fsb_rf"
        | "psa_forced_labor_xinjiang_registration"
        | "forced_labor_sheffield_hallam_university_reports_origin_direct"
        | "psa_forced_labor_xinjiang_geospatial"
        | "wro_entity_adjacent"
        | "reputational_risk_cybercrime"
        | "psa_forced_labor_xinjiang_operations"
        | "owner_of_soe"
        | "forced_labor_aspi_origin_direct"
        | "exports_bis_high_priority_items"
        | "forced_labor_uflpa_origin_subtier"
        | "owner_of_regulatory_action_entity"
        | "psa_sheffield_hallam_university_intermediary_entity"
        | "forced_labor_xinjiang_uflpa"
        | "psa_state_owned"
        | "forced_labor_uflpa_origin_direct"
        | "owned_by_sanctioned_entity";
}
