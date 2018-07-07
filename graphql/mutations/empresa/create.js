import models from '../../../models/index.js';
import Empresa from '../../types/empresa.js';
import EmpresaInput from '../../inputs/empresa.js';

export default {
    type: Empresa,
    args: {
        empresa: {
            type: EmpresaInput
        }
    },
    resolve (source, args) {
        return models.empresa.build({
            empresa:     args.empresa.empresa,
            descripcion: args.empresa.descripcion,
            url_icon:    args.empresa.url_icon,
            eccf:        args.empresa.eccf,
            cantPend:    args.empresa.cantidadPendientes
        }).save().then(function(newEmpresa) {
            return models.empresa.findById(newEmpresa.id);
        });
    }
};