import * as Hapi from 'hapi';
import * as bench from '../utils/bench.js';
import * as js from '../utils/search.js';
// tslint:disable-next-line:no-var-requires
const addon = require('../../../native');

export default class BaseHandler {
  private buffer: Buffer;
  constructor(buffer: Buffer) {
    this.buffer = buffer;
  }
  protected wordCountWithRust(request: Hapi.Request) {
    return (bench(data => addon.search(this.buffer, request.payload.word)));
  }
  protected wordCountWithJs(request: Hapi.Request) {
    return (bench(data => js.search(this.buffer.toString('utf-8'), request.payload.word)));
  }
}
