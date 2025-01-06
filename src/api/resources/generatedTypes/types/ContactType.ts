/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Contact type enums describe different methods of contact reported in a record about a given entity.
 */
export type ContactType =
    /**
     * An email address */
    | "email"
    /**
     * A fax number */
    | "fax"
    /**
     * Any kind of phone number */
    | "phone_number"
    /**
     * A URL */
    | "url";
export const ContactType = {
    Email: "email",
    Fax: "fax",
    PhoneNumber: "phone_number",
    Url: "url",
} as const;
