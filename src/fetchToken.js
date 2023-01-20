import fetch from 'node-fetch';

export default async function fetchToken() {
  const res = await fetch('https://webchat-mockbot3.azurewebsites.net/api/token/directlinease', { method: 'POST' });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return (await res.json()).token;
}
