"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
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
`;
//# sourceMappingURL=language.js.map