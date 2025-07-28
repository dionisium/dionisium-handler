"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
    type Query{
        get_products(limit: Int!): [Product]
        get_shells(limit: Int!): [Shell]
        get_shells_product(ids: String!): [Shell]
        new_product(category:String!, cost:Int!, name:String!, page:String!, price:Int!, stock:Int!, image:String!): String
        new_shell(date:String!, index:String!, quantity:Int!, first_quote:Int!, description:String!): String
        update_product(name:String!, stock:Int!, price:Int!, cost:Int!, id:String!): String
        search_product(name:String!): [Product]
    }
    
    type Product{
        name: String
        stock: Int
        price: Int
        cost: Int
        shells: [String]
        category: String
        page: String
        id: String
        image: String
    }

    type Shell{
        date: String
        quantity: Int
        first_quote: Int
        description: String
        datems: Int
        id: String
    }
`;
