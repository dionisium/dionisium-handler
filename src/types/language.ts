export default `
    type Language {
        _id: ID
        name: String
        seasons: [seasons_language]
        seasonsN: Int
    }

    type seasons_language {
        id: ID
        number: Int
    }
`