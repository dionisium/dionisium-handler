import chapters from "./chapters";
import cover from "./cover";
import language from "./language";
import seasons from "./seasons";
import series from "./series";

// QUERY
export default  `
    type Query {
        get_cover(type: [Int!], limit: Int!): [cover_object]
        get_series(id: String!): Serie
        get_language(id: String!): Language
        get_season(id: String!): Seasons
        get_chapter(id: String!): Chapters
        search(series: Int!, chapters: Int!, search: String!): Search
        get_viewing(token: String!): [Viewing]
    }
    type Search {
        serie: [Serie]
        chapters: [Chapters]
    }
    type cover_object {
        section: [Cover]
        name: String
    }

    ${cover}
    ${series}
    ${language}
    ${seasons}
    ${chapters}
`;
