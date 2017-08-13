import { IConfigRoute } from './config-route-interface';

export interface IConfiguration {
  host: string;
  port: string;
  routes: IConfigRoute[];
  dataFileName: string;
  buffer: Buffer;
}
