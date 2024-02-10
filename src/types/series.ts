export default `
    type Serie {
        _id: ID
        name: String
        PCCover: String
        MovileCover: String
        date: String
        
        dateMs: Float
        views: Int
        type: String
        score: Int

        description: String
        seasons: [Seasons]
        user: ID
        
        createdAt: ID
        updatedAt: ID
    }

    type Seasons {
        number: Int
        chapters: [Season_Chapters]
    }

    type Season_Chapters {
        name: String
        thumnail: String
        duration: String
        chapter: ID
    }
`