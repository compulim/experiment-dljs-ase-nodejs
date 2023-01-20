import { DirectLineStreaming } from 'botframework-directlinejs';

import fetchToken from './fetchToken.js';

async function main() {
  const token = await fetchToken();

  const connection = new DirectLineStreaming({
    domain: 'https://webchat-mockbot3.azurewebsites.net/.bot/v3/directline',
    token
  });

  connection.connectionStatus$.subscribe(connectionStatus => {
    console.log(`Connection status: ${connectionStatus}`);
  });

  connection.activity$.subscribe(activity => {
    console.log(`Activity: ${activity.text}`);
  });
}

main();
