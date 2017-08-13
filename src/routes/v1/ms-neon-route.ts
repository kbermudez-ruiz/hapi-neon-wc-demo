import * as Hapi from 'hapi';
// tslint:disable-next-line:import-name
import NeonHandler from './../../handlers/ms-neon-handler';
import * as WordCountModel from './../../models/binding-models/word-search-binding-model';
import { IConfigRoute } from './../../models/interfaces/config-route-interface';

export default (server: Hapi.Server, route: IConfigRoute, buffer: Buffer) => {
  const handler = new NeonHandler(buffer);
  server.bind(handler);
  server.route({
    config: {
      tags: ['api', 'rust', 'neon'],
      description: 'Word count with neon',
      validate: {
        payload: WordCountModel.wordCountBindingModel,
      },
    },
    handler: handler.neon,
    method: 'POST',
    path: `/${route.apiName}`,
  });
};
