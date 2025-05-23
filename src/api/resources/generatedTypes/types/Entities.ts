/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This represents which type of entity is being returned.
 */
export type Entities =
    /**
     * A financial account */
    | "account"
    /**
     * An airplane, helicopter, or other vehicle that travels by flight */
    | "aircraft"
    /**
     * A legal entity or organization */
    | "company"
    /**
     * A generic placeholder entity. Rarely used. A generic entity typically does not fit any other entity type. */
    | "generic"
    /**
     * A trademark, patent, copyright, or similar type of intangible property */
    | "intellectual_property"
    /**
     * A civil or criminal legal case or similar type of proceeding */
    | "legal_matter"
    /**
     * A natural person (human being) */
    | "person"
    /**
     * Land, real estate, real property, or personal property not categorized under another entity type */
    | "property"
    /**
     * A tradable financial asset */
    | "security"
    /**
     * A shipment between two entities */
    | "shipment"
    /**
     * A discretely registered name used by a person or company not operating under its legal name. This includes doing-business-as (DBA) names, fictitious names, etc. in jurisdictions that treat them as registered objects distinct from the person/company using them. */
    | "tradename"
    /**
     * A financial transaction */
    | "transaction"
    /**
     * An unknown placeholder entity. Rarely used. An unknown entity has insufficient information to be grouped by an existing entity type. */
    | "unknown"
    /**
     * A cargo ship, oil tanker, fishing trawler, or other type of watercraft */
    | "vessel";
export const Entities = {
    Account: "account",
    Aircraft: "aircraft",
    Company: "company",
    Generic: "generic",
    IntellectualProperty: "intellectual_property",
    LegalMatter: "legal_matter",
    Person: "person",
    Property: "property",
    Security: "security",
    Shipment: "shipment",
    Tradename: "tradename",
    Transaction: "transaction",
    Unknown: "unknown",
    Vessel: "vessel",
} as const;
