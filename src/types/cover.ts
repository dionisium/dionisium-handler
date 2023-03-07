export default `
    type Cover {
        _id: ID
        name: String
        thumnail: String
        serie: ID
        views: Int
        gender: [String]
        date: String
        dateMs: Float
        languages: [String]
        seasons: Int
    }
`