import chapters from "./chapters";
import series from "./series";

// QUERY
export default  `
    type Query {
        get_series_list(type: String!, mode: String!, to: Int!, limit: Int!): Serie_Object
        get_recomendations(type: String!, limit: Int!): ID
        get_serie(id: String!): Serie
        get_chapter(id: String!, seasons: Boolean!): Chapter_Res
        search(series: Int!, chapters: Int!, search: String!): Search
    }
    type Search {
        serie: [Serie]
        chapters: [Chapters]
    }
    type Serie_Object {
        type: String
        _object: [Serie]
    }
    type Chapter_Res{
        chapter: Chapters,
        season: Seasons
    }

    ${series}
    ${chapters}
`;
