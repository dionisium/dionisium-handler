export interface _Serie{
    _id: any,
    name: string,
    PCCover: string,
    MovileCover: string,
    date: string,
    
    dateMs: number,
    views: number,
    type: string,
    score: number,

    description: string,
    seasons: _Seasons[],
    user: any,
    
    createdAt: any,
    updatedAt: any,
}
export interface _Seasons {
    number: number,
    chapters: _Season_Chapters[]
}
export interface _Season_Chapters {
    name: string,
    thumnail: string,
    duration: string,
    chapter: any
}
export interface _Chapter {
    _id: any,
    name: string,
    secures_urls: Urls,
    description: string,
    
    number: number,
    
    serie: string,
    season: any
}
export interface Urls {
    spanish: string,
    english: string,
    japanese: string,
}