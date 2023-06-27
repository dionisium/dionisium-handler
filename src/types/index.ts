import chapters from "./chapters";
import cover from "./cover";
import seasons from "./seasons";
import series from "./series";

// QUERY
export default  `
    type Query {
        get_covers_list(type: String!, mode: String!, to: Int!, limit: Int!): cover_object
        get_recomendations(type: String!, limit: Int!): [Cover]
        get_serie(id: String!): Cover
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
        name: String
        section: [Cover]
    }

    ${cover}
    ${series}
    ${seasons}
    ${chapters}
`;
