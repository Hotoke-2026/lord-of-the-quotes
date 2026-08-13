export interface quoteInfo{
  character: string
  quote: string
}



//// Interfaces for External API

export interface Quotes {
    docs:   Doc[];
    total:  number;
    limit:  number;
    offset: number;
    page:   number;
    pages:  number;
}

export interface Doc {
    _id:       string;
    dialog:    string;
    movie:     string;
    character: string;
    id:        string;
}
