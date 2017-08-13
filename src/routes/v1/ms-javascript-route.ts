import * as Hapi from 'hapi';
// tslint:disable-next-line:import-name
import JavascriptHandler from './../../handlers/ms-javascript-handler';
import * as WordCountModel from './../../models/binding-models/word-search-binding-model';
import { IConfigRoute } from './../../models/interfaces/config-route-interface';

export default (server: Hapi.Server, route: IConfigRoute, buffer: Buffer) => {
  const handler = new JavascriptHandler(buffer);
  server.bind(handler);
  server.route({
    config: {
      tags: ['api', 'javascript'],
      description: 'Word count with javascript',
      validate: {
        payload: WordCountModel.wordCountBindingModel,
      },
    },
    handler: handler.javascript,
    method: 'POST',
    path: `/${route.apiName}`,
  });
};
