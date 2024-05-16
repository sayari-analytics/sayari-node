/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const WeakIdentifierType: core.serialization.Schema<
    serializers.WeakIdentifierType.Raw,
    Sayari.WeakIdentifierType
> = core.serialization.enum_([
    "unknown",
    "mx_partial_rfc_person",
    "ru_oktmo",
    "ru_kpp",
    "ru_okpo",
    "unknown_passport",
    "rks_kta_number",
    "bra_partial_cpf",
    "ven_colegiado_number",
    "pan_folio",
    "kgz_okpo",
    "kgz_inn",
    "lbn_registration_number",
    "ita_ebr_reg_number",
    "ita_ebr_short_search_code",
    "chl_santiago_gazette_cve",
    "bmu_registration_number",
    "brazilian_oab",
    "irn_reg_number",
    "mx_fme",
    "ukr_edrpou",
    "ru_license_number",
    "maritime_call_sign",
    "prk_ship_reg_no",
    "cofi_code",
    "ru_nza",
    "arg_igj_number",
    "unknown_bra_case_number",
    "irq_provision_card",
    "mbl_hm_sn",
    "mbl_hm_hud_num",
    "mbl_hm_title_num",
    "mex_declaranet_acuse",
    "deu_registernummer",
    "unknown_national_id_num",
    "unknown_civil_reg_num",
    "unknown_residency_num",
    "unknown_folio_id_num",
    "unknown_commercial_register_id",
    "unknown_chamber_of_commerce_id",
    "unknown_license_num",
    "unknown_industrial_license_num",
    "cze_file_number",
    "mex_tm_app_no",
    "mex_tm_reg_no",
    "jordan_company_no",
    "cn_qcc_internal_id",
    "jor_sol_prop_institution_number",
    "usa_nc_corp_no",
    "usa_nm_license_id",
    "khm_tin_number",
    "usa_mo_entity_id",
    "usa_mo_corp_number",
    "mac_raem_case_number",
    "hnd_tegucigalpa_notary",
    "lbn_family_number",
    "tx_bexar_property_geo_id",
    "pak_cnic_family_no",
    "rou_commercial_register_id",
    "south_africa_partial_id_number",
    "prk_internal_trade_id",
    "chn_customs_registration_code",
    "aut_former_cr_no",
    "aut_natl_bank_no",
    "lva_person_id_masked",
    "lva_court_case_id",
    "chn_cninfo_legal_person_id",
    "rks_business_number",
    "rks_fiscal_number",
    "mdg_nif_number",
    "mdg_rcs_number",
    "vat",
    "usa_il_chicago_site_number",
    "usa_generic_ticker",
    "ven_rnc_number",
    "usa_imports_system_identity_id",
    "col_bill_of_lading",
    "col_secop_no",
    "pol_regon_number",
    "pol_nip_number",
    "bill_of_lading",
    "pan_ibc_ruc",
    "pak_old_company_code",
    "jpn_permit_no",
    "dma_corporate_registry_entity_num",
    "atg_corporate_registry_entity_num",
    "lca_corporate_registry_entity_num",
    "ven_manifiesto_number",
    "col_matricula_mercantil",
    "maritime_mobile_service_identity",
    "usa_former_fein",
    "usa_cbp_wro_id",
    "ccs_ship_class_number",
    "tur_partial_mersis_number",
    "tur_office_registration_number",
    "partial_ven_cedula",
    "rus_cbr_id",
    "geo_state_registration_number",
    "bih_mbs_number",
    "gbr_grant_info_number",
    "pry_shipment_number",
    "arg_import_export_id",
    "cri_op_no",
    "aus_state_reg_number",
    "hun_opten_id",
    "malformed mmr_prior_reg_no",
]);

export declare namespace WeakIdentifierType {
    type Raw =
        | "unknown"
        | "mx_partial_rfc_person"
        | "ru_oktmo"
        | "ru_kpp"
        | "ru_okpo"
        | "unknown_passport"
        | "rks_kta_number"
        | "bra_partial_cpf"
        | "ven_colegiado_number"
        | "pan_folio"
        | "kgz_okpo"
        | "kgz_inn"
        | "lbn_registration_number"
        | "ita_ebr_reg_number"
        | "ita_ebr_short_search_code"
        | "chl_santiago_gazette_cve"
        | "bmu_registration_number"
        | "brazilian_oab"
        | "irn_reg_number"
        | "mx_fme"
        | "ukr_edrpou"
        | "ru_license_number"
        | "maritime_call_sign"
        | "prk_ship_reg_no"
        | "cofi_code"
        | "ru_nza"
        | "arg_igj_number"
        | "unknown_bra_case_number"
        | "irq_provision_card"
        | "mbl_hm_sn"
        | "mbl_hm_hud_num"
        | "mbl_hm_title_num"
        | "mex_declaranet_acuse"
        | "deu_registernummer"
        | "unknown_national_id_num"
        | "unknown_civil_reg_num"
        | "unknown_residency_num"
        | "unknown_folio_id_num"
        | "unknown_commercial_register_id"
        | "unknown_chamber_of_commerce_id"
        | "unknown_license_num"
        | "unknown_industrial_license_num"
        | "cze_file_number"
        | "mex_tm_app_no"
        | "mex_tm_reg_no"
        | "jordan_company_no"
        | "cn_qcc_internal_id"
        | "jor_sol_prop_institution_number"
        | "usa_nc_corp_no"
        | "usa_nm_license_id"
        | "khm_tin_number"
        | "usa_mo_entity_id"
        | "usa_mo_corp_number"
        | "mac_raem_case_number"
        | "hnd_tegucigalpa_notary"
        | "lbn_family_number"
        | "tx_bexar_property_geo_id"
        | "pak_cnic_family_no"
        | "rou_commercial_register_id"
        | "south_africa_partial_id_number"
        | "prk_internal_trade_id"
        | "chn_customs_registration_code"
        | "aut_former_cr_no"
        | "aut_natl_bank_no"
        | "lva_person_id_masked"
        | "lva_court_case_id"
        | "chn_cninfo_legal_person_id"
        | "rks_business_number"
        | "rks_fiscal_number"
        | "mdg_nif_number"
        | "mdg_rcs_number"
        | "vat"
        | "usa_il_chicago_site_number"
        | "usa_generic_ticker"
        | "ven_rnc_number"
        | "usa_imports_system_identity_id"
        | "col_bill_of_lading"
        | "col_secop_no"
        | "pol_regon_number"
        | "pol_nip_number"
        | "bill_of_lading"
        | "pan_ibc_ruc"
        | "pak_old_company_code"
        | "jpn_permit_no"
        | "dma_corporate_registry_entity_num"
        | "atg_corporate_registry_entity_num"
        | "lca_corporate_registry_entity_num"
        | "ven_manifiesto_number"
        | "col_matricula_mercantil"
        | "maritime_mobile_service_identity"
        | "usa_former_fein"
        | "usa_cbp_wro_id"
        | "ccs_ship_class_number"
        | "tur_partial_mersis_number"
        | "tur_office_registration_number"
        | "partial_ven_cedula"
        | "rus_cbr_id"
        | "geo_state_registration_number"
        | "bih_mbs_number"
        | "gbr_grant_info_number"
        | "pry_shipment_number"
        | "arg_import_export_id"
        | "cri_op_no"
        | "aus_state_reg_number"
        | "hun_opten_id"
        | "malformed mmr_prior_reg_no";
}
