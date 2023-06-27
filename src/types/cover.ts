export default `
    type Cover {
        _id: ID
        PCCover: String
        MovileCover: String
        name: String
        description: String
        date: String
        views: Int
        seasons: Int
        languages: [languages_covers]
        type: String
        tags: [String]
        serie: ID
        createdAt: ID
        updatedAt: ID
    }

    type languages_covers {
        language: String
        seasons:[seasons_languages_covers]
    }

    type seasons_languages_covers {
        season: ID
        number: Int
    }
`