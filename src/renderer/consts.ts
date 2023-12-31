type Artwork = {
    id: string
    yearStart: number,
    yearEnd?: number,
}

type ArtworkTranslation = {
    title: string,
    description: string
}

export type Lang = "en" | "sk"

export const TRANSLATIONS = {
    sk: {
        worksByFerdišKostka: "Diela Ferdiša Kostku zo SNG",
        sng: "Slovenská národná galéria",
        worksOfSlovakPeople: "Práce lidu našeho",
        worksOfSlovakPeopleDescription1: "Dušan Samuel Jurkovič: Práce lidu našeho. Lidové stavby, zařízení a výzdoba obydlí, drobné práce. Viedeň : A. Schroll & Co., 1905. 6 zošitov. Fotografie: Josef Klvaňa",
        worksOfSlovakPeopleDescription2: "Digitalizácia: Knižnica Akadémie vied ČR, Praha",
        gallery: {
            "NL_197": {
                title: "Vinobranie",
                description: "Glazovaná keramika. SNG, NL 197, získané kúpou v roku 1974"
            },
            "NL_198": {
                title: "Džbán s oráčom",
                description: "Glazovaná keramika. SNG, NL 198, získané kúpou v roku 1974"
            },
            "NL_199": {
                title: "Džbán s Pietou",
                description: "Glazovaná keramika. SNG, NL 199, získané kúpou v roku 1974"
            },
            "NL_673": {
                title: "Džbán",
                description: "Glazovaná keramika. SNG, NL 673, získané kúpou v roku 1972"
            },
            "NL_200": {
                title: "Džbán s motívom Svätej rodiny",
                description: "Glazovaná keramika. SNG, NL 200, získané kúpou v roku 1974"
            },
            "NL_674": {
                title: "Džbán s motívom Adama a Evy",
                description: "Glazovaná keramika. SNG, NL 674, získané kúpou v roku 1972"
            },
            "NL_195": {
                title: "Harmonikár",
                description: "Glazovaná keramika. SNG, NL 195, získané kúpou v roku 1974"
            },
            "NL_667": {
                title: "Čepák",
                description: "Glazovaná keramika. SNG, NL 667, získané kúpou v roku 1972"
            },
            "NL_234": {
                title: "Dóza v tvare prúteného košíka",
                description: "Glazovaná keramika. SNG, NL 234, získané kúpou v roku 1976"
            },
            "NL_677": {
                title: "Svätenička s motívom sv. Veroniky",
                description: "Glazovaná keramika. SNG, NL 677, získané kúpou v roku 1964"
            },
            "NL_232": {
                title: "Džbán s motívom sv. Jána",
                description: "Glazovaná keramika. SNG, NL 232, získané kúpou v roku 1976"
            },
            "NL_678": {
                title: "Oráč",
                description: "Glazovaná keramika. SNG, NL 678, získané kúpou v roku 1964"
            },
            "NL_665": {
                title: "Tanier II.",
                description: "Glazovaná keramika. SNG, NL 665, získané kúpou v roku 1972"
            },
            "NL_666": {
                title: "Čutora",
                description: "Glazovaná keramika. SNG, NL 666, získané kúpou v roku 1972"
            },
            "NL_670": {
                title: "Džbán",
                description: "Glazovaná keramika. SNG, NL 670, získané kúpou v roku 1972"
            },
            "NL_196": {
                title: "Božia muka",
                description: "Glazovaná keramika. SNG, NL 196, získané kúpou v roku 1974"
            },
            "NL_672": {
                title: "Džbán",
                description: "Glazovaná keramika. SNG, NL 672, získané kúpou v roku 1972"
            },
            "NL_663": {
                title: "Tanier s motívom sv. Genovévy",
                description: "Glazovaná keramika. SNG, NL 663, získané kúpou v roku 1972 "
            },
            "NL_669": {
                title: "Džbán s motívom sv. Františky",
                description: "Glazovaná keramika. SNG, NL 669, získané kúpou v roku 1972"
            },
            "NL_664": {
                title: "Tanier I.",
                description: "Glazovaná keramika. SNG, NL 664, získané kúpou v roku 1972"
            },
            "NL_226": {
                title: "Tanečnica",
                description: "Glazovaná keramika. SNG, NL 226, získané kúpou v roku 1976 "
            },
            "NL_668": {
                title: "Čepák",
                description: "Glazovaná keramika. SNG, NL 668, získané kúpou v roku 1972"
            },
            "NL_225": {
                title: "Tanečník",
                description: "Glazovaná keramika. SNG, NL 225, získané kúpou v roku 1976"
            },
            "NL_233": {
                title: "Tanier",
                description: "Glazovaná keramika. SNG, NL 233, získané kúpou v roku 1976"
            },
            "NL_676": {
                title: "Čepák",
                description: "Glazovaná keramika. SNG, NL 679, získané kúpou v roku 1967"
            },
            "NL_675": {
                title: "Madona s dieťaťom",
                description: "Glazovaná keramika. SNG, NL 675, získané kúpou v roku 1972"
            },
            "NL_679": {
                title: "Džbán",
                description: "Glazovaná keramika. SNG, NL 676, získané prevodom v roku 1963"
            },
            "NL_662": {
                title: "Nástenný tanier ",
                description: "Glazed ceramic. SNG, NL 662, acquired by purchase in 1971"
            },
            "NL_671": {
                title: "Džbán",
                description: "Glazovaná keramika. SNG, NL 671, získané kúpou v roku 1972"
            },
        },
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
        worksByFerdišKostka: "Works by Ferdiš Kostka in SNG collections",
        worksOfSlovakPeople: "Works of Our People",
        worksOfSlovakPeopleDescription1: "Dušan Samuel Jurkovič: Works of Our People. Vernacular buildings, furnishings, and decoration of dwellings, small works. Wien : A. Schroll & Co., 1905. 6 notebooks. Photographs: Josef Klvaňa",
        worksOfSlovakPeopleDescription2: "Digitalisation Library of Czech Academy of Sciences, Prag",
        gallery: {
            "NL_197":
            {
                title: "Vintage",
                description: "Glazed ceramic. SNG, NL 197, acquired by purchase in 1974"
            },
            "NL_198":
            {
                title: "Pitcher with ploughman",
                description: "Glazed ceramic. SNG, NL 198, acquired by purchase in 1974"
            },
            "NL_199":
            {
                title: "Pitcher with Pieta",
                description: "Glazed ceramic. SNG, NL 199, acquired by purchase in 1974"
            },
            "NL_673":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 673, acquired by purchase in 1972"
            },
            "NL_200":
            {
                title: "Pitcher with Holly family motif",
                description: "Glazed ceramic. SNG, NL 200, acquired by purchase in 1974"
            },
            "NL_674":
            {
                title: "Pitcher with Adam and Eve motif",
                description: "Glazed ceramic. SNG, NL 674, acquired by purchase in 1972"
            },
            "NL_195":
            {
                title: "Concertina player",
                description: "Glazed ceramic. SNG, NL 195, acquired by purchase in 1974"
            },
            "NL_667":
            {
                title: "Vessel for liquids",
                description: "Glazed ceramic. SNG, NL 667, acquired by purchase in 1972"
            },
            "NL_234":
            {
                title: "Dose in a form of wicker basket",
                description: "Glazed ceramic. SNG, NL 234, acquired by purchase in 1976"
            },
            "NL_677":
            {
                title: "Stoup with St. Veronica motif",
                description: "Glazed ceramic. SNG, NL 677, acquired by purchase in 1972"
            },
            "NL_232":
            {
                title: "Pitcher with St. John motif",
                description: "Glazed ceramic. SNG, NL 232, acquired by purchase in 1976"
            },
            "NL_678":
            {
                title: "Ploughman",
                description: "Glazed ceramic. SNG, NL 678, acquired by purchase in 1964"
            },
            "NL_665":
            {
                title: "Plate II.",
                description: "Glazed ceramic. SNG, NL 665, acquired by purchase in 1972"
            },
            "NL_666":
            {
                title: "Canteen",
                description: "Glazed ceramic. SNG, NL 666, acquired by purchase in 1972"
            },
            "NL_670":
            {
                title: "PitcherPitcher",
                description: "Glazed ceramic. SNG, NL 670, acquired by purchase in 1972"
            },
            "NL_196":
            {
                title: "Wayside shrine",
                description: "Glazed ceramic. SNG, NL 196, acquired by purchase in 1974"
            },
            "NL_672":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 672, acquired by purchase in 1972"
            },
            "NL_663":
            {
                title: "Plate wit St. Genevieve motif",
                description: "Glazed ceramic. SNG, NL 663, acquired by purchase in 1972"
            },
            "NL_669":
            {
                title: "Pitcher with St. Frances motif",
                description: "Glazed ceramic. SNG, NL 669, acquired by purchase in 1972"
            },
            "NL_664":
            {
                title: "Plate I.",
                description: "Glazed ceramic. SNG, NL 664, acquired by purchase in 1972"
            },
            "NL_226":
            {
                title: "Dancer",
                description: "Glazed ceramic. SNG, NL 226, acquired by purchase in 1976"
            },
            "NL_668":
            {
                title: "Vessel for liquids",
                description: "Glazed ceramic. SNG, NL 668, acquired by purchase in 1972"
            },
            "NL_225":
            {
                title: "Dancer",
                description: "Glazed ceramic. SNG, NL 225, acquired by purchase in 1976"
            },
            "NL_233":
            {
                title: "Plate",
                description: "Glazed ceramic. SNG, NL 233, acquired by purchase in 1976"
            },
            "NL_676":
            {
                title: "Vessel for liquids",
                description: "Glazed ceramic. SNG, NL 679, acquired by purchase in 1967"
            },
            "NL_675":
            {
                title: "Madona and Child",
                description: "Glazed ceramic. SNG, NL 675, acquired by purchase in 1972"
            },
            "NL_679":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 676, acquired by transfer in 1963"
            },
            "NL_662":
            {
                title: "Wall plate",
                description: "Glazed ceramic. SNG, NL 662, acquired by purchase in 1971"
            },
            "NL_671":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 671, acquired by purchase in 1972"
            }
        },
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

type Publication = {
    id: string,
    pages: Number,
    featuredPages: number[]
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

export const GALLERY: Array<Artwork> = [
    {
        id: "NL_197",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_198",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_199",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_673",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_200",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_674",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_195",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_667",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_234",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "NL_677",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_232",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "NL_678",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_665",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_666",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_670",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_196",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_672",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_663",
        yearStart: 1901,
        yearEnd: 1951,
    },
    {
        id: "NL_669",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_664",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_226",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_668",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_225",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "NL_233",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "NL_676",
        yearStart: 1900,
        yearEnd: 1935,
    },
    {
        id: "NL_675",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "NL_679",
        yearStart: 1900,
        yearEnd: 1935,
    },
    {
        id: "NL_662",
        yearStart: 1945,
    },
    {
        id: "NL_671",
        yearStart: 1940,
        yearEnd: 1951,
    }
]