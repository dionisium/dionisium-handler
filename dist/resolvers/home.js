"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// MODULES
const graphql_yoga_1 = require("graphql-yoga");
const PRODUCTS_1 = __importDefault(require("../models/PRODUCTS"));
const SHELLS_1 = __importDefault(require("../models/SHELLS"));
exports.default = {
    async get_products(root, { limit }) {
        try {
            const products = await PRODUCTS_1.default.find().sort({ datems: -1 }).limit(limit);
            return products;
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async get_shells(root, { limit }) {
        try {
            const shells = await SHELLS_1.default.find().sort({ datems: -1 }).limit(limit);
            return shells;
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async get_shells_product(root, { ids }) {
        try {
            if (ids == '') {
                return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
            }
            let idsArray = ids.split('<br>', 4) || '';
            let shells = [];
            for (let x = 0; x < idsArray.length; x++) {
                let shell = await SHELLS_1.default.findById(idsArray[x]);
                if (shell) {
                    shells = [...shells, shell];
                }
                ;
            }
            return shells;
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async new_product(root, { category, cost, name, page, price, stock, image }) {
        try {
            if (price < 0 || cost < 0 || stock < 0) {
                return (0, graphql_yoga_1.createGraphQLError)('Erorr, Algunos Datos Son Incorrectos, el precio, costo o stock no puede ser menor a 0');
            }
            const product = await PRODUCTS_1.default.create({
                category,
                cost,
                name,
                price,
                page,
                stock,
                image
            });
            await product.save();
            return 'Product Save';
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async new_shell(root, { date, index, quantity, first_quote, description }) {
        try {
            if (date.split(' ').length != 3) {
                return (0, graphql_yoga_1.createGraphQLError)('Error, Fecha incorrecta, Por favor ingrese la fecha siguiendo el formato "DIA" DE "MES');
            }
            if (quantity < 0 || first_quote < 0) {
                return (0, graphql_yoga_1.createGraphQLError)('Erorr, Algunos Datos Son Incorrectos, la catidad o el precio de entrega no puede ser menor a 0');
            }
            const shell = await SHELLS_1.default.create({ date, quantity, datems: 123, first_quote, description });
            await shell.save();
            await PRODUCTS_1.default.findByIdAndUpdate(index, { $push: { shells: shell.id } });
            return 'saved';
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async update_product(root, { name, stock, price, cost, id }) {
        try {
            if (price < 0 || cost < 0 || stock < 0) {
                return (0, graphql_yoga_1.createGraphQLError)('Erorr, Algunos Datos Son Incorrectos, el precio, costo o stock no puede ser menor a 0');
            }
            await PRODUCTS_1.default.findByIdAndUpdate(id, { name, stock, price, cost, id });
            return 'updated';
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
    async search_product(root, { name }) {
        try {
            const search = new RegExp(name);
            const found = await PRODUCTS_1.default.find({ name: search }).limit(3);
            return found;
        }
        catch (error) {
            console.log(error);
            return (0, graphql_yoga_1.createGraphQLError)('Error unknown');
        }
    },
};
