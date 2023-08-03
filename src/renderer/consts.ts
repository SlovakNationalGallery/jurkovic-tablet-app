type Artwork = {
    id: string,
    idNext: string
    titleSK: string,
    titleEN: string,
    yearStart: number
    yearEnd: number
    descriptionSK: string
    descriptionEN: string
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
        titleSK: "Vinobranie",
        titleEN: "Vintage",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 197, získané kúpou v roku 1974 ",
        descriptionEN: "Glazed ceramic. SNG, NL 197, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 198",
        titleSK: "Džbán s oráčom",
        titleEN: "Pitcher with ploughman",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 198, získané kúpou v roku 1974",
        descriptionEN: "Glazed ceramic. SNG, NL 198, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 199",
        titleSK: "Džbán s Pietou",
        titleEN: "Pitcher with Piet_",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 199, získané kúpou v roku 1974",
        descriptionEN: "Glazed ceramic. SNG, NL 199, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 673",
        titleSK: "Váza V.",
        titleEN: "Vase V.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 673, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 673, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 200",
        titleSK: "Džbán s motívom Svätej rodiny",
        titleEN: "Pitcher with Holly family motif",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 200, získané kúpou v roku 1974",
        descriptionEN: "Glazed ceramic. SNG, NL 200, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 674",
        titleSK: "Džbán na víno",
        titleEN: "Wine pitcher",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 674, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 674, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 195",
        titleSK: "Harmonikár",
        titleEN: "Concertina player",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 195, získané kúpou v roku 1974",
        descriptionEN: "Glazed ceramic. SNG, NL 195, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 667",
        titleSK: "Veľký džbán",
        titleEN: "Large pitcher",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 667, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 667, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 234",
        titleSK: "Dóza v tvare prúteného košíka",
        titleEN: "Dose in a form of wicker basket",
        yearStart: 1901,
        yearEnd: 1933,
        descriptionSK: "Glazovaná keramika. SNG, NL 234, získané kúpou v roku 1976",
        descriptionEN: "Glazed ceramic. SNG, NL 234, acquired by purchase in 1976"
    },
    {
        id: "test",
        idNext: "NL 677",
        titleSK: "Svätenička s motívom sv. Veroniky",
        titleEN: "Stoup with St. Veronica motif",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 677, získané kúpou v roku 1964",
        descriptionEN: "Glazed ceramic. SNG, NL 677, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 232",
        titleSK: "Džbán s motívom sv. Jána",
        titleEN: "Pitcher with St. John motif",
        yearStart: 1901,
        yearEnd: 1933,
        descriptionSK: "Glazovaná keramika. SNG, NL 232, získané kúpou v roku 1976",
        descriptionEN: "Glazed ceramic. SNG, NL 232, acquired by purchase in 1976"
    },
    {
        id: "test",
        idNext: "NL 678",
        titleSK: "Oráč",
        titleEN: "Ploughman",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 678, získané kúpou v roku 1964",
        descriptionEN: "Glazed ceramic. SNG, NL 678, acquired by purchase in 1964"
    },
    {
        id: "test",
        idNext: "NL 665",
        titleSK: "Tanier II.",
        titleEN: "Plate II.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 665, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 665, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 666",
        titleSK: "Čutora",
        titleEN: "Canteen",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 666, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 666, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 670",
        titleSK: "Váza II.",
        titleEN: "Vase II.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 670, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 670, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 196",
        titleSK: "Božia muka",
        titleEN: "Wayside shrine",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 196, získané kúpou v roku 1974",
        descriptionEN: "Glazed ceramic. SNG, NL 196, acquired by purchase in 1974"
    },
    {
        id: "test",
        idNext: "NL 672",
        titleSK: "Váza IV.",
        titleEN: "Vase IV.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 672, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 672, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 663",
        titleSK: "Veľká misa",
        titleEN: "Large bowl",
        yearStart: 1901,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 663, získané kúpou v roku 1972 ",
        descriptionEN: "Glazed ceramic. SNG, NL 663, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 669",
        titleSK: "Váza I.",
        titleEN: "Vase I.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 669, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 669, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 664",
        titleSK: "Tanier I.",
        titleEN: "Plate I.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 664, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 664, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 226",
        titleSK: "Tanečnica",
        titleEN: "Dancer",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 226, získané kúpou v roku 1976 ",
        descriptionEN: "Glazed ceramic. SNG, NL 226, acquired by purchase in 1976"
    },
    {
        id: "test",
        idNext: "NL 668",
        titleSK: "Malý džbán",
        titleEN: "Little pitcher",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 668, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 668, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 225",
        titleSK: "Tanečník",
        titleEN: "Dancer",
        yearStart: 1900,
        yearEnd: 1910,
        descriptionSK: "Glazovaná keramika. SNG, NL 225, získané kúpou v roku 1976",
        descriptionEN: "Glazed ceramic. SNG, NL 225, acquired by purchase in 1976"
    },
    {
        id: "test",
        idNext: "NL 233",
        titleSK: "Tanier",
        titleEN: "Plate",
        yearStart: 1901,
        yearEnd: 1933,
        descriptionSK: "Glazovaná keramika. SNG, NL 233, získané kúpou v roku 1976",
        descriptionEN: "Glazed ceramic. SNG, NL 233, acquired by purchase in 1976"
    },
    {
        id: "test",
        idNext: "NL 676",
        titleSK: "Krčah ",
        titleEN: "Pitcher",
        yearStart: 1900,
        yearEnd: 1935,
        descriptionSK: "Glazovaná keramika. SNG, NL 679, získané kúpou v roku 1967",
        descriptionEN: "Glazed ceramic. SNG, NL 679, acquired by purchase in 1967"
    },
    {
        id: "test",
        idNext: "NL 675",
        titleSK: "Madona s dieťaťom",
        titleEN: "Madona and Child",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 675, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 675, acquired by purchase in 1972"
    },
    {
        id: "test",
        idNext: "NL 679",
        titleSK: "Krčah ",
        titleEN: "Pitcher",
        yearStart: 1900,
        yearEnd: 1935,
        descriptionSK: "Glazovaná keramika. SNG, NL 676, získané prevodom v roku 1963",
        descriptionEN: "Glazed ceramic. SNG, NL 676, acquired by transfer in 1963"
    },
    {
        id: "test",
        idNext: "NL 662",
        titleSK: "Nástenný tanier ",
        titleEN: "Wall plate",
        yearStart: "1945",
        descriptionSK: "Glazovaná keramika. SNG, NL 662, získané kúpou v roku 1971 ",
        descriptionEN: "Glazed ceramic. SNG, NL 662, acquired by purchase in 1971"
    },
    {
        id: "test",
        idNext: "NL 671",
        titleSK: "Váza III.",
        titleEN: "Vase III.",
        yearStart: 1940,
        yearEnd: 1951,
        descriptionSK: "Glazovaná keramika. SNG, NL 671, získané kúpou v roku 1972",
        descriptionEN: "Glazed ceramic. SNG, NL 671, acquired by purchase in 1972"
    },
]