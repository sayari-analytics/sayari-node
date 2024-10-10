/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This represents which type of entity is being returned.
 */
export type Entities =
    /**
     * A shipment between two entities */
    | "shipment"
    /**
     * An unknown placeholder entity. Rarely used. An unknown entity has insufficient information to be grouped by an existing entity type. */
    | "unknown"
    /**
     * An airplane, helicopter, or other vehicle that travels by flight */
    | "aircraft"
    /**
     * A cargo ship, oil tanker, fishing trawler, or other type of watercraft */
    | "vessel"
    /**
     * A tradable financial asset */
    | "security"
    /**
     * A discretely registered name used by a person or company not operating under its legal name. This includes doing-business-as (DBA) names, fictitious names, etc. in jurisdictions that treat them as registered objects distinct from the person/company using them. */
    | "tradename"
    /**
     * A civil or criminal legal case or similar type of proceeding */
    | "legal_matter"
    /**
     * A legal entity or organization */
    | "company"
    /**
     * A generic placeholder entity. Rarely used. A generic entity typically does not fit any other entity type. */
    | "generic"
    /**
     * Land, real estate, real property, or personal property not categorized under another entity type */
    | "property"
    /**
     * A trademark, patent, copyright, or similar type of intangible property */
    | "intellectual_property"
    /**
     * A natural person (human being) */
    | "person";

export const Entities = {
    Shipment: "shipment",
    Unknown: "unknown",
    Aircraft: "aircraft",
    Vessel: "vessel",
    Security: "security",
    Tradename: "tradename",
    LegalMatter: "legal_matter",
    Company: "company",
    Generic: "generic",
    Property: "property",
    IntellectualProperty: "intellectual_property",
    Person: "person",
} as const;
