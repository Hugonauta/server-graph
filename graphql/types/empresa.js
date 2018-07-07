import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList
} from 'graphql';

import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'empresa',
    description: 'empresas asociadas',
    fields () {
        return {

            empresa: {
                type: GraphQLInt,
                description: "tipo empresa",
                resolve (empresa) {
                    return empresa.empresa;
                }
            },
            codigo: {
                type: GraphQLID,
                description: "codigo ID de la empresa",
                resolve (empresa) {
                    return empresa.codigo;
                }
            },
            descripcion: {
                type: GraphQLString,
                description: "nombre de la empresa",
                resolve (empresa) {
                    return empresa.descripcion;
                }
            },
            url_icon: {
                type: GraphQLString,
                description: "icono de la empresa",
                resolve (empresa) {
                    return empresa.url_icon;
                }
            },
            eecf: {
                type: GraphQLString,
                description: "algo",
                resolve (empresa) {
                    return empresa.eecf;
                }
            },
            cantidadPendientes: {
                type: GraphQLInt,
                description: "cantidad de pendientes",
                resolve (empresa) {
                    return empresa.cantidadPendientes;
                }
            },
           /* quotes: {
                type: new GraphQLList(Quote),
                description: "author's quotes",
                resolve(author) {
                    return models.quote.findAll({ where: { author_id: author.id } });
                }
            }*/
        };
    }
});