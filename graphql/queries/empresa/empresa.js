import {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import models from '../../../models/index.js';
import Empresa from '../../types/empresa.js';

export default {
    type: Empresa,
    args: {
        codigo: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, args) {
        return models.empresa.findById(args.codigo);
    }
};
