import request from 'request-promise';
import { getStartedButton } from '../bot-config';

const FbConstants = require('../constants.json').fb;

export default class GetStartedButtonController {

  static set() {
    const options = {
      method: 'POST',
      url: `${FbConstants.GRAPH_API_URL}/me/thread_settings`,
      qs: {
        access_token: FbConstants.PAGE_TOKEN,
      },
      json: {
        setting_type: 'call_to_actions',
        thread_state: 'new_thread',
        call_to_actions: [ getStartedButton ],
      },
    };
    return request(options);
  }

  static remove() {
    const options = {
      method: 'DELETE',
      url: `${FbConstants.GRAPH_API_URL}/me/thread_settings`,
      qs: {
        access_token: FbConstants.PAGE_TOKEN,
      },
      json: {
        setting_type: 'call_to_actions',
        thread_state: 'new_thread',
      },
    };
    return request(options);
  }
}
