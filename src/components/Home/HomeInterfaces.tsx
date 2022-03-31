export interface Spa {
    official: string;
    common: string;
}

export interface Grn {
    official: string;
    common: string;
}

export interface Eng {
    official: string;
    common: string;
}

export interface Ara {
    official: string;
    common: string;
}

export interface Fra {
    official: string;
    common: string;
}

export interface Cha {
    official: string;
    common: string;
}

export interface Kat {
    official: string;
    common: string;
}

export interface Bjz {
    official: string;
    common: string;
}

export interface Mfe {
    official: string;
    common: string;
}

export interface Mah {
    official: string;
    common: string;
}

export interface NativeName {
    spa: Spa;
    grn: Grn;
    eng: Eng;
    ara: Ara;
    fra: Fra;
    cha: Cha;
    kat: Kat;
    bjz: Bjz;
    mfe: Mfe;
    mah: Mah;
}

export interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}

export interface UYU {
    name: string;
    symbol: string;
}

export interface PYG {
    name: string;
    symbol: string;
}

export interface GMD {
    name: string;
    symbol: string;
}

export interface DJF {
    name: string;
    symbol: string;
}

export interface EUR {
    name: string;
    symbol: string;
}

export interface USD {
    name: string;
    symbol: string;
}

export interface GEL {
    name: string;
    symbol: string;
}

export interface BZD {
    name: string;
    symbol: string;
}

export interface MUR {
    name: string;
    symbol: string;
}

export interface LBP {
    name: string;
    symbol: string;
}

export interface SAR {
    name: string;
    symbol: string;
}

export interface Currencies {
    UYU: UYU;
    PYG: PYG;
    GMD: GMD;
    DJF: DJF;
    EUR: EUR;
    USD: USD;
    GEL: GEL;
    BZD: BZD;
    MUR: MUR;
    LBP: LBP;
    SAR: SAR;
}

export interface Idd {
    root: string;
    suffixes: string[];
}

export interface Languages {
    spa: string;
    grn: string;
    eng: string;
    ara: string;
    fra: string;
    cha: string;
    kat: string;
    bjz: string;
    mfe: string;
    mah: string;
}

export interface Ara2 {
    official: string;
    common: string;
}

export interface Ces {
    official: string;
    common: string;
}

export interface Cym {
    official: string;
    common: string;
}

export interface Deu {
    official: string;
    common: string;
}

export interface Est {
    official: string;
    common: string;
}

export interface Fin {
    official: string;
    common: string;
}

export interface Fra2 {
    official: string;
    common: string;
}

export interface Hrv {
    official: string;
    common: string;
}

export interface Hun {
    official: string;
    common: string;
}

export interface Ita {
    official: string;
    common: string;
}

export interface Jpn {
    official: string;
    common: string;
}

export interface Kor {
    official: string;
    common: string;
}

export interface Nld {
    official: string;
    common: string;
}

export interface Per {
    official: string;
    common: string;
}

export interface Pol {
    official: string;
    common: string;
}

export interface Por {
    official: string;
    common: string;
}

export interface Rus {
    official: string;
    common: string;
}

export interface Slk {
    official: string;
    common: string;
}

export interface Spa2 {
    official: string;
    common: string;
}

export interface Swe {
    official: string;
    common: string;
}

export interface Urd {
    official: string;
    common: string;
}

export interface Zho {
    official: string;
    common: string;
}

export interface Translations {
    ara: Ara2;
    ces: Ces;
    cym: Cym;
    deu: Deu;
    est: Est;
    fin: Fin;
    fra: Fra2;
    hrv: Hrv;
    hun: Hun;
    ita: Ita;
    jpn: Jpn;
    kor: Kor;
    nld: Nld;
    per: Per;
    pol: Pol;
    por: Por;
    rus: Rus;
    slk: Slk;
    spa: Spa2;
    swe: Swe;
    urd: Urd;
    zho: Zho;
}

export interface Eng2 {
    f: string;
    m: string;
}

export interface Fra3 {
    f: string;
    m: string;
}

export interface Demonyms {
    eng: Eng2;
    fra: Fra3;
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Gini {
    2019: number;
    2015?: number;
    2017?: number;
    2018?: number;
    1999?: number;
    2011?: number;
}

export interface Car {
    signs: string[];
    side: string;
}

export interface Flags {
    png: string;
    svg: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface PostalCode {
    format: string;
    regex: string;
}

export interface RootObject {
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}