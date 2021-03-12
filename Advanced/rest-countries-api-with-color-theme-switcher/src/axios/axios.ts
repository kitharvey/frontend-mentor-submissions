import axios from "axios"
import { CountryProps } from "../types/interfaces"

export const fetchAllCountry = async() => {
    const { data } = await axios.get('https://restcountries.eu/rest/v2/all?fields=capital;flag;name;population;region;topLevelDomain;nativeName;currencies;languages;subregion;borders')
    return data
}
export const fetchCountryName = async(name: string) => {
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/alpha/${name}?fields=name`)
    const items: string = data.name
    return items
}
export const fetchCountryInfo = async(name: string) => {
    const { data } = await axios.get(`https://restcountries.eu/rest/v2/name/${name}?fields=capital;flag;name;population;region;topLevelDomain;nativeName;currencies;languages;subregion;borders`)
    const items: CountryProps = data[0]
    return items
}
