import * as Hapi from 'hapi';
// tslint:disable-next-line:import-name
import BaseHandler from './ms-base-handler';

export default class NeonHandler extends BaseHandler {
  public async neon(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
    return reply(this.wordCountWithRust(request));
  }

}
