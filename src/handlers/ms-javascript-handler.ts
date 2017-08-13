import * as Hapi from 'hapi';
// tslint:disable-next-line:import-name
import BaseHandler from './ms-base-handler';

export default class JavascriptHandler extends BaseHandler {
  public async javascript(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
    return reply(this.wordCountWithJs(request));
  }
}
