"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
    type Chapters {
        _id: ID
        name: String
        secure_url: String
        description: String
        score: Int
        number: Int
        duration: String
        thumnail: String
        serie: String
        season: ID
    }

    type Viewing {
        _id: ID
        name: String
        redirect: String
        thumnail: String
        minute: String
    }
`;
//# sourceMappingURL=chapters.js.map