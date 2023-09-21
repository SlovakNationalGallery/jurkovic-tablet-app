export type Lang = "en" | "sk"

type Publication = {
    id: string,
    pages: Number,
    featuredPages: number[]
}

export const TRANSLATIONS = {
    sk: {
        sng: "Slovenská národná galéria",
        worksOfSlovakPeople: "Práce lidu našeho",
        worksOfSlovakPeopleDescription1: "Dušan Samuel Jurkovič: Práce lidu našeho. Lidové stavby, zařízení a výzdoba obydlí, drobné práce. Viedeň : A. Schroll & Co., 1905. 6 zošitov. Fotografie: Josef Klvaňa",
        worksOfSlovakPeopleDescription2: "Digitalizácia: Knižnica Akadémie vied ČR, Praha",
        library: {
            "svazek1" : {
                title: "1. sešit"
            },
            "svazek2" : {
                title: "2. sešit"
            },
            "svazek3" : {
                title: "3. sešit"
            },
            "svazek4" : {
                title: "4. sešit"
            },
            "svazek5" : {
                title: "5. sešit"
            },
            "svazek6" : {
                title: "6. sešit"
            }
        }
    },
    en: {
        sng: "Slovak National Gallery",
        worksOfSlovakPeople: "Works of Our People",
        worksOfSlovakPeopleDescription1: "Dušan Samuel Jurkovič: Works of Our People. Vernacular buildings, furnishings, and decoration of dwellings, small works. Wien : A. Schroll & Co., 1905. 6 notebooks. Photographs: Josef Klvaňa",
        worksOfSlovakPeopleDescription2: "Digitalisation Library of Czech Academy of Sciences, Prag",
        library: {
            "svazek1" : {
                title: "Notebook No. 1"
            },
            "svazek2" : {
                title: "Notebook No. 2"
            },
            "svazek3" : {
                title: "Notebook No. 3"
            },
            "svazek4" : {
                title: "Notebook No. 4"
            },
            "svazek5" : {
                title: "Notebook No. 5"
            },
            "svazek6" : {
                title: "Notebook No. 6"
            }
        }
    }
}

export const LIBRARY: Array<Publication> = [
    {
        id: "svazek1",
        pages: 18,
        featuredPages: [11, 13, 15]
    },
    {
        id: "svazek2",
        pages: 14,
        featuredPages: [4, 6, 11]
    },
    {
        id: "svazek3",
        pages: 14,
        featuredPages: [4, 9, 12]
    },
    {
        id: "svazek4",
        pages: 13,
        featuredPages: [3, 5, 11]
    },
    {
        id: "svazek5",
        pages: 14,
        featuredPages: [6, 8, 10]
    },
    {
        id: "svazek6",
        pages: 14,
        featuredPages: [5, 7, 10]
    }
]
