/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SayariAnalyticsApi from "../../../index";

/**
 * The entity that is possibly the same as the target entity.
 */
export interface PsaEntity extends SayariAnalyticsApi.EmbeddedEntity {
    risk: SayariAnalyticsApi.EntityRisk;
    registrationDate?: SayariAnalyticsApi.EntityRegistrationDate;
    companyType?: SayariAnalyticsApi.CompanyType;
    latestStatus?: SayariAnalyticsApi.Status;
}
