export default `
    type Chapters {
        _id: ID
        name: String
        secures_urls: Urls
        description: String
        
        number: Int
        
        serie: String
        season: ID
    }

    type Urls {
        spanish: String
        english: String
        japanese: String
    }

    type Viewing {
        _id: ID
        name: String
        redirect: String
        thumnail: String
        minute: String
    }
`