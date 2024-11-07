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
    "arg_igj_number",
    "arg_import_export_id",
    "atg_corporate_registry_entity_num",
    "aus_state_reg_number",
    "aut_former_cr_no",
    "aut_natl_bank_no",
    "bih_mbs_number",
    "bill_of_lading",
    "bmu_registration_number",
    "bra_partial_cpf",
    "brazilian_oab",
    "ccs_ship_class_number",
    "chl_santiago_gazette_cve",
    "chn_cninfo_legal_person_id",
    "chn_customs_registration_code",
    "cn_qcc_internal_id",
    "cofi_code",
    "col_bill_of_lading",
    "col_matricula_mercantil",
    "col_secop_no",
    "cri_op_no",
    "cze_file_number",
    "deu_registernummer",
    "dma_corporate_registry_entity_num",
    "gbr_grant_info_number",
    "geo_state_registration_number",
    "hnd_tegucigalpa_notary",
    "hun_opten_id",
    "ind_sebi",
    "irl_registration_no",
    "irn_reg_number",
    "irq_provision_card",
    "ita_ebr_reg_number",
    "ita_ebr_short_search_code",
    "jor_sol_prop_institution_number",
    "jordan_company_no",
    "jpn_permit_no",
    "kgz_inn",
    "kgz_okpo",
    "khm_tin_number",
    "lbn_family_number",
    "lbn_registration_number",
    "lca_corporate_registry_entity_num",
    "lva_court_case_id",
    "lva_person_id_masked",
    "mac_raem_case_number",
    "maritime_call_sign",
    "maritime_mobile_service_identity",
    "mbl_hm_hud_num",
    "mbl_hm_sn",
    "mbl_hm_title_num",
    "mdg_nif_number",
    "mdg_rcs_number",
    "mex_declaranet_acuse",
    "mex_tm_app_no",
    "mex_tm_reg_no",
    "mlr_reg_num",
    "mx_fme",
    "mx_partial_rfc_person",
    "pak_cnic_family_no",
    "pak_old_company_code",
    "pan_folio",
    "pan_ibc_ruc",
    "partial_ven_cedula",
    "pol_nip_number",
    "pol_regon_number",
    "prk_internal_trade_id",
    "prk_ship_reg_no",
    "pry_shipment_number",
    "rks_business_number",
    "rks_fiscal_number",
    "rks_kta_number",
    "rou_commercial_register_id",
    "ru_kpp",
    "ru_license_number",
    "ru_nza",
    "ru_okpo",
    "ru_oktmo",
    "rus_cbr_id",
    "south_africa_partial_id_number",
    "tur_office_registration_number",
    "tur_partial_mersis_number",
    "tx_bexar_property_geo_id",
    "ukr_edrpou",
    "unknown",
    "unknown_bra_case_number",
    "unknown_chamber_of_commerce_id",
    "unknown_civil_reg_num",
    "unknown_commercial_register_id",
    "unknown_folio_id_num",
    "unknown_industrial_license_num",
    "unknown_license_num",
    "unknown_national_id_num",
    "unknown_passport",
    "unknown_residency_num",
    "usa_cbp_wro_id",
    "usa_former_fein",
    "usa_generic_ticker",
    "usa_il_chicago_site_number",
    "usa_imports_system_identity_id",
    "usa_mn_filing_number",
    "usa_mo_corp_number",
    "usa_mo_entity_id",
    "usa_nc_corp_no",
    "usa_nm_license_id",
    "vat",
    "ven_colegiado_number",
    "ven_manifiesto_number",
    "ven_rnc_number",
    "malformed mmr_prior_reg_no",
]);

export declare namespace WeakIdentifierType {
    type Raw =
        | "arg_igj_number"
        | "arg_import_export_id"
        | "atg_corporate_registry_entity_num"
        | "aus_state_reg_number"
        | "aut_former_cr_no"
        | "aut_natl_bank_no"
        | "bih_mbs_number"
        | "bill_of_lading"
        | "bmu_registration_number"
        | "bra_partial_cpf"
        | "brazilian_oab"
        | "ccs_ship_class_number"
        | "chl_santiago_gazette_cve"
        | "chn_cninfo_legal_person_id"
        | "chn_customs_registration_code"
        | "cn_qcc_internal_id"
        | "cofi_code"
        | "col_bill_of_lading"
        | "col_matricula_mercantil"
        | "col_secop_no"
        | "cri_op_no"
        | "cze_file_number"
        | "deu_registernummer"
        | "dma_corporate_registry_entity_num"
        | "gbr_grant_info_number"
        | "geo_state_registration_number"
        | "hnd_tegucigalpa_notary"
        | "hun_opten_id"
        | "ind_sebi"
        | "irl_registration_no"
        | "irn_reg_number"
        | "irq_provision_card"
        | "ita_ebr_reg_number"
        | "ita_ebr_short_search_code"
        | "jor_sol_prop_institution_number"
        | "jordan_company_no"
        | "jpn_permit_no"
        | "kgz_inn"
        | "kgz_okpo"
        | "khm_tin_number"
        | "lbn_family_number"
        | "lbn_registration_number"
        | "lca_corporate_registry_entity_num"
        | "lva_court_case_id"
        | "lva_person_id_masked"
        | "mac_raem_case_number"
        | "maritime_call_sign"
        | "maritime_mobile_service_identity"
        | "mbl_hm_hud_num"
        | "mbl_hm_sn"
        | "mbl_hm_title_num"
        | "mdg_nif_number"
        | "mdg_rcs_number"
        | "mex_declaranet_acuse"
        | "mex_tm_app_no"
        | "mex_tm_reg_no"
        | "mlr_reg_num"
        | "mx_fme"
        | "mx_partial_rfc_person"
        | "pak_cnic_family_no"
        | "pak_old_company_code"
        | "pan_folio"
        | "pan_ibc_ruc"
        | "partial_ven_cedula"
        | "pol_nip_number"
        | "pol_regon_number"
        | "prk_internal_trade_id"
        | "prk_ship_reg_no"
        | "pry_shipment_number"
        | "rks_business_number"
        | "rks_fiscal_number"
        | "rks_kta_number"
        | "rou_commercial_register_id"
        | "ru_kpp"
        | "ru_license_number"
        | "ru_nza"
        | "ru_okpo"
        | "ru_oktmo"
        | "rus_cbr_id"
        | "south_africa_partial_id_number"
        | "tur_office_registration_number"
        | "tur_partial_mersis_number"
        | "tx_bexar_property_geo_id"
        | "ukr_edrpou"
        | "unknown"
        | "unknown_bra_case_number"
        | "unknown_chamber_of_commerce_id"
        | "unknown_civil_reg_num"
        | "unknown_commercial_register_id"
        | "unknown_folio_id_num"
        | "unknown_industrial_license_num"
        | "unknown_license_num"
        | "unknown_national_id_num"
        | "unknown_passport"
        | "unknown_residency_num"
        | "usa_cbp_wro_id"
        | "usa_former_fein"
        | "usa_generic_ticker"
        | "usa_il_chicago_site_number"
        | "usa_imports_system_identity_id"
        | "usa_mn_filing_number"
        | "usa_mo_corp_number"
        | "usa_mo_entity_id"
        | "usa_nc_corp_no"
        | "usa_nm_license_id"
        | "vat"
        | "ven_colegiado_number"
        | "ven_manifiesto_number"
        | "ven_rnc_number"
        | "malformed mmr_prior_reg_no";
}
