/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Gender enums are normalized ways to refer to different genders.
 */
export type Gender =
    /**
     * Refers to a male person */
    | "male"
    /**
     * Refers to a female person */
    | "female"
    /**
     * Indicates a gender other than male or female */
    | "other";

export const Gender = {
    Male: "male",
    Female: "female",
    Other: "other",
} as const;
