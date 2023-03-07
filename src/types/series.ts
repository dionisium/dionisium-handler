export default `
    type Serie {
        _id: ID
        name: String
        description: String
        thumnail: String
        languages: [language_serie]
        date: String
        dateMs: Float
        views: Int
    }

    type language_serie {
        id: ID
        name: String
    }
`