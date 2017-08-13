import { IConfiguration  } from './../models/interfaces/configuration-interface';
import * as Configuration from './configuration.json';
import * as fs from 'fs';
import * as path from 'path'

export function getConfigs(): IConfiguration {
  const config: IConfiguration = (Configuration as any).server;
  config.buffer = fs.readFileSync(path.join(__dirname,'./data/shakespeare-plays.csv'));
  return config;
}
