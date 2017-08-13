import * as Hapi from 'hapi';
import * as Path from 'path';
import { IConfiguration } from './models/interfaces/configuration-interface';

export function init(config: IConfiguration) {

  const server = new Hapi.Server();
  server.connection({
    host: config.host,
    port: config.port,
  });

  config.routes.forEach((serverRoute, index) => {
    require(`./routes/${serverRoute.version}/${serverRoute.routeName}`)
            .default(server, serverRoute, config.buffer);
  });
  return server;
}
