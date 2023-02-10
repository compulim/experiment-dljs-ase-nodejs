import { NodeWebSocket } from 'botframework-streaming';

async function main() {
  const socket = new NodeWebSocket();

  await socket.connect('wss://webchat-mockbot3.azurewebsites.net/');
}

main();
