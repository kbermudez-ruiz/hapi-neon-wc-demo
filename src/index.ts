import * as Configs from './configs';
import * as Server from './server';
import * as cluster from 'cluster';
import { cpus } from 'os';
const numCPUs = cpus().length;
const getConfigs = Configs.getConfigs();
// cluster module allows easy creation of child processes
if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // tslint:disable-next-line:no-increment-decrement
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = Server.init(getConfigs);
  server.start((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Worker ${process.pid} started`);
    }
  });
}

