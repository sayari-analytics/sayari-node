/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This includes all weak (non-unique) identifiers in Sayari's database.
 */
export type WeakIdentifierType =
    /**
     * Unique company ID from Inspección General de Justicia in Argentina */
    | "arg_igj_number"
    /**
     * Unique identifier for Argentinian imports and exports */
    | "arg_import_export_id"
    /**
     * Antigua and Barbuda Business Registry Entity Number */
    | "atg_corporate_registry_entity_num"
    /**
     * ASIC's internal document number used to identify the document containing the ban or disqualification notice/order in the Australia ASIC Banned and Disqualified Persons Register. */
    | "aus_asic_disqualified_persons_number"
    /**
     * Weak AUS state registration number. Registration number assigned when legal entity is originally registered by the Australian State. */
    | "aus_state_reg_number"
    /**
     * Austrian Company Register Number (no longer used) */
    | "aut_former_cr_no"
    /**
     * Austrian National Bank ID Number */
    | "aut_natl_bank_no"
    /**
     * Bosnia and Herzegovina business register registration number */
    | "bih_mbs_number"
    /**
     * Bill of lading number for trade data */
    | "bill_of_lading"
    /**
     * Bermuda registration number */
    | "bmu_registration_number"
    /**
     * Individual taxpayer registry identification in Brazil. Learn more [here](https://en.wikipedia.org/wiki/Cadastro_de_Pessoas_F%C3%ADsicas) */
    | "bra_partial_cpf"
    /**
     * Brazilian Lawyer Identification number */
    | "brazilian_oab"
    /**
     * China Classification Society Ship Class Number */
    | "ccs_ship_class_number"
    /**
     * CVE number in Chile Santiago Gazette */
    | "chl_santiago_gazette_cve"
    /**
     * Internal identifier for legal persons from CHN cninfo data */
    | "chn_cninfo_legal_person_id"
    /**
     * Chinese customs registration code. Downgraded to weak identifier. */
    | "chn_customs_registration_code"
    /**
     * Part of a Qichacha URL, used to uniquely identify people within the site */
    | "cn_qcc_internal_id"
    /**
     * National identification number for enterprises and associations (Senegal) */
    | "cofi_code"
    /**
     * Bill of lading number for Colombian trade data */
    | "col_bill_of_lading"
    /**
     * Matricula mercantil number, which is non-unique across different chambers of commerce */
    | "col_matricula_mercantil"
    /**
     * Colombian SECOP internal ID */
    | "col_secop_no"
    /**
     * Internal ID for Costa Rica comexport data (shipping operation number) */
    | "cri_op_no"
    /**
     * Czechia file number from MOJ registry */
    | "cze_file_number"
    /**
     * The company number given to each company listed in Handelsregister, the German Commercial Register. It is not unique unless combined with the district court XJustiz ID, which this weak identifier does not contain because in some cases it is not provided. */
    | "deu_registernummer"
    /**
     * Dominica Business Registry Entity Number */
    | "dma_corporate_registry_entity_num"
    /**
     * UK Bankruptcy and Insolvency Court Case Number linked to an individual subject to bankruptcies and insolvencies in England and Wales. */
    | "gbr_bankruptcy_case_num"
    /**
     * UK entity ID number assigned to entities registered in the UK Government Grants Information System */
    | "gbr_grant_info_number"
    /**
     * Georgian state registration number */
    | "geo_state_registration_number"
    /**
     * Notary office number for notaries in Honduras Tegucigalpa source */
    | "hnd_tegucigalpa_notary"
    /**
     * Internal ID for Hungarian companies by Opten Ltd */
    | "hun_opten_id"
    /**
     * Weak identifier. Assigned to entities registered with the Securities and Exchange Board of India. */
    | "ind_sebi"
    /**
     * Unique Ireland ID number. Assigned to every legal entity registered with Ireland Companies Registration Office. */
    | "irl_registration_no"
    /**
     * Iranian registration number */
    | "irn_reg_number"
    /**
     * Iraq Provision Card No. */
    | "irq_provision_card"
    /**
     * Number in registry per EBR */
    | "ita_ebr_reg_number"
    /**
     * EBR short search code */
    | "ita_ebr_short_search_code"
    /**
     * Weak identifier found in sole proprietor source */
    | "jor_sol_prop_institution_number"
    /**
     * Company number from Jordan corporate registry */
    | "jordan_company_no"
    /**
     * Japan Ministry of Land, Infrastructure, Transport and Tourism permit number */
    | "jpn_permit_no"
    /**
     * Kyrgyzstan INN */
    | "kgz_inn"
    /**
     * A unique identifier that is reissued when a company dissolves. Applies to Kyrgyz companies. */
    | "kgz_okpo"
    /**
     * Cambodia tax identification number */
    | "khm_tin_number"
    /**
     * Lebanese family number */
    | "lbn_family_number"
    | "lbn_registration_number"
    /**
     * St. Lucia Business Registry Entity Number */
    | "lca_corporate_registry_entity_num"
    /**
     * Latvian Court Case ID Number */
    | "lva_court_case_id"
    /**
     * Latvian Personal ID Number (last 5 digits masked) */
    | "lva_person_id_masked"
    /**
     * Case number for legal matters from Macao Tribunais da RAEM Judgments */
    | "mac_raem_case_number"
    /**
     * Unique call sign for vessels */
    | "maritime_call_sign"
    /**
     * Maritime Mobile Service Identity number. Learn more [here](https://en.wikipedia.org/wiki/Maritime_Mobile_Service_Identity) */
    | "maritime_mobile_service_identity"
    /**
     * Mobile Home HUD Number */
    | "mbl_hm_hud_num"
    /**
     * Mobile Home Serial Number */
    | "mbl_hm_sn"
    /**
     * Mobile Home Title Number */
    | "mbl_hm_title_num"
    /**
     * A tax identifier number (NIF) in Madagascar. */
    | "mdg_nif_number"
    /**
     * A tax identifier number (RCS) in Madagascar. */
    | "mdg_rcs_number"
    /**
     * Time stamp unique to each politician's filing on Declaranet */
    | "mex_declaranet_acuse"
    /**
     * Mexican trademark application number */
    | "mex_tm_app_no"
    /**
     * Mexican trademark registration number */
    | "mex_tm_reg_no"
    /**
     * Internal registration number for entities that have registered with HM Revenue & Customs under respective regulations for money laundering supervision and guidance. */
    | "mlr_reg_num"
    /**
     * Mexican FME */
    | "mx_fme"
    /**
     * Partial Mexican RFC */
    | "mx_partial_rfc_person"
    /**
     * Pakistan CNIC family number */
    | "pak_cnic_family_no"
    /**
     * Old Pakistan company code */
    | "pak_old_company_code"
    /**
     * Panama Folio No. */
    | "pan_folio"
    /**
     * Panama IBC RUC */
    | "pan_ibc_ruc"
    /**
     * An identification card or passport document for people in Venezuela */
    | "partial_ven_cedula"
    /**
     * Tax identification number from Poland */
    | "pol_nip_number"
    /**
     * The register REGON serves as the national official Register of National Economy Entities. */
    | "pol_regon_number"
    /**
     * North Korea-China trade internal ID number */
    | "prk_internal_trade_id"
    /**
     * Registration numbers for North Korean ships */
    | "prk_ship_reg_no"
    /**
     * Paraguay Shipment Number */
    | "pry_shipment_number"
    /**
     * Kosovo Business No. */
    | "rks_business_number"
    /**
     * A fiscal number from the Kosovo company registry */
    | "rks_fiscal_number"
    /**
     * An identifier from the Kosovo company registry */
    | "rks_kta_number"
    /**
     * Romanian Commercial Register ID (concatenated from jud_com, nr_com, and an_com from ROU/taxpayers) */
    | "rou_commercial_register_id"
    /**
     * Russian KPP, or tax registration event code */
    | "ru_kpp"
    /**
     * Label for various license numbers extracted from EGRUL (Russia Federal Tax Registry) documents */
    | "ru_license_number"
    /**
     * Foreign entity accreditation number */
    | "ru_nza"
    /**
     * A unique identifier that is reissued when a company dissolves. Applies to Russian companies. */
    | "ru_okpo"
    /**
     * Russia OKTMO (Russian Classification of Territories of Municipal Formations) */
    | "ru_oktmo"
    /**
     * Russia Central Bank ID */
    | "rus_cbr_id"
    /**
     * Partial South African ID number for individuals */
    | "south_africa_partial_id_number"
    /**
     * Tokyo Shoko Research Business Identifier. Identification code, assigned by credit reporting company, Tokyo Shoko Research, for businesses in Japan. */
    | "tokyo_shoko_id"
    /**
     * Turkey municipal trade registry ID number. Assigned by municipal chambers of commerce in Turkey. */
    | "tur_office_registration_number"
    /**
     * Partial Turkish Central Registry Number System (MERSIS) number */
    | "tur_partial_mersis_number"
    /**
     * Bexar Appraisal District GEO ID */
    | "tx_bexar_property_geo_id"
    /**
     * Learn more [here](https://www.wikidata.org/wiki/Property:P3125) */
    | "ukr_edrpou"
    /**
     * A string that is thought to be an ID number, but whose type is unknown */
    | "unknown"
    /**
     * Brazil Litigation Case No. */
    | "unknown_bra_case_number"
    /**
     * A chamber of commerce number of unknown origin */
    | "unknown_chamber_of_commerce_id"
    /**
     * A civil registration number whose country of origin is not known */
    | "unknown_civil_reg_num"
    /**
     * A commercial registration number of unknown origin */
    | "unknown_commercial_register_id"
    /**
     * A folio ID Number whose country of origin is not known */
    | "unknown_folio_id_num"
    /**
     * An industrial license number of unknown origin */
    | "unknown_industrial_license_num"
    /**
     * A license number of unknown origin */
    | "unknown_license_num"
    /**
     * A national ID number whose country of origin is not known */
    | "unknown_national_id_num"
    /**
     * A passport number whose country of origin is not known */
    | "unknown_passport"
    /**
     * A residency number whose country of origin is not known */
    | "unknown_residency_num"
    /**
     * Clean Air Markets Division Business Systems (CAMDBS) permit identifier */
    | "usa_camdbs_id"
    /**
     * USA Customs and Border Protection Withhold Release Order ID */
    | "usa_cbp_wro_id"
    /**
     * Compliance and Emissions Data Reporting Interface (CEDRI) permit identifier */
    | "usa_cedri_id"
    /**
     * Emissions Inventory System (EIS) permit identifier */
    | "usa_eis_id"
    /**
     * USA EPA Facility Registry System */
    | "usa_epa_facility_registry_system"
    /**
     * Former USA/IRS FEI/EIN Number */
    | "usa_former_fein"
    /**
     * Facility Registry Service (FRS) permit identifier */
    | "usa_frs_id"
    /**
     * Ticker symbol for securities without exchange information */
    | "usa_generic_ticker"
    /**
     * Greenhouse Gas Reporting Program (GHGRP) permit identifier */
    | "usa_ghgrp_id"
    /**
     * Integrated Compliance Information System for Air (ICIS-Air) permit identifier */
    | "usa_icis_air_id"
    /**
     * Integrated Compliance Information System (ICIS) permit identifier */
    | "usa_icis_id"
    /**
     * Integrated Compliance Information System (ICIS) National Pollutant Discharge Elimination System (NPDES) permit identifier */
    | "usa_icis_npdes_id"
    /**
     * Site number of business registered in Chicago, Illinois, business license registry (unique to account number) */
    | "usa_il_chicago_site_number"
    /**
     * Identifier for shipment transactions */
    | "usa_imports_system_identity_id"
    /**
     * USA Minnesota Secretary of State Filing Number */
    | "usa_mn_filing_number"
    /**
     * Corporation Number from USA Missouri Corporate Registry. Used on SOS search. */
    | "usa_mo_corp_number"
    /**
     * Entity ID from USA Missouri Corporate Registry */
    | "usa_mo_entity_id"
    /**
     * USA North Carolina SOS corporation number */
    | "usa_nc_corp_no"
    /**
     * USA New Mexico Secretary of State License ID */
    | "usa_nm_license_id"
    /**
     * Resource Conservation and Recovery Act (RCRA) permit identifier */
    | "usa_rcra_info_id"
    /**
     * Risk Management Program (RMP) permit identifier */
    | "usa_rmp_id"
    /**
     * Safe Drinking Water Information System (SDWIS) permit identifier */
    | "usa_sdwis_id"
    /**
     * Superfund Enterprise Management System (SEMS) permit identifier */
    | "usa_sems_id"
    /**
     * Toxic Release Inventory (TRI) permit identifier */
    | "usa_tri_id"
    /**
     * Toxic Substances Control Act (TSCA) permit identifier */
    | "usa_tsca_id"
    /**
     * Value-added tax ID number */
    | "vat"
    /**
     * Identification number for Venezuelan comisarios */
    | "ven_colegiado_number"
    /**
     * Manifiesto number for Venezuelan shipments */
    | "ven_manifiesto_number"
    /**
     * A certificate number for the National Registry of Contractors in Venezuela */
    | "ven_rnc_number"
    /**
     * A temporary malformed type */
    | "malformed mmr_prior_reg_no";
export const WeakIdentifierType = {
    ArgIgjNumber: "arg_igj_number",
    ArgImportExportId: "arg_import_export_id",
    AtgCorporateRegistryEntityNum: "atg_corporate_registry_entity_num",
    AusAsicDisqualifiedPersonsNumber: "aus_asic_disqualified_persons_number",
    AusStateRegNumber: "aus_state_reg_number",
    AutFormerCrNo: "aut_former_cr_no",
    AutNatlBankNo: "aut_natl_bank_no",
    BihMbsNumber: "bih_mbs_number",
    BillOfLading: "bill_of_lading",
    BmuRegistrationNumber: "bmu_registration_number",
    BraPartialCpf: "bra_partial_cpf",
    BrazilianOab: "brazilian_oab",
    CcsShipClassNumber: "ccs_ship_class_number",
    ChlSantiagoGazetteCve: "chl_santiago_gazette_cve",
    ChnCninfoLegalPersonId: "chn_cninfo_legal_person_id",
    ChnCustomsRegistrationCode: "chn_customs_registration_code",
    CnQccInternalId: "cn_qcc_internal_id",
    CofiCode: "cofi_code",
    ColBillOfLading: "col_bill_of_lading",
    ColMatriculaMercantil: "col_matricula_mercantil",
    ColSecopNo: "col_secop_no",
    CriOpNo: "cri_op_no",
    CzeFileNumber: "cze_file_number",
    DeuRegisternummer: "deu_registernummer",
    DmaCorporateRegistryEntityNum: "dma_corporate_registry_entity_num",
    GbrBankruptcyCaseNum: "gbr_bankruptcy_case_num",
    GbrGrantInfoNumber: "gbr_grant_info_number",
    GeoStateRegistrationNumber: "geo_state_registration_number",
    HndTegucigalpaNotary: "hnd_tegucigalpa_notary",
    HunOptenId: "hun_opten_id",
    IndSebi: "ind_sebi",
    IrlRegistrationNo: "irl_registration_no",
    IrnRegNumber: "irn_reg_number",
    IrqProvisionCard: "irq_provision_card",
    ItaEbrRegNumber: "ita_ebr_reg_number",
    ItaEbrShortSearchCode: "ita_ebr_short_search_code",
    JorSolPropInstitutionNumber: "jor_sol_prop_institution_number",
    JordanCompanyNo: "jordan_company_no",
    JpnPermitNo: "jpn_permit_no",
    KgzInn: "kgz_inn",
    KgzOkpo: "kgz_okpo",
    KhmTinNumber: "khm_tin_number",
    LbnFamilyNumber: "lbn_family_number",
    LbnRegistrationNumber: "lbn_registration_number",
    LcaCorporateRegistryEntityNum: "lca_corporate_registry_entity_num",
    LvaCourtCaseId: "lva_court_case_id",
    LvaPersonIdMasked: "lva_person_id_masked",
    MacRaemCaseNumber: "mac_raem_case_number",
    MaritimeCallSign: "maritime_call_sign",
    MaritimeMobileServiceIdentity: "maritime_mobile_service_identity",
    MblHmHudNum: "mbl_hm_hud_num",
    MblHmSn: "mbl_hm_sn",
    MblHmTitleNum: "mbl_hm_title_num",
    MdgNifNumber: "mdg_nif_number",
    MdgRcsNumber: "mdg_rcs_number",
    MexDeclaranetAcuse: "mex_declaranet_acuse",
    MexTmAppNo: "mex_tm_app_no",
    MexTmRegNo: "mex_tm_reg_no",
    MlrRegNum: "mlr_reg_num",
    MxFme: "mx_fme",
    MxPartialRfcPerson: "mx_partial_rfc_person",
    PakCnicFamilyNo: "pak_cnic_family_no",
    PakOldCompanyCode: "pak_old_company_code",
    PanFolio: "pan_folio",
    PanIbcRuc: "pan_ibc_ruc",
    PartialVenCedula: "partial_ven_cedula",
    PolNipNumber: "pol_nip_number",
    PolRegonNumber: "pol_regon_number",
    PrkInternalTradeId: "prk_internal_trade_id",
    PrkShipRegNo: "prk_ship_reg_no",
    PryShipmentNumber: "pry_shipment_number",
    RksBusinessNumber: "rks_business_number",
    RksFiscalNumber: "rks_fiscal_number",
    RksKtaNumber: "rks_kta_number",
    RouCommercialRegisterId: "rou_commercial_register_id",
    RuKpp: "ru_kpp",
    RuLicenseNumber: "ru_license_number",
    RuNza: "ru_nza",
    RuOkpo: "ru_okpo",
    RuOktmo: "ru_oktmo",
    RusCbrId: "rus_cbr_id",
    SouthAfricaPartialIdNumber: "south_africa_partial_id_number",
    TokyoShokoId: "tokyo_shoko_id",
    TurOfficeRegistrationNumber: "tur_office_registration_number",
    TurPartialMersisNumber: "tur_partial_mersis_number",
    TxBexarPropertyGeoId: "tx_bexar_property_geo_id",
    UkrEdrpou: "ukr_edrpou",
    Unknown: "unknown",
    UnknownBraCaseNumber: "unknown_bra_case_number",
    UnknownChamberOfCommerceId: "unknown_chamber_of_commerce_id",
    UnknownCivilRegNum: "unknown_civil_reg_num",
    UnknownCommercialRegisterId: "unknown_commercial_register_id",
    UnknownFolioIdNum: "unknown_folio_id_num",
    UnknownIndustrialLicenseNum: "unknown_industrial_license_num",
    UnknownLicenseNum: "unknown_license_num",
    UnknownNationalIdNum: "unknown_national_id_num",
    UnknownPassport: "unknown_passport",
    UnknownResidencyNum: "unknown_residency_num",
    UsaCamdbsId: "usa_camdbs_id",
    UsaCbpWroId: "usa_cbp_wro_id",
    UsaCedriId: "usa_cedri_id",
    UsaEisId: "usa_eis_id",
    UsaEpaFacilityRegistrySystem: "usa_epa_facility_registry_system",
    UsaFormerFein: "usa_former_fein",
    UsaFrsId: "usa_frs_id",
    UsaGenericTicker: "usa_generic_ticker",
    UsaGhgrpId: "usa_ghgrp_id",
    UsaIcisAirId: "usa_icis_air_id",
    UsaIcisId: "usa_icis_id",
    UsaIcisNpdesId: "usa_icis_npdes_id",
    UsaIlChicagoSiteNumber: "usa_il_chicago_site_number",
    UsaImportsSystemIdentityId: "usa_imports_system_identity_id",
    UsaMnFilingNumber: "usa_mn_filing_number",
    UsaMoCorpNumber: "usa_mo_corp_number",
    UsaMoEntityId: "usa_mo_entity_id",
    UsaNcCorpNo: "usa_nc_corp_no",
    UsaNmLicenseId: "usa_nm_license_id",
    UsaRcraInfoId: "usa_rcra_info_id",
    UsaRmpId: "usa_rmp_id",
    UsaSdwisId: "usa_sdwis_id",
    UsaSemsId: "usa_sems_id",
    UsaTriId: "usa_tri_id",
    UsaTscaId: "usa_tsca_id",
    Vat: "vat",
    VenColegiadoNumber: "ven_colegiado_number",
    VenManifiestoNumber: "ven_manifiesto_number",
    VenRncNumber: "ven_rnc_number",
    MalformedMmrPriorRegNo: "malformed mmr_prior_reg_no",
} as const;
