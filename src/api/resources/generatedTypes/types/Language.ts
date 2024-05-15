/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Language enums are normalized representations of languages. [Source](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
 */
export type Language =
    /**
     * Afar */
    | "aa"
    /**
     * Abkhazian */
    | "ab"
    /**
     * Afrikaans */
    | "af"
    /**
     * Akan */
    | "ak"
    /**
     * Albanian */
    | "sq"
    /**
     * Amharic */
    | "am"
    /**
     * Arabic */
    | "ar"
    /**
     * Aragonese */
    | "an"
    /**
     * Armenian */
    | "hy"
    /**
     * Assamese */
    | "as"
    /**
     * Avaric */
    | "av"
    /**
     * Avestan */
    | "ae"
    /**
     * Aymara */
    | "ay"
    /**
     * Azerbaijani */
    | "az"
    /**
     * Bashkir */
    | "ba"
    /**
     * Bambara */
    | "bm"
    /**
     * Basque */
    | "eu"
    /**
     * Belarusian */
    | "be"
    /**
     * Bengali */
    | "bn"
    /**
     * Bihari languages */
    | "bh"
    /**
     * Bislama */
    | "bi"
    /**
     * Bosnian */
    | "bs"
    /**
     * Breton */
    | "br"
    /**
     * Bulgarian */
    | "bg"
    /**
     * Burmese */
    | "my"
    /**
     * Catalan; Valencian */
    | "ca"
    /**
     * Chamorro */
    | "ch"
    /**
     * Chechen */
    | "ce"
    /**
     * Chinese */
    | "zh"
    /**
     * Church Slavic; Old Slavonic; Church Slavonic; Old Bulgarian; Old Church Slavonic */
    | "cu"
    /**
     * Chuvash */
    | "cv"
    /**
     * Cornish */
    | "kw"
    /**
     * Corsican */
    | "co"
    /**
     * Cree */
    | "cr"
    /**
     * Czech */
    | "cs"
    /**
     * Danish */
    | "da"
    /**
     * Divehi; Dhivehi; Maldivian */
    | "dv"
    /**
     * Dutch; Flemish */
    | "nl"
    /**
     * Dzongkha */
    | "dz"
    /**
     * English */
    | "en"
    /**
     * Esperanto */
    | "eo"
    /**
     * Estonian */
    | "et"
    /**
     * Ewe */
    | "ee"
    /**
     * Faroese */
    | "fo"
    /**
     * Fijian */
    | "fj"
    /**
     * Finnish */
    | "fi"
    /**
     * French */
    | "fr"
    /**
     * Western Frisian */
    | "fy"
    /**
     * Fulah */
    | "ff"
    /**
     * Georgian */
    | "ka"
    /**
     * German */
    | "de"
    /**
     * Gaelic; Scottish Gaelic */
    | "gd"
    /**
     * Irish */
    | "ga"
    /**
     * Galician */
    | "gl"
    /**
     * Manx */
    | "gv"
    /**
     * Greek, Modern (1453-) */
    | "el"
    /**
     * Guarani */
    | "gn"
    /**
     * Gujarati */
    | "gu"
    /**
     * Haitian; Haitian Creole */
    | "ht"
    /**
     * Hausa */
    | "ha"
    /**
     * Hebrew */
    | "he"
    /**
     * Herero */
    | "hz"
    /**
     * Hindi */
    | "hi"
    /**
     * Hiri Motu */
    | "ho"
    /**
     * Croatian */
    | "hr"
    /**
     * Hungarian */
    | "hu"
    /**
     * Igbo */
    | "ig"
    /**
     * Icelandic */
    | "is"
    /**
     * Ido */
    | "io"
    /**
     * Sichuan Yi; Nuosu */
    | "ii"
    /**
     * Inuktitut */
    | "iu"
    /**
     * Interlingue; Occidental */
    | "ie"
    /**
     * Interlingua (International Auxiliary Language Association) */
    | "ia"
    /**
     * Indonesian */
    | "id"
    /**
     * Inupiaq */
    | "ik"
    /**
     * Italian */
    | "it"
    /**
     * Javanese */
    | "jv"
    /**
     * Japanese */
    | "ja"
    /**
     * Kalaallisut; Greenlandic */
    | "kl"
    /**
     * Kannada */
    | "kn"
    /**
     * Kashmiri */
    | "ks"
    /**
     * Kanuri */
    | "kr"
    /**
     * Kazakh */
    | "kk"
    /**
     * Central Khmer */
    | "km"
    /**
     * Kikuyu; Gikuyu */
    | "ki"
    /**
     * Kinyarwanda */
    | "rw"
    /**
     * Kirghiz; Kyrgyz */
    | "ky"
    /**
     * Komi */
    | "kv"
    /**
     * Kongo */
    | "kg"
    /**
     * Korean */
    | "ko"
    /**
     * Kuanyama; Kwanyama */
    | "kj"
    /**
     * Kurdish */
    | "ku"
    /**
     * Lao */
    | "lo"
    /**
     * Latin */
    | "la"
    /**
     * Latvian */
    | "lv"
    /**
     * Limburgan; Limburger; Limburgish */
    | "li"
    /**
     * Lingala */
    | "ln"
    /**
     * Lithuanian */
    | "lt"
    /**
     * Luxembourgish; Letzeburgesch */
    | "lb"
    /**
     * Luba-Katanga */
    | "lu"
    /**
     * Ganda */
    | "lg"
    /**
     * Macedonian */
    | "mk"
    /**
     * Marshallese */
    | "mh"
    /**
     * Malayalam */
    | "ml"
    /**
     * Maori */
    | "mi"
    /**
     * Marathi */
    | "mr"
    /**
     * Malay */
    | "ms"
    /**
     * Malagasy */
    | "mg"
    /**
     * Maltese */
    | "mt"
    /**
     * Mongolian */
    | "mn"
    /**
     * Nauru */
    | "na"
    /**
     * Navajo; Navaho */
    | "nv"
    /**
     * Ndebele, South; South Ndebele */
    | "nr"
    /**
     * Ndebele, North; North Ndebele */
    | "nd"
    /**
     * Ndonga */
    | "ng"
    /**
     * Nepali */
    | "ne"
    /**
     * Norwegian Nynorsk; Nynorsk, Norwegian */
    | "nn"
    /**
     * Bokmål, Norwegian; Norwegian Bokmål */
    | "nb"
    /**
     * Norwegian */
    | "no"
    /**
     * Chichewa; Chewa; Nyanja */
    | "ny"
    /**
     * Occitan (post 1500); Provençal */
    | "oc"
    /**
     * Ojibwa */
    | "oj"
    /**
     * Oriya */
    | "or"
    /**
     * Oromo */
    | "om"
    /**
     * Ossetian; Ossetic */
    | "os"
    /**
     * Panjabi; Punjabi */
    | "pa"
    /**
     * Persian */
    | "fa"
    /**
     * Pali */
    | "pi"
    /**
     * Polish */
    | "pl"
    /**
     * Portuguese */
    | "pt"
    /**
     * Pushto; Pashto */
    | "ps"
    /**
     * Quechua */
    | "qu"
    /**
     * Romansh */
    | "rm"
    /**
     * Romanian; Moldavian; Moldovan */
    | "ro"
    /**
     * Rundi */
    | "rn"
    /**
     * Russian */
    | "ru"
    /**
     * Sango */
    | "sg"
    /**
     * Sanskrit */
    | "sa"
    /**
     * Sinhala; Sinhalese */
    | "si"
    /**
     * Slovak */
    | "sk"
    /**
     * Slovenian */
    | "sl"
    /**
     * Northern Sami */
    | "se"
    /**
     * Samoan */
    | "sm"
    /**
     * Shona */
    | "sn"
    /**
     * Sindhi */
    | "sd"
    /**
     * Somali */
    | "so"
    /**
     * Sotho, Southern */
    | "st"
    /**
     * Spanish; Castilian */
    | "es"
    /**
     * Sardinian */
    | "sc"
    /**
     * Serbian */
    | "sr"
    /**
     * Swati */
    | "ss"
    /**
     * Sundanese */
    | "su"
    /**
     * Swahili */
    | "sw"
    /**
     * Swedish */
    | "sv"
    /**
     * Tahitian */
    | "ty"
    /**
     * Tamil */
    | "ta"
    /**
     * Tatar */
    | "tt"
    /**
     * Telugu */
    | "te"
    /**
     * Tajik */
    | "tg"
    /**
     * Tagalog */
    | "tl"
    /**
     * Thai */
    | "th"
    /**
     * Tibetan */
    | "bo"
    /**
     * Tigrinya */
    | "ti"
    /**
     * Tonga (Tonga Islands) */
    | "to"
    /**
     * Tswana */
    | "tn"
    /**
     * Tsonga */
    | "ts"
    /**
     * Turkmen */
    | "tk"
    /**
     * Turkish */
    | "tr"
    /**
     * Twi */
    | "tw"
    /**
     * Uighur; Uyghur */
    | "ug"
    /**
     * Ukrainian */
    | "uk"
    /**
     * Urdu */
    | "ur"
    /**
     * Uzbek */
    | "uz"
    /**
     * Venda */
    | "ve"
    /**
     * Vietnamese */
    | "vi"
    /**
     * Volapük */
    | "vo"
    /**
     * Welsh */
    | "cy"
    /**
     * Walloon */
    | "wa"
    /**
     * Wolof */
    | "wo"
    /**
     * Xhosa */
    | "xh"
    /**
     * Yiddish */
    | "yi"
    /**
     * Yoruba */
    | "yo"
    /**
     * Zhuang; Chuang */
    | "za"
    /**
     * Zulu */
    | "zu";

export const Language = {
    Aa: "aa",
    Ab: "ab",
    Af: "af",
    Ak: "ak",
    Sq: "sq",
    Am: "am",
    Ar: "ar",
    An: "an",
    Hy: "hy",
    As: "as",
    Av: "av",
    Ae: "ae",
    Ay: "ay",
    Az: "az",
    Ba: "ba",
    Bm: "bm",
    Eu: "eu",
    Be: "be",
    Bn: "bn",
    Bh: "bh",
    Bi: "bi",
    Bs: "bs",
    Br: "br",
    Bg: "bg",
    My: "my",
    Ca: "ca",
    Ch: "ch",
    Ce: "ce",
    Zh: "zh",
    Cu: "cu",
    Cv: "cv",
    Kw: "kw",
    Co: "co",
    Cr: "cr",
    Cs: "cs",
    Da: "da",
    Dv: "dv",
    Nl: "nl",
    Dz: "dz",
    En: "en",
    Eo: "eo",
    Et: "et",
    Ee: "ee",
    Fo: "fo",
    Fj: "fj",
    Fi: "fi",
    Fr: "fr",
    Fy: "fy",
    Ff: "ff",
    Ka: "ka",
    De: "de",
    Gd: "gd",
    Ga: "ga",
    Gl: "gl",
    Gv: "gv",
    El: "el",
    Gn: "gn",
    Gu: "gu",
    Ht: "ht",
    Ha: "ha",
    He: "he",
    Hz: "hz",
    Hi: "hi",
    Ho: "ho",
    Hr: "hr",
    Hu: "hu",
    Ig: "ig",
    Is: "is",
    Io: "io",
    Ii: "ii",
    Iu: "iu",
    Ie: "ie",
    Ia: "ia",
    Id: "id",
    Ik: "ik",
    It: "it",
    Jv: "jv",
    Ja: "ja",
    Kl: "kl",
    Kn: "kn",
    Ks: "ks",
    Kr: "kr",
    Kk: "kk",
    Km: "km",
    Ki: "ki",
    Rw: "rw",
    Ky: "ky",
    Kv: "kv",
    Kg: "kg",
    Ko: "ko",
    Kj: "kj",
    Ku: "ku",
    Lo: "lo",
    La: "la",
    Lv: "lv",
    Li: "li",
    Ln: "ln",
    Lt: "lt",
    Lb: "lb",
    Lu: "lu",
    Lg: "lg",
    Mk: "mk",
    Mh: "mh",
    Ml: "ml",
    Mi: "mi",
    Mr: "mr",
    Ms: "ms",
    Mg: "mg",
    Mt: "mt",
    Mn: "mn",
    Na: "na",
    Nv: "nv",
    Nr: "nr",
    Nd: "nd",
    Ng: "ng",
    Ne: "ne",
    Nn: "nn",
    Nb: "nb",
    No: "no",
    Ny: "ny",
    Oc: "oc",
    Oj: "oj",
    Or: "or",
    Om: "om",
    Os: "os",
    Pa: "pa",
    Fa: "fa",
    Pi: "pi",
    Pl: "pl",
    Pt: "pt",
    Ps: "ps",
    Qu: "qu",
    Rm: "rm",
    Ro: "ro",
    Rn: "rn",
    Ru: "ru",
    Sg: "sg",
    Sa: "sa",
    Si: "si",
    Sk: "sk",
    Sl: "sl",
    Se: "se",
    Sm: "sm",
    Sn: "sn",
    Sd: "sd",
    So: "so",
    St: "st",
    Es: "es",
    Sc: "sc",
    Sr: "sr",
    Ss: "ss",
    Su: "su",
    Sw: "sw",
    Sv: "sv",
    Ty: "ty",
    Ta: "ta",
    Tt: "tt",
    Te: "te",
    Tg: "tg",
    Tl: "tl",
    Th: "th",
    Bo: "bo",
    Ti: "ti",
    To: "to",
    Tn: "tn",
    Ts: "ts",
    Tk: "tk",
    Tr: "tr",
    Tw: "tw",
    Ug: "ug",
    Uk: "uk",
    Ur: "ur",
    Uz: "uz",
    Ve: "ve",
    Vi: "vi",
    Vo: "vo",
    Cy: "cy",
    Wa: "wa",
    Wo: "wo",
    Xh: "xh",
    Yi: "yi",
    Yo: "yo",
    Za: "za",
    Zu: "zu",
} as const;