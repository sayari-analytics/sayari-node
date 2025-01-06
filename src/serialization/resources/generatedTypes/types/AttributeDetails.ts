/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Sayari from "../../../../api/index";
import * as core from "../../../../core";
import { AdditionalInformationInfo } from "./AdditionalInformationInfo";
import { AddressInfo } from "./AddressInfo";
import { BusinessPurposeInfo } from "./BusinessPurposeInfo";
import { CompanyTypeInfo } from "./CompanyTypeInfo";
import { ContactInfo } from "./ContactInfo";
import { CountryInfo } from "./CountryInfo";
import { DateOfBirthInfo } from "./DateOfBirthInfo";
import { FinancesInfo } from "./FinancesInfo";
import { FinancialsInfo } from "./FinancialsInfo";
import { GenderInfo } from "./GenderInfo";
import { GenericInfo } from "./GenericInfo";
import { IdentifierInfo } from "./IdentifierInfo";
import { MeasurementInfo } from "./MeasurementInfo";
import { MonetaryValueInfo } from "./MonetaryValueInfo";
import { NameInfo } from "./NameInfo";
import { PersonStatusInfo } from "./PersonStatusInfo";
import { PositionInfo } from "./PositionInfo";
import { RiskIntelligenceInfo } from "./RiskIntelligenceInfo";
import { SharesInfo } from "./SharesInfo";
import { StatusInfo } from "./StatusInfo";
import { TranslatedNameInfo } from "./TranslatedNameInfo";
import { WeakIdentifierInfo } from "./WeakIdentifierInfo";

export const AttributeDetails: core.serialization.ObjectSchema<
    serializers.AttributeDetails.Raw,
    Sayari.AttributeDetails
> = core.serialization.object({
    additionalInformation: core.serialization.property("additional_information", AdditionalInformationInfo.optional()),
    address: AddressInfo.optional(),
    businessPurpose: core.serialization.property("business_purpose", BusinessPurposeInfo.optional()),
    companyType: core.serialization.property("company_type", CompanyTypeInfo.optional()),
    contact: ContactInfo.optional(),
    country: CountryInfo.optional(),
    dateOfBirth: core.serialization.property("date_of_birth", DateOfBirthInfo.optional()),
    finances: FinancesInfo.optional(),
    financials: FinancialsInfo.optional(),
    gender: GenderInfo.optional(),
    generic: GenericInfo.optional(),
    identifier: IdentifierInfo.optional(),
    measurement: MeasurementInfo.optional(),
    monetaryValue: core.serialization.property("monetary_value", MonetaryValueInfo.optional()),
    name: NameInfo.optional(),
    personStatus: core.serialization.property("person_status", PersonStatusInfo.optional()),
    position: PositionInfo.optional(),
    riskIntelligence: core.serialization.property("risk_intelligence", RiskIntelligenceInfo.optional()),
    shares: SharesInfo.optional(),
    status: StatusInfo.optional(),
    translatedName: core.serialization.property("translated_name", TranslatedNameInfo.optional()),
    weakIdentifier: core.serialization.property("weak_identifier", WeakIdentifierInfo.optional()),
});

export declare namespace AttributeDetails {
    export interface Raw {
        additional_information?: AdditionalInformationInfo.Raw | null;
        address?: AddressInfo.Raw | null;
        business_purpose?: BusinessPurposeInfo.Raw | null;
        company_type?: CompanyTypeInfo.Raw | null;
        contact?: ContactInfo.Raw | null;
        country?: CountryInfo.Raw | null;
        date_of_birth?: DateOfBirthInfo.Raw | null;
        finances?: FinancesInfo.Raw | null;
        financials?: FinancialsInfo.Raw | null;
        gender?: GenderInfo.Raw | null;
        generic?: GenericInfo.Raw | null;
        identifier?: IdentifierInfo.Raw | null;
        measurement?: MeasurementInfo.Raw | null;
        monetary_value?: MonetaryValueInfo.Raw | null;
        name?: NameInfo.Raw | null;
        person_status?: PersonStatusInfo.Raw | null;
        position?: PositionInfo.Raw | null;
        risk_intelligence?: RiskIntelligenceInfo.Raw | null;
        shares?: SharesInfo.Raw | null;
        status?: StatusInfo.Raw | null;
        translated_name?: TranslatedNameInfo.Raw | null;
        weak_identifier?: WeakIdentifierInfo.Raw | null;
    }
}
