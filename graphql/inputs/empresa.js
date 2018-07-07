import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'empresainput',
  fields: () => ({
      empresa:            { type: GraphQLInt},
      descripcion:        { type: GraphQLString},
      url_icon:           { type: GraphQLString},
      eecf:               { type: GraphQLString},
      cantidadPendientes: { type: GraphQLInt}
  })
});