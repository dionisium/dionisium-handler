"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
    type Chapters {
        _id: ID
        name: String
        number: Int
        description: String
        secure_url: String
        thumnail: String
        duration: String
        season: ID
        serie: String
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