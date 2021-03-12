export interface CardProps {
    country: CountryProps
}

export interface CardContainerProps {
    countries: CountryProps[]
}

export interface CountryProps{
    capital: string
    flag: string
    name: string
    population: number
    region: string
    topLevelDomain: string[]
    nativeName: string
    currencies: CurrencyProps[]
    languages: LanguageProps[]
    subregion: string
    borders: string[]
}

interface CurrencyProps{
    code: string
    name: string
    symbol: string
}
interface LanguageProps{
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

