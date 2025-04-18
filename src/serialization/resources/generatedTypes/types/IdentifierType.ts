/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";

export const IdentifierType: core.serialization.Schema<serializers.IdentifierType.Raw, Sayari.IdentifierType> =
    core.serialization.enum_([
        "aer_free_zone_license",
        "aer_free_zone_reg_no",
        "aer_ner_number",
        "afg_business_license",
        "afg_passport",
        "afg_trade_internal_shipment_id",
        "afghan_tin_number",
        "ago_matricula_number",
        "ago_nif_number",
        "alb_registration_number",
        "alb_tax_id",
        "alberta_corporation_number",
        "alei",
        "are_difc_reg_no",
        "are_dubai_land_case_no",
        "are_reg_auth_number",
        "arg_cdi_number",
        "arg_cuil_number",
        "arg_cuit_number",
        "arg_dni_number",
        "arg_igj_number",
        "arg_import_export_id",
        "arg_lib_civica_number",
        "arg_lib_enrolamiento_number",
        "arg_partial_cuit",
        "arm_enterprise_code",
        "arm_passport_number",
        "arm_registration_no",
        "arm_vat_no",
        "aruba_chamber_of_commerce_id",
        "atg_business_registry_internal_id",
        "aus_adv_number",
        "aus_afs_licence_number",
        "aus_afs_rep_number",
        "aus_business_number",
        "aus_company_number",
        "aus_consolidated_sanctions_reference",
        "aus_credit_licence_number",
        "aus_credit_rep_number",
        "aus_passport",
        "aut_firmenbuch_no",
        "aze_tin_number",
        "bd_bin",
        "bel_enterprise_number",
        "bel_establishment_number",
        "bel_fsma_name_hash",
        "bel_national_register_no",
        "bfa_entity_id",
        "bfa_rccm_number",
        "bgd_passport",
        "bgr_egn_hashed",
        "bgr_uic",
        "bh_cr_number",
        "bh_cr_number_and_branch",
        "bhs_tin",
        "bih_customs_number",
        "bih_jib_number",
        "bih_mbs_number",
        "bill_of_lading",
        "bitcoin_address",
        "blr_registration_number",
        "blz_bccar_reg_no",
        "bmu_registrar_of_companies_number",
        "bmu_registration_number",
        "bol_matricula",
        "bol_old_matricula",
        "bra_case_number",
        "bra_cnpj",
        "bra_codigo_da_unidade_organizacional",
        "bra_cpf_number",
        "bra_foreigner_reg_num",
        "bra_rg_number",
        "bra_servidor_portal",
        "bra_shipment_number",
        "bwa_uin_reg_number",
        "bze_bicar_reg_no",
        "ca_corporate_id_num",
        "ca_lp_file_num",
        "caf_passport",
        "cage",
        "can_bc_company_registration_id",
        "can_bc_extraprovincial_registration_id",
        "can_bc_registration_number",
        "can_business_number",
        "can_corporation_number",
        "can_cra_program_account_number",
        "can_data_axle_hash",
        "can_ipo_trademark_application_no",
        "can_mb_registry",
        "can_new_brunswick_reference_number",
        "can_nl_corporate_registry",
        "can_nrd",
        "can_nrd_individual_id",
        "can_ns_corporate_registry",
        "can_pe_registration_number",
        "can_qc_sap_registry_ref_num",
        "can_techsalerator_id",
        "can_tm_registration_no",
        "ccs_registration",
        "che_ch_id_number",
        "che_seco_sanction_number",
        "che_uid_number",
        "china_vessel_inspection_registration",
        "china_vessel_registration",
        "chl_cedula_number",
        "chl_import_export_control_id",
        "chl_import_manifest_number",
        "chl_importer_exporter_id",
        "chn_cninfo_internal_shareholder_id",
        "chn_cnipa_tm",
        "chn_csrc_no",
        "chn_customs_registration_code",
        "chn_customs_registration_no",
        "chn_passport",
        "chn_resident_id_number",
        "chn_shanghai_stock_exchange_company_code",
        "chn_shenzen_sec_code",
        "cm_nui_tax_reg_num",
        "cn_hk_br_number",
        "cn_hk_cr_number",
        "cn_hk_filing_number",
        "cn_hurd_internal_company_id",
        "cn_importexport_code",
        "cn_organization_code",
        "cn_qichacha_internal_id",
        "cn_registration_number",
        "cn_tax_identification_number",
        "cn_tianyancha_company_id",
        "cn_tianyancha_human_id",
        "cn_unified_social_credit_code",
        "cod_passport",
        "cod_rccm_number",
        "cod_rccm_ohada_number",
        "cok_corp_reg_corpid",
        "cok_corp_reg_corpofficerid",
        "cok_corp_reg_number",
        "col_cedula_no",
        "col_dian_numero_formulario",
        "col_nit_no",
        "col_nur",
        "col_secop_no",
        "cri_cedula_citizen_person",
        "cri_cedula_foreign_person",
        "cri_cedula_juridica",
        "cri_cedula_number",
        "cri_exp",
        "cri_imp",
        "cri_op_no",
        "cub_cod",
        "cuw_reg_number",
        "cym_co_no",
        "cyp_id_card",
        "cyp_infocredit_entity_id",
        "cyp_passport",
        "cyp_reg_no",
        "cyp_ssn",
        "cze_file_number",
        "cze_ico_number",
        "dart_cik",
        "dash_address",
        "deu_bafin_id",
        "deu_registernummer",
        "dji_rcs_number",
        "dma_business_registry_internal_id",
        "dnk_cvr",
        "dnk_entity",
        "dnk_production_unit_no",
        "dom_onapi_num",
        "dom_rnc",
        "duns_number",
        "ecu_branch_id",
        "ecu_cedula_number",
        "ecu_company_id",
        "ecu_exporter_id",
        "ecu_importer_id",
        "ecu_ruc_number",
        "ecu_shipment_ref_no",
        "egy_id",
        "egy_passport",
        "esp_be_code",
        "esp_borme_reg_id",
        "esp_internal_employee_number",
        "esp_nif",
        "esp_tr_number",
        "est_business_reg_code",
        "est_personal_id",
        "ethereum_address",
        "eu_fsd_id",
        "eu_sanction_rn",
        "euid",
        "fin_business_id",
        "fl_prop_folio",
        "fl_prop_folio_dade",
        "fra_asset_freeze_id",
        "fra_rna",
        "fra_siren",
        "fra_siret",
        "fra_vat_number",
        "fro_reg_num",
        "gbr_charity_no",
        "gbr_company_number",
        "gbr_disqualification_case_num",
        "gbr_enforcement_action_num",
        "gbr_go_no",
        "gbr_hm_treasury_sanction_group_id",
        "gbr_ipo_trademark_reg_no",
        "gbr_trustee_id",
        "gbr_uk_sanctions_id",
        "gbr_vat_no",
        "geo_identification_code",
        "geo_legal_code",
        "geo_personal_number",
        "geo_state_registration_number",
        "ggy_corporate_reg_number",
        "ggy_trademark_no",
        "ggy_trademark_submission_ref",
        "gib_corp_reg_number",
        "global_trade_internal_shipment_id",
        "grc_afm_number",
        "grc_gemi_number",
        "grc_vat_number",
        "gtm_cui_number",
        "gtm_nit_number",
        "hkg_stock_code",
        "hnd_coc_company_registration_number",
        "hnd_tegucigalpa_matricula",
        "hong_kong_case_number",
        "hr_mbs",
        "hr_oib",
        "hun_company_register_number",
        "hun_krs_number",
        "hun_person_tax_id",
        "hun_tax_number",
        "iban",
        "icij_offshore_internal_id",
        "icij_offshore_node_id",
        "idn_nik_id",
        "idn_passport",
        "idn_tax_id",
        "idn_trade_internal_shipment_id",
        "idn_transaction_number",
        "idn_ubo_owner_id",
        "ihs_owner_code",
        "imn_company_number",
        "imo_no",
        "ind_charity_registration_number",
        "ind_company_registration_number",
        "ind_coopsoc_registration_number",
        "ind_corporate_id_number",
        "ind_darpan_uid",
        "ind_director_id_number",
        "ind_fcrn",
        "ind_ifsc",
        "ind_llpin",
        "ind_nse_ticker_code",
        "ind_passport",
        "ind_permanent_account_number",
        "ind_society_registration_number",
        "ind_tin",
        "ind_trademark_submission_ref",
        "int_maritime_org_id",
        "internal_md5",
        "iraqi_stock_exchange_symbol",
        "irl_rcn",
        "irl_registration_no",
        "irn_coc_internal_id",
        "irn_coc_internal_id_cardno",
        "irn_national_id",
        "irn_national_number",
        "irn_passport",
        "irq_passport",
        "irq_voter_id",
        "isin",
        "isl_tin_number",
        "isl_vat_num",
        "isr_association_number",
        "isr_company_number",
        "isr_national_id",
        "isr_pbc_number",
        "ita_fiscal_code",
        "ita_rea_number",
        "ita_vat_number",
        "jam_company_id",
        "jey_corporate_reg_number",
        "jey_trademark_reg_no",
        "jo_institution_number",
        "jo_internal_id",
        "jo_national_institution_number",
        "jor_id_no",
        "jor_voter_card_no",
        "jordan_company_no",
        "jpn_corporate_no",
        "jpn_edinet_code",
        "kaz_bin",
        "kaz_identifier",
        "kaz_okpo_num",
        "kaz_state_reg_num",
        "kaz_tin",
        "ken_personal_id",
        "kgz_reg_number",
        "khm_tin_number",
        "kor_business_tin",
        "kor_corporate_registration_number",
        "krx_ticker_code",
        "kwt_passport",
        "lao_enterprise_number",
        "lbn_national_id",
        "lby_passport",
        "lca_business_registry_internal_id",
        "lei",
        "lie_public_reg_no",
        "litecoin_address",
        "lloyds_internal_entity_id",
        "lloyds_internal_vessel_id",
        "lr_tin",
        "lso_corpreg_id",
        "ltu_company_registration_code",
        "lux_rcs_number",
        "lva_insolvency_proceeding_id",
        "lva_personal_code",
        "lva_reg_number",
        "mac_raem_case_url_id",
        "mac_registration_no",
        "malta_accountancy_registration_id",
        "malta_company_number",
        "malta_national_id",
        "mar_passport",
        "mato_grosso_legal_id",
        "mco_nis",
        "mco_rci_number",
        "mda_idno_number",
        "mdg_nif_number",
        "mdg_rcs_number",
        "mdg_stat_number",
        "mdv_registration_number",
        "mex_cluni",
        "mex_denue_clee",
        "mex_open_contracts_internal_id",
        "mex_rnie",
        "mex_shipment_number",
        "mex_tm_no",
        "mex_yucatan_folio",
        "mkd_archive_number",
        "mkd_embs_branch_number",
        "mkd_embs_number",
        "mmr_corp_id",
        "mmr_officer_id",
        "mmr_personal_id_no",
        "mmr_prior_reg_no",
        "mmr_reg_no",
        "mne_pib",
        "mne_property_uid",
        "mne_reg_number",
        "mng_reg_number",
        "montana_sos_internal_entity_id",
        "moz_dire_no",
        "moz_id_number",
        "moz_nuel_no",
        "moz_nuit_co",
        "moz_nuit_person",
        "moz_passport",
        "moz_voter_no",
        "mus_file_no",
        "mus_reg_id",
        "mw_tpin_tax_reg_num",
        "mx_curp",
        "mx_office_fme",
        "mx_rfc_company",
        "mx_rfc_person",
        "mys_company_reg_no",
        "mys_id_card_no",
        "mys_moha_list_number",
        "mys_passport",
        "ng_check_internal_id",
        "nga_crp_reg_internal_id",
        "nga_drivers",
        "nga_nin",
        "nga_registration_number",
        "nga_registration_sn",
        "nga_tax_id",
        "nic_numero_unico",
        "nic_ruc_number",
        "nic_trade_internal_shipment_id",
        "ninea_no",
        "nld_kvk_branch_number",
        "nld_kvk_number",
        "nor_org_no",
        "npl_co_reg_no",
        "nyc_bbl",
        "nyc_crfn",
        "nzl_co_no",
        "nzl_nzbn",
        "nzl_russia_sanctions_uid",
        "omn_passport",
        "on_business_id_number",
        "ontario_corporation_number",
        "pak_co_ntn",
        "pak_egm_id",
        "pak_ind_ntn",
        "pak_ngo_reg_no",
        "pak_passport",
        "pan_cedula_number",
        "pan_declaration_number",
        "pan_folio_ficha_id",
        "pan_importer_exporter_id",
        "panadata_internal_id",
        "panadata_internal_sid",
        "per_carne_de_extranjeria",
        "per_dni_no",
        "per_ruc_no",
        "phl_bnn",
        "phl_passport",
        "phl_pse_id",
        "phl_sec_id",
        "phl_tin",
        "png_ipa_reg_id",
        "pol_krs_number",
        "pol_nip_number",
        "pol_regon_number",
        "pol_rejestr_person_id",
        "prk_entity_id",
        "prk_internal_trade_id",
        "prk_passport",
        "prk_registration_id",
        "prk_shipment_id",
        "prt_trust_number",
        "prt_vat_number",
        "pry_cedula_number",
        "pry_old_ruc_number",
        "pry_ruc_number",
        "pry_shipment_number",
        "pry_tax_id",
        "pse_registration_id",
        "qat_cr_number",
        "qat_passport",
        "qat_qfc_number",
        "quebec_enterprise_number",
        "rccm_no",
        "rio_de_janeiro_legal_id",
        "rks_business_number",
        "rks_fiscal_number",
        "rks_registration_number",
        "rou_company_registration_code",
        "rou_company_tin",
        "rou_identity_card",
        "rou_personal_id_number",
        "ru_inn",
        "ru_ogrn",
        "ru_ship_register_id",
        "ru_trade_internal_shipment_id",
        "rus_bik_code",
        "rus_declaration_number",
        "rus_micex_code",
        "rus_passport",
        "rus_tourist_obj",
        "saskatchewan_registry_number",
        "sau_cr_number",
        "sau_establishment_num",
        "sau_id",
        "sau_passport",
        "sayari_internal_identifier",
        "sgp_passport",
        "sgp_unqiue_entity_number",
        "siger_internal_id",
        "slv_commercial_reg_number",
        "slv_mcas",
        "slv_numero_identificacion_tributaria",
        "slv_uid_number",
        "smr_economic_operator_code",
        "som_ubi",
        "south_africa_enterprise_number",
        "south_africa_passport_number",
        "srb_beneficial_owner_id",
        "srb_branch_id",
        "srb_mb_number",
        "srb_pib_number",
        "ssd_passport",
        "stock_ticker",
        "svk_ico_number",
        "svn_ajpes_zapst_number",
        "svn_co_reg_no",
        "svn_vat_number",
        "swe_fi_id",
        "swe_org_no",
        "swe_per_id_no",
        "swe_tax_number",
        "swift_bic_code",
        "syr_passport",
        "syria_commercial_register_number",
        "tha_registration_no",
        "tjk_ein_number",
        "tjk_tin_number",
        "tokyo_stock_exchange_no",
        "tto_biz_number",
        "tun_passport",
        "tur_id",
        "tur_istanbul_coc_reg_no",
        "tur_izmir_coc_reg_no",
        "tur_mersis_number",
        "tur_passport",
        "tur_shipment_id",
        "tur_tax_id",
        "tur_ticaret_sicil_no",
        "twn_factory_establishment_permit_case_number",
        "twn_factory_registration_number",
        "twn_passport_number",
        "twn_unified_number",
        "tx_corp_file_num",
        "tx_entity_filing_num",
        "tx_land_id",
        "tx_pacs_id",
        "tx_prop_id",
        "tx_tax_id",
        "tza_brela_reg_num",
        "uk_company_number",
        "uk_firm_reference_number",
        "uk_passport",
        "uk_person_number",
        "uk_title_number",
        "ukr_fiu_list_number",
        "ukr_moj_id",
        "ukr_reg_num",
        "ukr_sanctions_nazk_company_internal_id",
        "ukr_sanctions_nazk_person_internal_id",
        "un_sanction_prn",
        "ury_ruc_number",
        "usa_ak_entity_no",
        "usa_al_sos_id",
        "usa_ar_filing_no",
        "usa_az_corp_reg_entity_num",
        "usa_central_registration_depository_number",
        "usa_cgac_agency_code",
        "usa_co_reg_no",
        "usa_consolidated_screening_list_synthetic_id",
        "usa_corpwatch_id",
        "usa_ct_business_id",
        "usa_ct_internal_id",
        "usa_cusip_number",
        "usa_dc_entity_no",
        "usa_dc_file_no",
        "usa_de_file_number",
        "usa_de_registered_agent_id",
        "usa_fei_number",
        "usa_fl_document_no",
        "usa_fl_fic_name_reg_no",
        "usa_fl_martin_pid",
        "usa_fl_pb_pcn",
        "usa_fl_property_id",
        "usa_fl_property_mp_id",
        "usa_fl_property_state_par_id",
        "usa_fl_sl_pid",
        "usa_ga_business_id",
        "usa_ga_control_no",
        "usa_govt_agency_id",
        "usa_govt_office_id",
        "usa_hi_corporate_registry_id",
        "usa_hi_corporate_registry_person_id",
        "usa_hi_trade_name_cert",
        "usa_ia_corp_no",
        "usa_id_control_no",
        "usa_id_party_id",
        "usa_il_chicago_account_number",
        "usa_il_file_number",
        "usa_in_biz_no",
        "usa_irs_ein",
        "usa_irs_giin",
        "usa_ks_biz_id",
        "usa_ky_org_no",
        "usa_la_sos_id",
        "usa_mass_sos_company_id",
        "usa_md_dpt_tax",
        "usa_me_corp_id",
        "usa_mi_corp_id",
        "usa_mi_corp_id_old",
        "usa_mn_filing_number",
        "usa_mn_master_id",
        "usa_mo_corp_id",
        "usa_ms_biz_id",
        "usa_nc_internal_id",
        "usa_nd_control_id",
        "usa_ne_acct_no",
        "usa_ne_agent_id",
        "usa_nh_business_id",
        "usa_nj_business_id",
        "usa_nm_business_no",
        "usa_nm_license_id",
        "usa_npi_number",
        "usa_nv_bizid",
        "usa_nv_corpno",
        "usa_ny_dos_id",
        "usa_ny_reg_id",
        "usa_ofac_sdn_number",
        "usa_oh_charter_num",
        "usa_ok_filing_no",
        "usa_or_regno",
        "usa_oti_id",
        "usa_pa_corporate_registry_id",
        "usa_puerto_rico_register_number",
        "usa_ri_fei_no",
        "usa_sam_exclusions_number",
        "usa_sam_uei_number",
        "usa_sc_corp_id",
        "usa_sd_corp_id",
        "usa_sec_cik_number",
        "usa_sec_file_number_bd",
        "usa_sec_file_number_ia",
        "usa_sec_private_fund",
        "usa_social_security_number",
        "usa_tn_control_no",
        "usa_tn_party_id",
        "usa_upin_number",
        "usa_uspto_foreign_application_no",
        "usa_uspto_foreign_reg_no",
        "usa_uspto_reg_no",
        "usa_uspto_serial_number",
        "usa_usvi_corp_number",
        "usa_va_old_reg_id",
        "usa_va_reg_id",
        "usa_vt_biz_id",
        "usa_washington_state_ubi",
        "usa_wi_dfi_id",
        "usa_wv_reg_id",
        "usa_wy_filing_id",
        "usa_wy_filing_num",
        "usa_wy_internal_filing_id",
        "usa_wy_party_id",
        "utah_corporate_registry_internal_entity_number",
        "uzb_tin_number",
        "validatis_number",
        "vat",
        "ven_cedula_number",
        "ven_rif",
        "ven_rnc_number",
        "ven_saren_internal_employer_number",
        "vgb_company_number",
        "vnm_citizenship_no",
        "vnm_dichvuthongtin_internal_id",
        "vnm_enterprise_code",
        "vnm_person_id_no",
        "vut_corp_reg_number",
        "wipo_intl_ref_no",
        "wipo_intl_reg_no",
        "xxx_acuris_id",
        "xxx_cedar_rose_uid",
        "xxx_crb_monitor_entity_id",
        "xxx_edi_global_issuer_id",
        "xxx_edi_global_security_id",
        "xxx_eu_esma_sanctions_id",
        "xxx_intel_internal_id",
        "xxx_rccm",
        "yem_coc_registration_number",
        "yem_passport",
        "yugoslav_master_citizen_num",
        "zcash_address",
    ]);

export declare namespace IdentifierType {
    export type Raw =
        | "aer_free_zone_license"
        | "aer_free_zone_reg_no"
        | "aer_ner_number"
        | "afg_business_license"
        | "afg_passport"
        | "afg_trade_internal_shipment_id"
        | "afghan_tin_number"
        | "ago_matricula_number"
        | "ago_nif_number"
        | "alb_registration_number"
        | "alb_tax_id"
        | "alberta_corporation_number"
        | "alei"
        | "are_difc_reg_no"
        | "are_dubai_land_case_no"
        | "are_reg_auth_number"
        | "arg_cdi_number"
        | "arg_cuil_number"
        | "arg_cuit_number"
        | "arg_dni_number"
        | "arg_igj_number"
        | "arg_import_export_id"
        | "arg_lib_civica_number"
        | "arg_lib_enrolamiento_number"
        | "arg_partial_cuit"
        | "arm_enterprise_code"
        | "arm_passport_number"
        | "arm_registration_no"
        | "arm_vat_no"
        | "aruba_chamber_of_commerce_id"
        | "atg_business_registry_internal_id"
        | "aus_adv_number"
        | "aus_afs_licence_number"
        | "aus_afs_rep_number"
        | "aus_business_number"
        | "aus_company_number"
        | "aus_consolidated_sanctions_reference"
        | "aus_credit_licence_number"
        | "aus_credit_rep_number"
        | "aus_passport"
        | "aut_firmenbuch_no"
        | "aze_tin_number"
        | "bd_bin"
        | "bel_enterprise_number"
        | "bel_establishment_number"
        | "bel_fsma_name_hash"
        | "bel_national_register_no"
        | "bfa_entity_id"
        | "bfa_rccm_number"
        | "bgd_passport"
        | "bgr_egn_hashed"
        | "bgr_uic"
        | "bh_cr_number"
        | "bh_cr_number_and_branch"
        | "bhs_tin"
        | "bih_customs_number"
        | "bih_jib_number"
        | "bih_mbs_number"
        | "bill_of_lading"
        | "bitcoin_address"
        | "blr_registration_number"
        | "blz_bccar_reg_no"
        | "bmu_registrar_of_companies_number"
        | "bmu_registration_number"
        | "bol_matricula"
        | "bol_old_matricula"
        | "bra_case_number"
        | "bra_cnpj"
        | "bra_codigo_da_unidade_organizacional"
        | "bra_cpf_number"
        | "bra_foreigner_reg_num"
        | "bra_rg_number"
        | "bra_servidor_portal"
        | "bra_shipment_number"
        | "bwa_uin_reg_number"
        | "bze_bicar_reg_no"
        | "ca_corporate_id_num"
        | "ca_lp_file_num"
        | "caf_passport"
        | "cage"
        | "can_bc_company_registration_id"
        | "can_bc_extraprovincial_registration_id"
        | "can_bc_registration_number"
        | "can_business_number"
        | "can_corporation_number"
        | "can_cra_program_account_number"
        | "can_data_axle_hash"
        | "can_ipo_trademark_application_no"
        | "can_mb_registry"
        | "can_new_brunswick_reference_number"
        | "can_nl_corporate_registry"
        | "can_nrd"
        | "can_nrd_individual_id"
        | "can_ns_corporate_registry"
        | "can_pe_registration_number"
        | "can_qc_sap_registry_ref_num"
        | "can_techsalerator_id"
        | "can_tm_registration_no"
        | "ccs_registration"
        | "che_ch_id_number"
        | "che_seco_sanction_number"
        | "che_uid_number"
        | "china_vessel_inspection_registration"
        | "china_vessel_registration"
        | "chl_cedula_number"
        | "chl_import_export_control_id"
        | "chl_import_manifest_number"
        | "chl_importer_exporter_id"
        | "chn_cninfo_internal_shareholder_id"
        | "chn_cnipa_tm"
        | "chn_csrc_no"
        | "chn_customs_registration_code"
        | "chn_customs_registration_no"
        | "chn_passport"
        | "chn_resident_id_number"
        | "chn_shanghai_stock_exchange_company_code"
        | "chn_shenzen_sec_code"
        | "cm_nui_tax_reg_num"
        | "cn_hk_br_number"
        | "cn_hk_cr_number"
        | "cn_hk_filing_number"
        | "cn_hurd_internal_company_id"
        | "cn_importexport_code"
        | "cn_organization_code"
        | "cn_qichacha_internal_id"
        | "cn_registration_number"
        | "cn_tax_identification_number"
        | "cn_tianyancha_company_id"
        | "cn_tianyancha_human_id"
        | "cn_unified_social_credit_code"
        | "cod_passport"
        | "cod_rccm_number"
        | "cod_rccm_ohada_number"
        | "cok_corp_reg_corpid"
        | "cok_corp_reg_corpofficerid"
        | "cok_corp_reg_number"
        | "col_cedula_no"
        | "col_dian_numero_formulario"
        | "col_nit_no"
        | "col_nur"
        | "col_secop_no"
        | "cri_cedula_citizen_person"
        | "cri_cedula_foreign_person"
        | "cri_cedula_juridica"
        | "cri_cedula_number"
        | "cri_exp"
        | "cri_imp"
        | "cri_op_no"
        | "cub_cod"
        | "cuw_reg_number"
        | "cym_co_no"
        | "cyp_id_card"
        | "cyp_infocredit_entity_id"
        | "cyp_passport"
        | "cyp_reg_no"
        | "cyp_ssn"
        | "cze_file_number"
        | "cze_ico_number"
        | "dart_cik"
        | "dash_address"
        | "deu_bafin_id"
        | "deu_registernummer"
        | "dji_rcs_number"
        | "dma_business_registry_internal_id"
        | "dnk_cvr"
        | "dnk_entity"
        | "dnk_production_unit_no"
        | "dom_onapi_num"
        | "dom_rnc"
        | "duns_number"
        | "ecu_branch_id"
        | "ecu_cedula_number"
        | "ecu_company_id"
        | "ecu_exporter_id"
        | "ecu_importer_id"
        | "ecu_ruc_number"
        | "ecu_shipment_ref_no"
        | "egy_id"
        | "egy_passport"
        | "esp_be_code"
        | "esp_borme_reg_id"
        | "esp_internal_employee_number"
        | "esp_nif"
        | "esp_tr_number"
        | "est_business_reg_code"
        | "est_personal_id"
        | "ethereum_address"
        | "eu_fsd_id"
        | "eu_sanction_rn"
        | "euid"
        | "fin_business_id"
        | "fl_prop_folio"
        | "fl_prop_folio_dade"
        | "fra_asset_freeze_id"
        | "fra_rna"
        | "fra_siren"
        | "fra_siret"
        | "fra_vat_number"
        | "fro_reg_num"
        | "gbr_charity_no"
        | "gbr_company_number"
        | "gbr_disqualification_case_num"
        | "gbr_enforcement_action_num"
        | "gbr_go_no"
        | "gbr_hm_treasury_sanction_group_id"
        | "gbr_ipo_trademark_reg_no"
        | "gbr_trustee_id"
        | "gbr_uk_sanctions_id"
        | "gbr_vat_no"
        | "geo_identification_code"
        | "geo_legal_code"
        | "geo_personal_number"
        | "geo_state_registration_number"
        | "ggy_corporate_reg_number"
        | "ggy_trademark_no"
        | "ggy_trademark_submission_ref"
        | "gib_corp_reg_number"
        | "global_trade_internal_shipment_id"
        | "grc_afm_number"
        | "grc_gemi_number"
        | "grc_vat_number"
        | "gtm_cui_number"
        | "gtm_nit_number"
        | "hkg_stock_code"
        | "hnd_coc_company_registration_number"
        | "hnd_tegucigalpa_matricula"
        | "hong_kong_case_number"
        | "hr_mbs"
        | "hr_oib"
        | "hun_company_register_number"
        | "hun_krs_number"
        | "hun_person_tax_id"
        | "hun_tax_number"
        | "iban"
        | "icij_offshore_internal_id"
        | "icij_offshore_node_id"
        | "idn_nik_id"
        | "idn_passport"
        | "idn_tax_id"
        | "idn_trade_internal_shipment_id"
        | "idn_transaction_number"
        | "idn_ubo_owner_id"
        | "ihs_owner_code"
        | "imn_company_number"
        | "imo_no"
        | "ind_charity_registration_number"
        | "ind_company_registration_number"
        | "ind_coopsoc_registration_number"
        | "ind_corporate_id_number"
        | "ind_darpan_uid"
        | "ind_director_id_number"
        | "ind_fcrn"
        | "ind_ifsc"
        | "ind_llpin"
        | "ind_nse_ticker_code"
        | "ind_passport"
        | "ind_permanent_account_number"
        | "ind_society_registration_number"
        | "ind_tin"
        | "ind_trademark_submission_ref"
        | "int_maritime_org_id"
        | "internal_md5"
        | "iraqi_stock_exchange_symbol"
        | "irl_rcn"
        | "irl_registration_no"
        | "irn_coc_internal_id"
        | "irn_coc_internal_id_cardno"
        | "irn_national_id"
        | "irn_national_number"
        | "irn_passport"
        | "irq_passport"
        | "irq_voter_id"
        | "isin"
        | "isl_tin_number"
        | "isl_vat_num"
        | "isr_association_number"
        | "isr_company_number"
        | "isr_national_id"
        | "isr_pbc_number"
        | "ita_fiscal_code"
        | "ita_rea_number"
        | "ita_vat_number"
        | "jam_company_id"
        | "jey_corporate_reg_number"
        | "jey_trademark_reg_no"
        | "jo_institution_number"
        | "jo_internal_id"
        | "jo_national_institution_number"
        | "jor_id_no"
        | "jor_voter_card_no"
        | "jordan_company_no"
        | "jpn_corporate_no"
        | "jpn_edinet_code"
        | "kaz_bin"
        | "kaz_identifier"
        | "kaz_okpo_num"
        | "kaz_state_reg_num"
        | "kaz_tin"
        | "ken_personal_id"
        | "kgz_reg_number"
        | "khm_tin_number"
        | "kor_business_tin"
        | "kor_corporate_registration_number"
        | "krx_ticker_code"
        | "kwt_passport"
        | "lao_enterprise_number"
        | "lbn_national_id"
        | "lby_passport"
        | "lca_business_registry_internal_id"
        | "lei"
        | "lie_public_reg_no"
        | "litecoin_address"
        | "lloyds_internal_entity_id"
        | "lloyds_internal_vessel_id"
        | "lr_tin"
        | "lso_corpreg_id"
        | "ltu_company_registration_code"
        | "lux_rcs_number"
        | "lva_insolvency_proceeding_id"
        | "lva_personal_code"
        | "lva_reg_number"
        | "mac_raem_case_url_id"
        | "mac_registration_no"
        | "malta_accountancy_registration_id"
        | "malta_company_number"
        | "malta_national_id"
        | "mar_passport"
        | "mato_grosso_legal_id"
        | "mco_nis"
        | "mco_rci_number"
        | "mda_idno_number"
        | "mdg_nif_number"
        | "mdg_rcs_number"
        | "mdg_stat_number"
        | "mdv_registration_number"
        | "mex_cluni"
        | "mex_denue_clee"
        | "mex_open_contracts_internal_id"
        | "mex_rnie"
        | "mex_shipment_number"
        | "mex_tm_no"
        | "mex_yucatan_folio"
        | "mkd_archive_number"
        | "mkd_embs_branch_number"
        | "mkd_embs_number"
        | "mmr_corp_id"
        | "mmr_officer_id"
        | "mmr_personal_id_no"
        | "mmr_prior_reg_no"
        | "mmr_reg_no"
        | "mne_pib"
        | "mne_property_uid"
        | "mne_reg_number"
        | "mng_reg_number"
        | "montana_sos_internal_entity_id"
        | "moz_dire_no"
        | "moz_id_number"
        | "moz_nuel_no"
        | "moz_nuit_co"
        | "moz_nuit_person"
        | "moz_passport"
        | "moz_voter_no"
        | "mus_file_no"
        | "mus_reg_id"
        | "mw_tpin_tax_reg_num"
        | "mx_curp"
        | "mx_office_fme"
        | "mx_rfc_company"
        | "mx_rfc_person"
        | "mys_company_reg_no"
        | "mys_id_card_no"
        | "mys_moha_list_number"
        | "mys_passport"
        | "ng_check_internal_id"
        | "nga_crp_reg_internal_id"
        | "nga_drivers"
        | "nga_nin"
        | "nga_registration_number"
        | "nga_registration_sn"
        | "nga_tax_id"
        | "nic_numero_unico"
        | "nic_ruc_number"
        | "nic_trade_internal_shipment_id"
        | "ninea_no"
        | "nld_kvk_branch_number"
        | "nld_kvk_number"
        | "nor_org_no"
        | "npl_co_reg_no"
        | "nyc_bbl"
        | "nyc_crfn"
        | "nzl_co_no"
        | "nzl_nzbn"
        | "nzl_russia_sanctions_uid"
        | "omn_passport"
        | "on_business_id_number"
        | "ontario_corporation_number"
        | "pak_co_ntn"
        | "pak_egm_id"
        | "pak_ind_ntn"
        | "pak_ngo_reg_no"
        | "pak_passport"
        | "pan_cedula_number"
        | "pan_declaration_number"
        | "pan_folio_ficha_id"
        | "pan_importer_exporter_id"
        | "panadata_internal_id"
        | "panadata_internal_sid"
        | "per_carne_de_extranjeria"
        | "per_dni_no"
        | "per_ruc_no"
        | "phl_bnn"
        | "phl_passport"
        | "phl_pse_id"
        | "phl_sec_id"
        | "phl_tin"
        | "png_ipa_reg_id"
        | "pol_krs_number"
        | "pol_nip_number"
        | "pol_regon_number"
        | "pol_rejestr_person_id"
        | "prk_entity_id"
        | "prk_internal_trade_id"
        | "prk_passport"
        | "prk_registration_id"
        | "prk_shipment_id"
        | "prt_trust_number"
        | "prt_vat_number"
        | "pry_cedula_number"
        | "pry_old_ruc_number"
        | "pry_ruc_number"
        | "pry_shipment_number"
        | "pry_tax_id"
        | "pse_registration_id"
        | "qat_cr_number"
        | "qat_passport"
        | "qat_qfc_number"
        | "quebec_enterprise_number"
        | "rccm_no"
        | "rio_de_janeiro_legal_id"
        | "rks_business_number"
        | "rks_fiscal_number"
        | "rks_registration_number"
        | "rou_company_registration_code"
        | "rou_company_tin"
        | "rou_identity_card"
        | "rou_personal_id_number"
        | "ru_inn"
        | "ru_ogrn"
        | "ru_ship_register_id"
        | "ru_trade_internal_shipment_id"
        | "rus_bik_code"
        | "rus_declaration_number"
        | "rus_micex_code"
        | "rus_passport"
        | "rus_tourist_obj"
        | "saskatchewan_registry_number"
        | "sau_cr_number"
        | "sau_establishment_num"
        | "sau_id"
        | "sau_passport"
        | "sayari_internal_identifier"
        | "sgp_passport"
        | "sgp_unqiue_entity_number"
        | "siger_internal_id"
        | "slv_commercial_reg_number"
        | "slv_mcas"
        | "slv_numero_identificacion_tributaria"
        | "slv_uid_number"
        | "smr_economic_operator_code"
        | "som_ubi"
        | "south_africa_enterprise_number"
        | "south_africa_passport_number"
        | "srb_beneficial_owner_id"
        | "srb_branch_id"
        | "srb_mb_number"
        | "srb_pib_number"
        | "ssd_passport"
        | "stock_ticker"
        | "svk_ico_number"
        | "svn_ajpes_zapst_number"
        | "svn_co_reg_no"
        | "svn_vat_number"
        | "swe_fi_id"
        | "swe_org_no"
        | "swe_per_id_no"
        | "swe_tax_number"
        | "swift_bic_code"
        | "syr_passport"
        | "syria_commercial_register_number"
        | "tha_registration_no"
        | "tjk_ein_number"
        | "tjk_tin_number"
        | "tokyo_stock_exchange_no"
        | "tto_biz_number"
        | "tun_passport"
        | "tur_id"
        | "tur_istanbul_coc_reg_no"
        | "tur_izmir_coc_reg_no"
        | "tur_mersis_number"
        | "tur_passport"
        | "tur_shipment_id"
        | "tur_tax_id"
        | "tur_ticaret_sicil_no"
        | "twn_factory_establishment_permit_case_number"
        | "twn_factory_registration_number"
        | "twn_passport_number"
        | "twn_unified_number"
        | "tx_corp_file_num"
        | "tx_entity_filing_num"
        | "tx_land_id"
        | "tx_pacs_id"
        | "tx_prop_id"
        | "tx_tax_id"
        | "tza_brela_reg_num"
        | "uk_company_number"
        | "uk_firm_reference_number"
        | "uk_passport"
        | "uk_person_number"
        | "uk_title_number"
        | "ukr_fiu_list_number"
        | "ukr_moj_id"
        | "ukr_reg_num"
        | "ukr_sanctions_nazk_company_internal_id"
        | "ukr_sanctions_nazk_person_internal_id"
        | "un_sanction_prn"
        | "ury_ruc_number"
        | "usa_ak_entity_no"
        | "usa_al_sos_id"
        | "usa_ar_filing_no"
        | "usa_az_corp_reg_entity_num"
        | "usa_central_registration_depository_number"
        | "usa_cgac_agency_code"
        | "usa_co_reg_no"
        | "usa_consolidated_screening_list_synthetic_id"
        | "usa_corpwatch_id"
        | "usa_ct_business_id"
        | "usa_ct_internal_id"
        | "usa_cusip_number"
        | "usa_dc_entity_no"
        | "usa_dc_file_no"
        | "usa_de_file_number"
        | "usa_de_registered_agent_id"
        | "usa_fei_number"
        | "usa_fl_document_no"
        | "usa_fl_fic_name_reg_no"
        | "usa_fl_martin_pid"
        | "usa_fl_pb_pcn"
        | "usa_fl_property_id"
        | "usa_fl_property_mp_id"
        | "usa_fl_property_state_par_id"
        | "usa_fl_sl_pid"
        | "usa_ga_business_id"
        | "usa_ga_control_no"
        | "usa_govt_agency_id"
        | "usa_govt_office_id"
        | "usa_hi_corporate_registry_id"
        | "usa_hi_corporate_registry_person_id"
        | "usa_hi_trade_name_cert"
        | "usa_ia_corp_no"
        | "usa_id_control_no"
        | "usa_id_party_id"
        | "usa_il_chicago_account_number"
        | "usa_il_file_number"
        | "usa_in_biz_no"
        | "usa_irs_ein"
        | "usa_irs_giin"
        | "usa_ks_biz_id"
        | "usa_ky_org_no"
        | "usa_la_sos_id"
        | "usa_mass_sos_company_id"
        | "usa_md_dpt_tax"
        | "usa_me_corp_id"
        | "usa_mi_corp_id"
        | "usa_mi_corp_id_old"
        | "usa_mn_filing_number"
        | "usa_mn_master_id"
        | "usa_mo_corp_id"
        | "usa_ms_biz_id"
        | "usa_nc_internal_id"
        | "usa_nd_control_id"
        | "usa_ne_acct_no"
        | "usa_ne_agent_id"
        | "usa_nh_business_id"
        | "usa_nj_business_id"
        | "usa_nm_business_no"
        | "usa_nm_license_id"
        | "usa_npi_number"
        | "usa_nv_bizid"
        | "usa_nv_corpno"
        | "usa_ny_dos_id"
        | "usa_ny_reg_id"
        | "usa_ofac_sdn_number"
        | "usa_oh_charter_num"
        | "usa_ok_filing_no"
        | "usa_or_regno"
        | "usa_oti_id"
        | "usa_pa_corporate_registry_id"
        | "usa_puerto_rico_register_number"
        | "usa_ri_fei_no"
        | "usa_sam_exclusions_number"
        | "usa_sam_uei_number"
        | "usa_sc_corp_id"
        | "usa_sd_corp_id"
        | "usa_sec_cik_number"
        | "usa_sec_file_number_bd"
        | "usa_sec_file_number_ia"
        | "usa_sec_private_fund"
        | "usa_social_security_number"
        | "usa_tn_control_no"
        | "usa_tn_party_id"
        | "usa_upin_number"
        | "usa_uspto_foreign_application_no"
        | "usa_uspto_foreign_reg_no"
        | "usa_uspto_reg_no"
        | "usa_uspto_serial_number"
        | "usa_usvi_corp_number"
        | "usa_va_old_reg_id"
        | "usa_va_reg_id"
        | "usa_vt_biz_id"
        | "usa_washington_state_ubi"
        | "usa_wi_dfi_id"
        | "usa_wv_reg_id"
        | "usa_wy_filing_id"
        | "usa_wy_filing_num"
        | "usa_wy_internal_filing_id"
        | "usa_wy_party_id"
        | "utah_corporate_registry_internal_entity_number"
        | "uzb_tin_number"
        | "validatis_number"
        | "vat"
        | "ven_cedula_number"
        | "ven_rif"
        | "ven_rnc_number"
        | "ven_saren_internal_employer_number"
        | "vgb_company_number"
        | "vnm_citizenship_no"
        | "vnm_dichvuthongtin_internal_id"
        | "vnm_enterprise_code"
        | "vnm_person_id_no"
        | "vut_corp_reg_number"
        | "wipo_intl_ref_no"
        | "wipo_intl_reg_no"
        | "xxx_acuris_id"
        | "xxx_cedar_rose_uid"
        | "xxx_crb_monitor_entity_id"
        | "xxx_edi_global_issuer_id"
        | "xxx_edi_global_security_id"
        | "xxx_eu_esma_sanctions_id"
        | "xxx_intel_internal_id"
        | "xxx_rccm"
        | "yem_coc_registration_number"
        | "yem_passport"
        | "yugoslav_master_citizen_num"
        | "zcash_address";
}
