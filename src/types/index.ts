import chapters from "./chapters";
import cover from "./cover";
import language from "./language";
import seasons from "./seasons";
import series from "./series";

export default  `
    type Query {
        get_cover(order: Int!, type: [Int!], limit: Int!): [cover_object]
        get_series(id: ID!): Serie
        get_language(id: ID!): Language
        get_season(id: ID!): Seasons
        get_chapter(id: ID!): Chapters
        search(series: Int!, chapters: Int!, search: String!): Search
        get_viewing(token: ID!): [Viewing]
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