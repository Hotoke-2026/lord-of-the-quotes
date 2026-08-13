export interface quoteInfo{
  character: string
  quote: string
}



//// Interfaces for External API

//QUOTES INTERFACES
export interface ExternalAPIQuotes {
    docs:   ExternalAPIQuote[];
    total:  number;
    limit:  number;
    offset: number;
    page:   number;
    pages:  number;
}

export interface ExternalAPIQuote {
    _id:       string;
    dialog:    string;
    movie:     string;
    character: string;
    id:        string;
}

//CHARACTER INTERFACES
export interface ExternalAPICharacters {
    docs:   ExternalAPICharacter[];
    total:  number;
    limit:  number;
    offset: number;
    page:   number;
    pages:  number;
}

export interface ExternalAPICharacter {
    _id:     string;
    name:    string;
    wikiUrl: string;
    race:    string;
    birth:   string;
    gender:  string;
    death:   string;
    hair:    string;
    height:  string;
    realm:   string;
    spouse:  string;
}
