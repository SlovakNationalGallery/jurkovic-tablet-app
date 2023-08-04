type Artwork = {
    id: string,
    idNext: string
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
        gallery: {
            "NL 197": {
                title: "Vinobranie",
                description: "Glazovaná keramika. SNG, NL 197, získané kúpou v roku 1974"
            },
            "NL 198": {
                title: "Džbán s oráčom",
                description: "Glazovaná keramika. SNG, NL 198, získané kúpou v roku 1974"
            },
            "NL 199": {
                title: "Džbán s Pietou",
                description: "Glazovaná keramika. SNG, NL 199, získané kúpou v roku 1974"
            },
            "NL 673": {
                title: "Váza V.",
                description: "Glazovaná keramika. SNG, NL 673, získané kúpou v roku 1972"
            },
            "NL 200": {
                title: "Džbán s motívom Svätej rodiny",
                description: "Glazovaná keramika. SNG, NL 200, získané kúpou v roku 1974"
            },
            "NL 674": {
                title: "Džbán na víno",
                description: "Glazovaná keramika. SNG, NL 674, získané kúpou v roku 1972"
            },
            "NL 195": {
                title: "Harmonikár",
                description: "Glazovaná keramika. SNG, NL 195, získané kúpou v roku 1974"
            },
            "NL 667": {
                title: "Veľký džbán",
                description: "Glazovaná keramika. SNG, NL 667, získané kúpou v roku 1972"
            },
            "NL 234": {
                title: "Dóza v tvare prúteného košíka",
                description: "Glazovaná keramika. SNG, NL 234, získané kúpou v roku 1976"
            },
            "NL 677": {
                title: "Svätenička s motívom sv. Veroniky",
                description: "Glazovaná keramika. SNG, NL 677, získané kúpou v roku 1964"
            },
            "NL 232": {
                title: "Džbán s motívom sv. Jána",
                description: "Glazovaná keramika. SNG, NL 232, získané kúpou v roku 1976"
            },
            "NL 678": {
                title: "Oráč",
                description: "Glazovaná keramika. SNG, NL 678, získané kúpou v roku 1964"
            },
            "NL 665": {
                title: "Tanier II.",
                description: "Glazovaná keramika. SNG, NL 665, získané kúpou v roku 1972"
            },
            "NL 666": {
                title: "Čutora",
                description: "Glazovaná keramika. SNG, NL 666, získané kúpou v roku 1972"
            },
            "NL 670": {
                title: "Váza II.",
                description: "Glazovaná keramika. SNG, NL 670, získané kúpou v roku 1972"
            },
            "NL 196": {
                title: "Božia muka",
                description: "Glazovaná keramika. SNG, NL 196, získané kúpou v roku 1974"
            },
            "NL 672": {
                title: "Váza IV.",
                description: "Glazovaná keramika. SNG, NL 672, získané kúpou v roku 1972"
            },
            "NL 663": {
                title: "Veľká misa",
                description: "Glazovaná keramika. SNG, NL 663, získané kúpou v roku 1972 "
            },
            "NL 669": {
                title: "Váza I.",
                description: "Glazovaná keramika. SNG, NL 669, získané kúpou v roku 1972"
            },
            "NL 664": {
                title: "Tanier I.",
                description: "Glazovaná keramika. SNG, NL 664, získané kúpou v roku 1972"
            },
            "NL 226": {
                title: "Tanečnica",
                description: "Glazovaná keramika. SNG, NL 226, získané kúpou v roku 1976 "
            },
            "NL 668": {
                title: "Malý džbán",
                description: "Glazovaná keramika. SNG, NL 668, získané kúpou v roku 1972"
            },
            "NL 225": {
                title: "Tanečník",
                description: "Glazovaná keramika. SNG, NL 225, získané kúpou v roku 1976"
            },
            "NL 233": {
                title: "Tanier",
                description: "Glazovaná keramika. SNG, NL 233, získané kúpou v roku 1976"
            },
            "NL 676": {
                title: "Krčah ",
                description: "Glazovaná keramika. SNG, NL 679, získané kúpou v roku 1967"
            },
            "NL 675": {
                title: "Madona s dieťaťom",
                description: "Glazovaná keramika. SNG, NL 675, získané kúpou v roku 1972"
            },
            "NL 679": {
                title: "Krčah ",
                description: "Glazovaná keramika. SNG, NL 676, získané prevodom v roku 1963"
            },
            "NL 662": {
                title: "Nástenný tanier ",
                description: "Glazed ceramic. SNG, NL 662, acquired by purchase in 1971"
            },
            "NL 671": {
                title: "Váza III.",
                description: "Glazovaná keramika. SNG, NL 671, získané kúpou v roku 1972"
            },
        }
    },
    en: {
        sng: "Slovak National Gallery",
        worksByFerdišKostka: "Works by Ferdiš Kostka in SNG collections",
        worksOfSlovakPeople: "Works of Slovak people",
        gallery: {
            "NL 197":
            {
                title: "Vintage",
                description: "Glazed ceramic. SNG, NL 197, acquired by purchase in 1974"
            },
            "NL 198":
            {
                title: "Pitcher with ploughman",
                description: "Glazed ceramic. SNG, NL 198, acquired by purchase in 1974"
            },
            "NL 199":
            {
                title: "Pitcher with Piet_",
                description: "Glazed ceramic. SNG, NL 199, acquired by purchase in 1974"
            },
            "NL 673":
            {
                title: "Vase V.",
                description: "Glazed ceramic. SNG, NL 673, acquired by purchase in 1972"
            },
            "NL 200":
            {
                title: "Pitcher with Holly family motif",
                description: "Glazed ceramic. SNG, NL 200, acquired by purchase in 1974"
            },
            "NL 674":
            {
                title: "Wine pitcher",
                description: "Glazed ceramic. SNG, NL 674, acquired by purchase in 1972"
            },
            "NL 195":
            {
                title: "Concertina player",
                description: "Glazed ceramic. SNG, NL 195, acquired by purchase in 1974"
            },
            "NL 667":
            {
                title: "Large pitcher",
                description: "Glazed ceramic. SNG, NL 667, acquired by purchase in 1972"
            },
            "NL 234":
            {
                title: "Dose in a form of wicker basket",
                description: "Glazed ceramic. SNG, NL 234, acquired by purchase in 1976"
            },
            "NL 677":
            {
                title: "Stoup with St. Veronica motif",
                description: "Glazed ceramic. SNG, NL 677, acquired by purchase in 1972"
            },
            "NL 232":
            {
                title: "Pitcher with St. John motif",
                description: "Glazed ceramic. SNG, NL 232, acquired by purchase in 1976"
            },
            "NL 678":
            {
                title: "Ploughman",
                description: "Glazed ceramic. SNG, NL 678, acquired by purchase in 1964"
            },
            "NL 665":
            {
                title: "Plate II.",
                description: "Glazed ceramic. SNG, NL 665, acquired by purchase in 1972"
            },
            "NL 666":
            {
                title: "Canteen",
                description: "Glazed ceramic. SNG, NL 666, acquired by purchase in 1972"
            },
            "NL 670":
            {
                title: "Vase II.",
                description: "Glazed ceramic. SNG, NL 670, acquired by purchase in 1972"
            },
            "NL 196":
            {
                title: "Wayside shrine",
                description: "Glazed ceramic. SNG, NL 196, acquired by purchase in 1974"
            },
            "NL 672":
            {
                title: "Vase IV.",
                description: "Glazed ceramic. SNG, NL 672, acquired by purchase in 1972"
            },
            "NL 663":
            {
                title: "Large bowl",
                description: "Glazed ceramic. SNG, NL 663, acquired by purchase in 1972"
            },
            "NL 669":
            {
                title: "Vase I.",
                description: "Glazed ceramic. SNG, NL 669, acquired by purchase in 1972"
            },
            "NL 664":
            {
                title: "Plate I.",
                description: "Glazed ceramic. SNG, NL 664, acquired by purchase in 1972"
            },
            "NL 226":
            {
                title: "Dancer",
                description: "Glazed ceramic. SNG, NL 226, acquired by purchase in 1976"
            },
            "NL 668":
            {
                title: "Little pitcher",
                description: "Glazed ceramic. SNG, NL 668, acquired by purchase in 1972"
            },
            "NL 225":
            {
                title: "Dancer",
                description: "Glazed ceramic. SNG, NL 225, acquired by purchase in 1976"
            },
            "NL 233":
            {
                title: "Plate",
                description: "Glazed ceramic. SNG, NL 233, acquired by purchase in 1976"
            },
            "NL 676":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 679, acquired by purchase in 1967"
            },
            "NL 675":
            {
                title: "Madona and Child",
                description: "Glazed ceramic. SNG, NL 675, acquired by purchase in 1972"
            },
            "NL 679":
            {
                title: "Pitcher",
                description: "Glazed ceramic. SNG, NL 676, acquired by transfer in 1963"
            },
            "NL 662":
            {
                title: "Wall plate",
                description: "Glazed ceramic. SNG, NL 662, acquired by purchase in 1971"
            },
            "NL 671":
            {
                title: "Vase III.",
                description: "Glazed ceramic. SNG, NL 671, acquired by purchase in 1972"
            }
        }
    }
}

type Publication = {
    id: string
    title: string
}

export const LIBRARY: Array<Publication> = [
    {
        id: "svazek1",
        title: "1. sešit",
    },
    {
        id: "svazek2",
        title: "2. sešit",
    },
    {
        id: "svazek3",
        title: "3. sešit",
    },
    {
        id: "svazek4",
        title: "4. sešit",
    },
    {
        id: "svazek5",
        title: "5. sešit",
    },
    {
        id: "svazek6",
        title: "6. sešit",
    }
]

export const GALLERY: Array<Artwork> = [
    {
        id: "test",
        idNext: "NL 197",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 198",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 199",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 673",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 200",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 674",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 195",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 667",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 234",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "test",
        idNext: "NL 677",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 232",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "test",
        idNext: "NL 678",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 665",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 666",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 670",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 196",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 672",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 663",
        yearStart: 1901,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 669",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 664",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 226",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 668",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 225",
        yearStart: 1900,
        yearEnd: 1910,
    },
    {
        id: "test",
        idNext: "NL 233",
        yearStart: 1901,
        yearEnd: 1933,
    },
    {
        id: "test",
        idNext: "NL 676",
        yearStart: 1900,
        yearEnd: 1935,
    },
    {
        id: "test",
        idNext: "NL 675",
        yearStart: 1940,
        yearEnd: 1951,
    },
    {
        id: "test",
        idNext: "NL 679",
        yearStart: 1900,
        yearEnd: 1935,
    },
    {
        id: "test",
        idNext: "NL 662",
        yearStart: 1945,
    },
    {
        id: "test",
        idNext: "NL 671",
        yearStart: 1940,
        yearEnd: 1951,
    }
]