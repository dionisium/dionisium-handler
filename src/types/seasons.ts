export default `
    type Seasons {
        _id: ID
        name: String
        number: Int
        chapters: [chapters_seasons]
    }

    type chapters_seasons {
        name: String
        thumb: String
        duration: String
        number: Int
        chapter: ID
    }
`