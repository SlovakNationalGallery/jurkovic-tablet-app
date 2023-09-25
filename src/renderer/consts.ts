export type Lang = "en" | "sk"

type Publication = {
    id: string,
    pages: Number,
    featuredPages: number[]
}

export const TRANSLATIONS = {
    sk: {
        sng: "Slovenská národná galéria",
        igorGazdikCollection: "Výber z knižnej zbierky Igora Gazdíka",
        igorGazdikCollectionDescription: [
            "Pavel Dobšinský: Prostonárodné slovenské povesti, sošit 1. Turčiansky sv. Martin : Kníhtlačiarsky účastinársky spolok, 1922. Tretie vydanie. Ilustrácie Andrej Mihal. SNG, UP-P 3280/30a",
            "Pavel Dobšinský: Prostonárodné slovenské povesti, sošit 9. Turčiansky sv. Martin : Kníhtlačiarsky účastinársky spolok, 1922. Ilustrácie  Mikuláš Galanda. SNG, UP-P 3280/30b",
            "Ivan Horváth: Strieborný prach. Bratislava : Slovenská grafia, 1929. Typografia Karel Jaroň. SNG, UP-P 3280/41",
            "Jaroslav Seifert: Na vlnách TSF.  Praha : Václav Petr, 1925. Edícia Hosta, zväzok 1. Obálka a typografia Karel Teige. SNG, UP-P 3280/3649"],
        library: {
            "1": {
                title: "Strieborný prach",
                author: "Ivan Horváth",
                year: '1929'
            },
            "2": {
                title: "Prostonárodné slovenské povesti",
                subhead: "sošit 1",
                author: "Pavel Dobšinský",
                year: '1922'
            },
            "3": {
                title: "Na vlnách TSF",
                author: "Jaroslav Seifert",
                year: '1925'
            },
            "4": {
                title: "Prostonárodné slovenské povesti",
                subhead: "sošit 9",
                author: "Pavel Dobšinský",
                year: '1922'
            },
        }
    },
    en: {
        sng: "Slovak National Gallery",
        igorGazdikCollection: "Selection from the book collection of Igor Gazdík",
        igorGazdikCollectionDescription: [
            "Pavel Dobšinský: Prostonárodné slovenské povesti (Slovak Tales), notebook 1. Turčiansky sv. Martin : Kníhtlačiarsky účastinársky spolok, 1922. Third edition. Illustrations Andrej Mihal. SNG, UP-P 3280/30a",
            "Pavel Dobšinský: Prostonárodné slovenské povesti (Slovak Tales), notebook 9. Turčiansky sv. Martin : Kníhtlačiarsky účastinársky spolok, 1922. Second edition. Illustrations  Mikuláš Galanda. SNG, UP-P 3280/30b",
            "Ivan Horváth: Strieborný prach (Silver Dust). Bratislava : Slovenská grafia, 1929. Typography Karel Jaroň. SNG, UP-P 3280/41",
            "Jaroslav Seifert: Na vlnách TSF (On the Waves of TSF). Prague : Václav Petr, 1925. Hosta Edition, Volume 1. Cover and typography Karel Teige. SNG, UP-P 3280/3649"
        ],
        library: {
            "1": {
                title: "Silver Dust",
                author: "Ivan Horváth",
                year: '1929'
            },
            "2": {
                title: "Slovak Tales",
                subhead: "notebook 1",
                author: "Pavel Dobšinský",
                year: '1922'
            },
            "3": {
                title: "On the Waves of TSF",
                author: "Jaroslav Seifert",
                year: '1925'
            },
            "4": {
                title: "Slovak Tales",
                subhead: "notebook 9",
                author: "Pavel Dobšinský",
                year: '1922'
            },
        }
    }
}

export const LIBRARY: Array<Publication> = [
    {
        id: "1",
        pages: 19,
        featuredPages: [3, 2, 16]
    },
    {
        id: "2",
        pages: 19,
        featuredPages: [8, 5, 2]
    },
    {
        id: "3",
        pages: 5,
        featuredPages: [5, 4, 2]
    },
    {
        id: "4",
        pages: 21,
        featuredPages: [2, 18, 12]
    },
]
