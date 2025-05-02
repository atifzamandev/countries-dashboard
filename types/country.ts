export interface Country {
    id: string
    name: string
    iso2: { value: string }[]
  }
  
  export interface CountriesQueryResponse {
    item: Country[]
  }
  