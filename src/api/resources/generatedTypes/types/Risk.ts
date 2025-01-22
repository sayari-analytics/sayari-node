/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type Risk =
    | "aspi_uyghur_forced_labor_report_entity"
    | "aspi_uyghur_forced_labor_report_entity_adjacent"
    | "basel_aml"
    | "bis_addresses_high_diversion_risk"
    | "bis_boycott_requester_list"
    | "cmic_entity"
    | "cmic_entity_50_percent_rule"
    | "controlled_by_aus_sanctioned"
    | "controlled_by_eu_sanctioned"
    | "controlled_by_jpn_sanctioned"
    | "controlled_by_ofac_sdn"
    | "controlled_by_uk_sanctioned"
    | "controlled_by_ukr_sanctioned"
    | "controlled_by_un_sanctioned"
    | "cpi_score"
    | "entity_licensed_with_fsb_rf"
    | "eu_50_percent_rule"
    | "eu_high_risk_third"
    | "eu_minority_ownership"
    | "eu_sanctioned"
    | "export_controls"
    | "export_controls_adjacent"
    | "export_controls_bis_entity"
    | "export_controls_bis_entity_50_percent_rule"
    | "export_controls_bis_meu"
    | "export_controls_bis_meu_50_percent_rule"
    | "export_controls_section_1260h"
    | "export_controls_section_1260h_50_percent_rule"
    | "export_controls_unverified_list"
    | "export_controls_unverified_list_50_percent_rule"
    | "export_to_sanctioned"
    | "export_to_soe"
    | "exports_bis_high_priority_items"
    | "exports_bis_high_priority_items_critical_components"
    | "exports_eudr_shipment_cattle"
    | "exports_eudr_shipment_cocoa"
    | "exports_eudr_shipment_coffee"
    | "exports_eudr_shipment_palm_oil"
    | "exports_eudr_shipment_rubber"
    | "exports_eudr_shipment_soya"
    | "exports_eudr_shipment_wood"
    | "exports_ilab_child_labor"
    | "exports_ilab_forced_labor"
    | "exports_russian_coal"
    | "exports_russian_gold"
    | "exports_russian_important_good"
    | "exports_russian_oil"
    | "exports_to_bis_addresses_high_diversion_risk"
    | "exports_to_entity_licensed_with_fsb_rf"
    | "forced_labor_aspi_origin_direct"
    | "forced_labor_aspi_origin_subtier"
    | "forced_labor_aspi_origin_subtier_product_blueprint"
    | "forced_labor_china_keywords"
    | "forced_labor_sheffield_hallam_university_reports_origin_direct"
    | "forced_labor_sheffield_hallam_university_reports_origin_subtier"
    | "forced_labor_sheffield_hallam_university_reports_origin_subtier_product_blueprint"
    | "forced_labor_uflpa_origin_direct"
    | "forced_labor_uflpa_origin_subtier"
    | "forced_labor_uflpa_origin_subtier_product_blueprint"
    | "forced_labor_wro_origin_direct"
    | "forced_labor_wro_origin_subtier"
    | "forced_labor_wro_origin_subtier_product_blueprint"
    | "forced_labor_xinjiang_contractors"
    | "forced_labor_xinjiang_cotton_entity"
    | "forced_labor_xinjiang_geospatial"
    | "forced_labor_xinjiang_name"
    | "forced_labor_xinjiang_operations"
    | "forced_labor_xinjiang_origin_direct"
    | "forced_labor_xinjiang_origin_subtier"
    | "forced_labor_xinjiang_origin_subtier_product_blueprint"
    | "forced_labor_xinjiang_registration"
    | "forced_labor_xinjiang_uflpa"
    | "forced_labor_xinjiang_uflpa_adjacent"
    | "former_soe"
    | "former_wro_entity"
    | "formerly_sanctioned"
    | "imports_bis_high_priority_items"
    | "imports_bis_high_priority_items_critical_components"
    | "imports_eudr_shipment_cattle"
    | "imports_eudr_shipment_cocoa"
    | "imports_eudr_shipment_coffee"
    | "imports_eudr_shipment_palm_oil"
    | "imports_eudr_shipment_rubber"
    | "imports_eudr_shipment_soya"
    | "imports_eudr_shipment_wood"
    | "imports_from_bis_addresses_high_diversion_risk"
    | "imports_ilab_child_labor"
    | "imports_ilab_forced_labor"
    | "imports_ndaa_889_telecom_equipment"
    | "imports_russian_coal"
    | "imports_russian_gold"
    | "imports_russian_important_good"
    | "imports_russian_oil"
    | "law_enforcement_action"
    | "meu_list_contractors"
    | "military_civil_fusion"
    | "military_civil_fusion_50_percent_rule"
    | "ndaa_889_covered_entities"
    | "ofac_50_percent_rule"
    | "ofac_minority_ownership"
    | "ofac_sdn"
    | "owned_by_aspi_forced_labor_entity"
    | "owned_by_bis_meu_entity"
    | "owned_by_cmic_entity"
    | "owned_by_entity_in_export_controls"
    | "owned_by_forced_labor_xinjiang_uflpa"
    | "owned_by_military_civil_fusion"
    | "owned_by_sanctioned_entity"
    | "owned_by_section_1260h_entity"
    | "owned_by_sheffield_hallam_university_reports_forced_labor_entity"
    | "owned_by_soe"
    | "owned_by_wro_entity"
    | "owned_by_xinjiang_entity"
    | "owner_of_aspi_forced_labor_entity"
    | "owner_of_export_controls_entity"
    | "owner_of_forced_labor_xinjiang_entity"
    | "owner_of_forced_labor_xinjiang_uflpa"
    | "owner_of_regulatory_action_entity"
    | "owner_of_sanctioned_entity"
    | "owner_of_sheffield_hallam_university_reports_forced_labor_entity"
    | "owner_of_soe"
    | "owner_of_wro_entity"
    | "pep"
    | "pep_adjacent"
    | "psa_bis_boycott_requester_list"
    | "psa_entity_licensed_with_fsb_rf"
    | "psa_export_controls"
    | "psa_forced_labor_aspi_uyghur"
    | "psa_forced_labor_xinjiang_cotton_entity"
    | "psa_forced_labor_xinjiang_geospatial"
    | "psa_forced_labor_xinjiang_name"
    | "psa_forced_labor_xinjiang_operations"
    | "psa_forced_labor_xinjiang_registration"
    | "psa_forced_labor_xinjiang_uflpa"
    | "psa_military_civil_fusion"
    | "psa_pep"
    | "psa_regulatory_action"
    | "psa_sanctioned"
    | "psa_sheffield_hallam_university_forced_labor_entity"
    | "psa_sheffield_hallam_university_intermediary_entity"
    | "psa_sheffield_hallam_university_useful_resources"
    | "psa_state_owned"
    | "psa_state_owned_ven"
    | "psa_wro_entity"
    | "regulatory_action"
    | "reputational_risk_bribery_and_corruption"
    | "reputational_risk_cybercrime"
    | "reputational_risk_financial_crime"
    | "reputational_risk_forced_labor"
    | "reputational_risk_organized_crime"
    | "reputational_risk_other"
    | "reputational_risk_terrorism"
    | "sanctioned"
    | "sanctioned_adjacent"
    | "sheffield_hallam_university_forced_labor_entity"
    | "sheffield_hallam_university_forced_labor_reports_entity_adjacent"
    | "sheffield_hallam_university_forced_labor_reports_intermediary_entity"
    | "sheffield_hallam_university_useful_resources"
    | "soe_adjacent"
    | "state_owned"
    | "state_owned_ven"
    | "subsidiary_of_ndaa_889_covered_entities"
    | "uk_50_percent_rule"
    | "uk_minority_ownership"
    | "uk_sanctioned"
    | "ven_soe_50_percent"
    | "wro_entity"
    | "wro_entity_adjacent";
export const Risk = {
    AspiUyghurForcedLaborReportEntity: "aspi_uyghur_forced_labor_report_entity",
    AspiUyghurForcedLaborReportEntityAdjacent: "aspi_uyghur_forced_labor_report_entity_adjacent",
    BaselAml: "basel_aml",
    BisAddressesHighDiversionRisk: "bis_addresses_high_diversion_risk",
    BisBoycottRequesterList: "bis_boycott_requester_list",
    CmicEntity: "cmic_entity",
    CmicEntity50PercentRule: "cmic_entity_50_percent_rule",
    ControlledByAusSanctioned: "controlled_by_aus_sanctioned",
    ControlledByEuSanctioned: "controlled_by_eu_sanctioned",
    ControlledByJpnSanctioned: "controlled_by_jpn_sanctioned",
    ControlledByOfacSdn: "controlled_by_ofac_sdn",
    ControlledByUkSanctioned: "controlled_by_uk_sanctioned",
    ControlledByUkrSanctioned: "controlled_by_ukr_sanctioned",
    ControlledByUnSanctioned: "controlled_by_un_sanctioned",
    CpiScore: "cpi_score",
    EntityLicensedWithFsbRf: "entity_licensed_with_fsb_rf",
    Eu50PercentRule: "eu_50_percent_rule",
    EuHighRiskThird: "eu_high_risk_third",
    EuMinorityOwnership: "eu_minority_ownership",
    EuSanctioned: "eu_sanctioned",
    ExportControls: "export_controls",
    ExportControlsAdjacent: "export_controls_adjacent",
    ExportControlsBisEntity: "export_controls_bis_entity",
    ExportControlsBisEntity50PercentRule: "export_controls_bis_entity_50_percent_rule",
    ExportControlsBisMeu: "export_controls_bis_meu",
    ExportControlsBisMeu50PercentRule: "export_controls_bis_meu_50_percent_rule",
    ExportControlsSection1260H: "export_controls_section_1260h",
    ExportControlsSection1260H50PercentRule: "export_controls_section_1260h_50_percent_rule",
    ExportControlsUnverifiedList: "export_controls_unverified_list",
    ExportControlsUnverifiedList50PercentRule: "export_controls_unverified_list_50_percent_rule",
    ExportToSanctioned: "export_to_sanctioned",
    ExportToSoe: "export_to_soe",
    ExportsBisHighPriorityItems: "exports_bis_high_priority_items",
    ExportsBisHighPriorityItemsCriticalComponents: "exports_bis_high_priority_items_critical_components",
    ExportsEudrShipmentCattle: "exports_eudr_shipment_cattle",
    ExportsEudrShipmentCocoa: "exports_eudr_shipment_cocoa",
    ExportsEudrShipmentCoffee: "exports_eudr_shipment_coffee",
    ExportsEudrShipmentPalmOil: "exports_eudr_shipment_palm_oil",
    ExportsEudrShipmentRubber: "exports_eudr_shipment_rubber",
    ExportsEudrShipmentSoya: "exports_eudr_shipment_soya",
    ExportsEudrShipmentWood: "exports_eudr_shipment_wood",
    ExportsIlabChildLabor: "exports_ilab_child_labor",
    ExportsIlabForcedLabor: "exports_ilab_forced_labor",
    ExportsRussianCoal: "exports_russian_coal",
    ExportsRussianGold: "exports_russian_gold",
    ExportsRussianImportantGood: "exports_russian_important_good",
    ExportsRussianOil: "exports_russian_oil",
    ExportsToBisAddressesHighDiversionRisk: "exports_to_bis_addresses_high_diversion_risk",
    ExportsToEntityLicensedWithFsbRf: "exports_to_entity_licensed_with_fsb_rf",
    ForcedLaborAspiOriginDirect: "forced_labor_aspi_origin_direct",
    ForcedLaborAspiOriginSubtier: "forced_labor_aspi_origin_subtier",
    ForcedLaborAspiOriginSubtierProductBlueprint: "forced_labor_aspi_origin_subtier_product_blueprint",
    ForcedLaborChinaKeywords: "forced_labor_china_keywords",
    ForcedLaborSheffieldHallamUniversityReportsOriginDirect:
        "forced_labor_sheffield_hallam_university_reports_origin_direct",
    ForcedLaborSheffieldHallamUniversityReportsOriginSubtier:
        "forced_labor_sheffield_hallam_university_reports_origin_subtier",
    ForcedLaborSheffieldHallamUniversityReportsOriginSubtierProductBlueprint:
        "forced_labor_sheffield_hallam_university_reports_origin_subtier_product_blueprint",
    ForcedLaborUflpaOriginDirect: "forced_labor_uflpa_origin_direct",
    ForcedLaborUflpaOriginSubtier: "forced_labor_uflpa_origin_subtier",
    ForcedLaborUflpaOriginSubtierProductBlueprint: "forced_labor_uflpa_origin_subtier_product_blueprint",
    ForcedLaborWroOriginDirect: "forced_labor_wro_origin_direct",
    ForcedLaborWroOriginSubtier: "forced_labor_wro_origin_subtier",
    ForcedLaborWroOriginSubtierProductBlueprint: "forced_labor_wro_origin_subtier_product_blueprint",
    ForcedLaborXinjiangContractors: "forced_labor_xinjiang_contractors",
    ForcedLaborXinjiangCottonEntity: "forced_labor_xinjiang_cotton_entity",
    ForcedLaborXinjiangGeospatial: "forced_labor_xinjiang_geospatial",
    ForcedLaborXinjiangName: "forced_labor_xinjiang_name",
    ForcedLaborXinjiangOperations: "forced_labor_xinjiang_operations",
    ForcedLaborXinjiangOriginDirect: "forced_labor_xinjiang_origin_direct",
    ForcedLaborXinjiangOriginSubtier: "forced_labor_xinjiang_origin_subtier",
    ForcedLaborXinjiangOriginSubtierProductBlueprint: "forced_labor_xinjiang_origin_subtier_product_blueprint",
    ForcedLaborXinjiangRegistration: "forced_labor_xinjiang_registration",
    ForcedLaborXinjiangUflpa: "forced_labor_xinjiang_uflpa",
    ForcedLaborXinjiangUflpaAdjacent: "forced_labor_xinjiang_uflpa_adjacent",
    FormerSoe: "former_soe",
    FormerWroEntity: "former_wro_entity",
    FormerlySanctioned: "formerly_sanctioned",
    ImportsBisHighPriorityItems: "imports_bis_high_priority_items",
    ImportsBisHighPriorityItemsCriticalComponents: "imports_bis_high_priority_items_critical_components",
    ImportsEudrShipmentCattle: "imports_eudr_shipment_cattle",
    ImportsEudrShipmentCocoa: "imports_eudr_shipment_cocoa",
    ImportsEudrShipmentCoffee: "imports_eudr_shipment_coffee",
    ImportsEudrShipmentPalmOil: "imports_eudr_shipment_palm_oil",
    ImportsEudrShipmentRubber: "imports_eudr_shipment_rubber",
    ImportsEudrShipmentSoya: "imports_eudr_shipment_soya",
    ImportsEudrShipmentWood: "imports_eudr_shipment_wood",
    ImportsFromBisAddressesHighDiversionRisk: "imports_from_bis_addresses_high_diversion_risk",
    ImportsIlabChildLabor: "imports_ilab_child_labor",
    ImportsIlabForcedLabor: "imports_ilab_forced_labor",
    ImportsNdaa889TelecomEquipment: "imports_ndaa_889_telecom_equipment",
    ImportsRussianCoal: "imports_russian_coal",
    ImportsRussianGold: "imports_russian_gold",
    ImportsRussianImportantGood: "imports_russian_important_good",
    ImportsRussianOil: "imports_russian_oil",
    LawEnforcementAction: "law_enforcement_action",
    MeuListContractors: "meu_list_contractors",
    MilitaryCivilFusion: "military_civil_fusion",
    MilitaryCivilFusion50PercentRule: "military_civil_fusion_50_percent_rule",
    Ndaa889CoveredEntities: "ndaa_889_covered_entities",
    Ofac50PercentRule: "ofac_50_percent_rule",
    OfacMinorityOwnership: "ofac_minority_ownership",
    OfacSdn: "ofac_sdn",
    OwnedByAspiForcedLaborEntity: "owned_by_aspi_forced_labor_entity",
    OwnedByBisMeuEntity: "owned_by_bis_meu_entity",
    OwnedByCmicEntity: "owned_by_cmic_entity",
    OwnedByEntityInExportControls: "owned_by_entity_in_export_controls",
    OwnedByForcedLaborXinjiangUflpa: "owned_by_forced_labor_xinjiang_uflpa",
    OwnedByMilitaryCivilFusion: "owned_by_military_civil_fusion",
    OwnedBySanctionedEntity: "owned_by_sanctioned_entity",
    OwnedBySection1260HEntity: "owned_by_section_1260h_entity",
    OwnedBySheffieldHallamUniversityReportsForcedLaborEntity:
        "owned_by_sheffield_hallam_university_reports_forced_labor_entity",
    OwnedBySoe: "owned_by_soe",
    OwnedByWroEntity: "owned_by_wro_entity",
    OwnedByXinjiangEntity: "owned_by_xinjiang_entity",
    OwnerOfAspiForcedLaborEntity: "owner_of_aspi_forced_labor_entity",
    OwnerOfExportControlsEntity: "owner_of_export_controls_entity",
    OwnerOfForcedLaborXinjiangEntity: "owner_of_forced_labor_xinjiang_entity",
    OwnerOfForcedLaborXinjiangUflpa: "owner_of_forced_labor_xinjiang_uflpa",
    OwnerOfRegulatoryActionEntity: "owner_of_regulatory_action_entity",
    OwnerOfSanctionedEntity: "owner_of_sanctioned_entity",
    OwnerOfSheffieldHallamUniversityReportsForcedLaborEntity:
        "owner_of_sheffield_hallam_university_reports_forced_labor_entity",
    OwnerOfSoe: "owner_of_soe",
    OwnerOfWroEntity: "owner_of_wro_entity",
    Pep: "pep",
    PepAdjacent: "pep_adjacent",
    PsaBisBoycottRequesterList: "psa_bis_boycott_requester_list",
    PsaEntityLicensedWithFsbRf: "psa_entity_licensed_with_fsb_rf",
    PsaExportControls: "psa_export_controls",
    PsaForcedLaborAspiUyghur: "psa_forced_labor_aspi_uyghur",
    PsaForcedLaborXinjiangCottonEntity: "psa_forced_labor_xinjiang_cotton_entity",
    PsaForcedLaborXinjiangGeospatial: "psa_forced_labor_xinjiang_geospatial",
    PsaForcedLaborXinjiangName: "psa_forced_labor_xinjiang_name",
    PsaForcedLaborXinjiangOperations: "psa_forced_labor_xinjiang_operations",
    PsaForcedLaborXinjiangRegistration: "psa_forced_labor_xinjiang_registration",
    PsaForcedLaborXinjiangUflpa: "psa_forced_labor_xinjiang_uflpa",
    PsaMilitaryCivilFusion: "psa_military_civil_fusion",
    PsaPep: "psa_pep",
    PsaRegulatoryAction: "psa_regulatory_action",
    PsaSanctioned: "psa_sanctioned",
    PsaSheffieldHallamUniversityForcedLaborEntity: "psa_sheffield_hallam_university_forced_labor_entity",
    PsaSheffieldHallamUniversityIntermediaryEntity: "psa_sheffield_hallam_university_intermediary_entity",
    PsaSheffieldHallamUniversityUsefulResources: "psa_sheffield_hallam_university_useful_resources",
    PsaStateOwned: "psa_state_owned",
    PsaStateOwnedVen: "psa_state_owned_ven",
    PsaWroEntity: "psa_wro_entity",
    RegulatoryAction: "regulatory_action",
    ReputationalRiskBriberyAndCorruption: "reputational_risk_bribery_and_corruption",
    ReputationalRiskCybercrime: "reputational_risk_cybercrime",
    ReputationalRiskFinancialCrime: "reputational_risk_financial_crime",
    ReputationalRiskForcedLabor: "reputational_risk_forced_labor",
    ReputationalRiskOrganizedCrime: "reputational_risk_organized_crime",
    ReputationalRiskOther: "reputational_risk_other",
    ReputationalRiskTerrorism: "reputational_risk_terrorism",
    Sanctioned: "sanctioned",
    SanctionedAdjacent: "sanctioned_adjacent",
    SheffieldHallamUniversityForcedLaborEntity: "sheffield_hallam_university_forced_labor_entity",
    SheffieldHallamUniversityForcedLaborReportsEntityAdjacent:
        "sheffield_hallam_university_forced_labor_reports_entity_adjacent",
    SheffieldHallamUniversityForcedLaborReportsIntermediaryEntity:
        "sheffield_hallam_university_forced_labor_reports_intermediary_entity",
    SheffieldHallamUniversityUsefulResources: "sheffield_hallam_university_useful_resources",
    SoeAdjacent: "soe_adjacent",
    StateOwned: "state_owned",
    StateOwnedVen: "state_owned_ven",
    SubsidiaryOfNdaa889CoveredEntities: "subsidiary_of_ndaa_889_covered_entities",
    Uk50PercentRule: "uk_50_percent_rule",
    UkMinorityOwnership: "uk_minority_ownership",
    UkSanctioned: "uk_sanctioned",
    VenSoe50Percent: "ven_soe_50_percent",
    WroEntity: "wro_entity",
    WroEntityAdjacent: "wro_entity_adjacent",
} as const;
