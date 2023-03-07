export default `
    type Seasons {
        _id: ID
        name: String
        number: Int
        chapters: [chapters_seasons]
    }

    type chapters_seasons {
        id: ID
        name: String
        duration: String
        thumnail: String
        number: Int
    }
`