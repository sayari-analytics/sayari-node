/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * All weak (non-unique) identifiers in Sayari's database
 */
export type WeakIdentifierType =
    /**
     * A string that is thought to be an ID number, but whose type is unknown */
    | "unknown"
    | "mx_partial_rfc_person"
    | "ru_oktmo"
    | "ru_kpp"
    /**
     * A unique identifier that is reissued when a company dissolves */
    | "ru_okpo"
    /**
     * A passport number whose country of origin is not known */
    | "unknown_passport"
    /**
     * An identifier from the Kosovo company registry */
    | "rks_kta_number"
    /**
     * Individual taxpayer registry identification (https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas) */
    | "bra_partial_cpf"
    /**
     * Identification number for Venezuelan comisarios */
    | "ven_colegiado_number"
    | "pan_folio"
    /**
     * A unique identifier that is reissued when a company dissolves */
    | "kgz_okpo"
    | "kgz_inn"
    | "lbn_registration_number"
    /**
     * Number in registry per EBR */
    | "ita_ebr_reg_number"
    /**
     * EBR short search code */
    | "ita_ebr_short_search_code"
    /**
     * CVE number in Chile Santiago Gazette */
    | "chl_santiago_gazette_cve"
    /**
     * Bermuda registration number */
    | "bmu_registration_number"
    /**
     * Brazilian Lawyer Identification number */
    | "brazilian_oab"
    /**
     * Iranian registration number */
    | "irn_reg_number"
    /**
     * Mexican FME */
    | "mx_fme"
    /**
     * See https://www.wikidata.org/wiki/Property:P3125 */
    | "ukr_edrpou"
    /**
     * Label for various license numbers extracted from EGRUL documents */
    | "ru_license_number"
    /**
     * Unique call sign for vessels */
    | "maritime_call_sign"
    /**
     * Registration numbers for North Korean ships */
    | "prk_ship_reg_no"
    /**
     * National identification number for enterprises and associations (Senegal) */
    | "cofi_code"
    /**
     * Foreign entity accreditation number */
    | "ru_nza"
    /**
     * Unique company id from Inspección General de Justicia in Argentina */
    | "arg_igj_number"
    /**
     * Brazilian Lawyer Identification number */
    | "unknown_bra_case_number"
    | "irq_provision_card"
    /**
     * Mobile Home Serial Number */
    | "mbl_hm_sn"
    /**
     * Mobile Home HUD Number */
    | "mbl_hm_hud_num"
    /**
     * Mobile Home Title Number */
    | "mbl_hm_title_num"
    /**
     * Time stamp unique to each politician's filing on Declaranet */
    | "mex_declaranet_acuse"
    /**
     * The company number given to each company listed in Handelsregister, the German Commercial Register. It is not unique unless combined with the district court XJustiz ID, which this weak identifier does not contain because in some cases it is not provided. */
    | "deu_registernummer"
    /**
     * A National ID Number whose country of origin is not known */
    | "unknown_national_id_num"
    /**
     * A Civil Reg Number whose country of origin is not known */
    | "unknown_civil_reg_num"
    /**
     * A Residency Number whose country of origin is not known */
    | "unknown_residency_num"
    /**
     * A Folio ID Number whose country of origin is not known */
    | "unknown_folio_id_num"
    /**
     * A commercial registration number of unknown origin */
    | "unknown_commercial_register_id"
    /**
     * A chamber of commerce number of unknwon origin */
    | "unknown_chamber_of_commerce_id"
    /**
     * A license number of unknown origin */
    | "unknown_license_num"
    /**
     * An industrial license number of unknown origin */
    | "unknown_industrial_license_num"
    /**
     * Czechia file number from Moj registry */
    | "cze_file_number"
    /**
     * Mexican trademark application number */
    | "mex_tm_app_no"
    /**
     * Mexican trademark registration number */
    | "mex_tm_reg_no"
    /**
     * Company number from Jordan corporate registry */
    | "jordan_company_no"
    /**
     * Part of a qichacha URL, used to uniquely identify people within the site */
    | "cn_qcc_internal_id"
    /**
     * Weak identifier found in sole proprietor source */
    | "jor_sol_prop_institution_number"
    /**
     * North Carolina SoS corporation number */
    | "usa_nc_corp_no"
    /**
     * New Mexico Secretary of State License Id */
    | "usa_nm_license_id"
    /**
     * Cambodia tax identification number */
    | "khm_tin_number"
    /**
     * Entity ID from Missouri Corporate Registry */
    | "usa_mo_entity_id"
    /**
     * Corporation Number from Missouri Corporate Registry - used on SoS search */
    | "usa_mo_corp_number"
    /**
     * Case number for legal matters from Macao Tribunais da RAEM Judgments */
    | "mac_raem_case_number"
    /**
     * Notary office number for notaries in Honduras Tegucigalpa source */
    | "hnd_tegucigalpa_notary"
    /**
     * Lebanese family number */
    | "lbn_family_number"
    | "tx_bexar_property_geo_id"
    | "pak_cnic_family_no"
    /**
     * Romanian Commercial Register ID (concatenated from jud_com, nr_com, and an_com from ROU/taxpayers) */
    | "rou_commercial_register_id"
    /**
     * Partial South African ID number for individuals */
    | "south_africa_partial_id_number"
    /**
     * Internal ID used to link companies between PRK/CN exports and trade dict sources. Downgraded to weak id. */
    | "prk_internal_trade_id"
    /**
     * Chinese custums registration code. Downgraded to weak identifier. */
    | "chn_customs_registration_code"
    /**
     * Austrian Company Register Number (no longer used) */
    | "aut_former_cr_no"
    /**
     * Austrian National Bank ID Number */
    | "aut_natl_bank_no"
    /**
     * Latvian Personal ID Number (last 5 digits masked) */
    | "lva_person_id_masked"
    /**
     * Latvian Court Case ID Number */
    | "lva_court_case_id"
    /**
     * Internal identifier for legal persons from CHN cninfo data */
    | "chn_cninfo_legal_person_id"
    | "rks_business_number"
    /**
     * A fiscal number from the Kosovo company registry */
    | "rks_fiscal_number"
    /**
     * A tax identifier number in Madagascar. */
    | "mdg_nif_number"
    /**
     * A tax identifier number in Madagascar. */
    | "mdg_rcs_number"
    /**
     * See https://en.wikipedia.org/wiki/VAT_identification_number */
    | "vat"
    /**
     * Site number of business registered in Chicago, IL business license registry (unique to account number) */
    | "usa_il_chicago_site_number"
    /**
     * Ticker symbol for securities without exchange information */
    | "usa_generic_ticker"
    /**
     * A certificate number for the National Registry of Contractors in Venezuela */
    | "ven_rnc_number"
    /**
     * Identifier for shipment transactions */
    | "usa_imports_system_identity_id"
    /**
     * Bill of lading number for Colombian trade data */
    | "col_bill_of_lading"
    /**
     * Colombian SECOP internal ID */
    | "col_secop_no"
    /**
     * The register REGON fulfils the function of the national official Register of National Economy Entities */
    | "pol_regon_number"
    /**
     * Tax identification number from Poland */
    | "pol_nip_number"
    /**
     * Bill of lading number for trade data */
    | "bill_of_lading"
    /**
     * Panama IBC RUC */
    | "pan_ibc_ruc"
    /**
     * Old Pakistan company code */
    | "pak_old_company_code"
    /**
     * Japan ministry of land, infrastructure, transportation and tourism permit number */
    | "jpn_permit_no"
    /**
     * Dominica Business Registry Entity Number */
    | "dma_corporate_registry_entity_num"
    /**
     * Antigua and Barbuda Business Registry Entity Number */
    | "atg_corporate_registry_entity_num"
    /**
     * St. Lucia Business Registry Entity Number */
    | "lca_corporate_registry_entity_num"
    /**
     * Manifiesto number for Venezuelan shipments */
    | "ven_manifiesto_number"
    /**
     * Matricula mercantil number which is non unique across different chambers of commerce */
    | "col_matricula_mercantil"
    /**
     * Maritime Mobile Service Identity Number (https://en.wikipedia.org/wiki/Maritime_Mobile_Service_Identity) */
    | "maritime_mobile_service_identity"
    /**
     * Former USA/IRS FEI/EIN Number */
    | "usa_former_fein"
    /**
     * USA Customs and Border Protection Withhold Release Order ID */
    | "usa_cbp_wro_id"
    /**
     * China Classification Society Ship Class Number */
    | "ccs_ship_class_number"
    /**
     * Partial Turkish Central Registry Number System MERSIS number */
    | "tur_partial_mersis_number"
    /**
     * Turkey municipal trade registry ID number. Assigned by municipal chambers of commerce in Turkey. */
    | "tur_office_registration_number"
    /**
     * A Identification Card or Passport Document for people in Venezuela */
    | "partial_ven_cedula"
    /**
     * Russia Central Bank ID */
    | "rus_cbr_id"
    /**
     * Georgian state registration number */
    | "geo_state_registration_number"
    /**
     * Bosnia and Herzegovenia business register registration number */
    | "bih_mbs_number"
    /**
     * A temporary malformed type */
    | "malformed mmr_prior_reg_no";

export const WeakIdentifierType = {
    Unknown: "unknown",
    MxPartialRfcPerson: "mx_partial_rfc_person",
    RuOktmo: "ru_oktmo",
    RuKpp: "ru_kpp",
    RuOkpo: "ru_okpo",
    UnknownPassport: "unknown_passport",
    RksKtaNumber: "rks_kta_number",
    BraPartialCpf: "bra_partial_cpf",
    VenColegiadoNumber: "ven_colegiado_number",
    PanFolio: "pan_folio",
    KgzOkpo: "kgz_okpo",
    KgzInn: "kgz_inn",
    LbnRegistrationNumber: "lbn_registration_number",
    ItaEbrRegNumber: "ita_ebr_reg_number",
    ItaEbrShortSearchCode: "ita_ebr_short_search_code",
    ChlSantiagoGazetteCve: "chl_santiago_gazette_cve",
    BmuRegistrationNumber: "bmu_registration_number",
    BrazilianOab: "brazilian_oab",
    IrnRegNumber: "irn_reg_number",
    MxFme: "mx_fme",
    UkrEdrpou: "ukr_edrpou",
    RuLicenseNumber: "ru_license_number",
    MaritimeCallSign: "maritime_call_sign",
    PrkShipRegNo: "prk_ship_reg_no",
    CofiCode: "cofi_code",
    RuNza: "ru_nza",
    ArgIgjNumber: "arg_igj_number",
    UnknownBraCaseNumber: "unknown_bra_case_number",
    IrqProvisionCard: "irq_provision_card",
    MblHmSn: "mbl_hm_sn",
    MblHmHudNum: "mbl_hm_hud_num",
    MblHmTitleNum: "mbl_hm_title_num",
    MexDeclaranetAcuse: "mex_declaranet_acuse",
    DeuRegisternummer: "deu_registernummer",
    UnknownNationalIdNum: "unknown_national_id_num",
    UnknownCivilRegNum: "unknown_civil_reg_num",
    UnknownResidencyNum: "unknown_residency_num",
    UnknownFolioIdNum: "unknown_folio_id_num",
    UnknownCommercialRegisterId: "unknown_commercial_register_id",
    UnknownChamberOfCommerceId: "unknown_chamber_of_commerce_id",
    UnknownLicenseNum: "unknown_license_num",
    UnknownIndustrialLicenseNum: "unknown_industrial_license_num",
    CzeFileNumber: "cze_file_number",
    MexTmAppNo: "mex_tm_app_no",
    MexTmRegNo: "mex_tm_reg_no",
    JordanCompanyNo: "jordan_company_no",
    CnQccInternalId: "cn_qcc_internal_id",
    JorSolPropInstitutionNumber: "jor_sol_prop_institution_number",
    UsaNcCorpNo: "usa_nc_corp_no",
    UsaNmLicenseId: "usa_nm_license_id",
    KhmTinNumber: "khm_tin_number",
    UsaMoEntityId: "usa_mo_entity_id",
    UsaMoCorpNumber: "usa_mo_corp_number",
    MacRaemCaseNumber: "mac_raem_case_number",
    HndTegucigalpaNotary: "hnd_tegucigalpa_notary",
    LbnFamilyNumber: "lbn_family_number",
    TxBexarPropertyGeoId: "tx_bexar_property_geo_id",
    PakCnicFamilyNo: "pak_cnic_family_no",
    RouCommercialRegisterId: "rou_commercial_register_id",
    SouthAfricaPartialIdNumber: "south_africa_partial_id_number",
    PrkInternalTradeId: "prk_internal_trade_id",
    ChnCustomsRegistrationCode: "chn_customs_registration_code",
    AutFormerCrNo: "aut_former_cr_no",
    AutNatlBankNo: "aut_natl_bank_no",
    LvaPersonIdMasked: "lva_person_id_masked",
    LvaCourtCaseId: "lva_court_case_id",
    ChnCninfoLegalPersonId: "chn_cninfo_legal_person_id",
    RksBusinessNumber: "rks_business_number",
    RksFiscalNumber: "rks_fiscal_number",
    MdgNifNumber: "mdg_nif_number",
    MdgRcsNumber: "mdg_rcs_number",
    Vat: "vat",
    UsaIlChicagoSiteNumber: "usa_il_chicago_site_number",
    UsaGenericTicker: "usa_generic_ticker",
    VenRncNumber: "ven_rnc_number",
    UsaImportsSystemIdentityId: "usa_imports_system_identity_id",
    ColBillOfLading: "col_bill_of_lading",
    ColSecopNo: "col_secop_no",
    PolRegonNumber: "pol_regon_number",
    PolNipNumber: "pol_nip_number",
    BillOfLading: "bill_of_lading",
    PanIbcRuc: "pan_ibc_ruc",
    PakOldCompanyCode: "pak_old_company_code",
    JpnPermitNo: "jpn_permit_no",
    DmaCorporateRegistryEntityNum: "dma_corporate_registry_entity_num",
    AtgCorporateRegistryEntityNum: "atg_corporate_registry_entity_num",
    LcaCorporateRegistryEntityNum: "lca_corporate_registry_entity_num",
    VenManifiestoNumber: "ven_manifiesto_number",
    ColMatriculaMercantil: "col_matricula_mercantil",
    MaritimeMobileServiceIdentity: "maritime_mobile_service_identity",
    UsaFormerFein: "usa_former_fein",
    UsaCbpWroId: "usa_cbp_wro_id",
    CcsShipClassNumber: "ccs_ship_class_number",
    TurPartialMersisNumber: "tur_partial_mersis_number",
    TurOfficeRegistrationNumber: "tur_office_registration_number",
    PartialVenCedula: "partial_ven_cedula",
    RusCbrId: "rus_cbr_id",
    GeoStateRegistrationNumber: "geo_state_registration_number",
    BihMbsNumber: "bih_mbs_number",
    MalformedMmrPriorRegNo: "malformed mmr_prior_reg_no",
} as const;
