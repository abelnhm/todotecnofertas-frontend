export const serverUrl =
  location.hostname === 'localhost'
    ? 'http://localhost:3030' //DEV
    : 'https://todotecnofertas-backend.linkinghook.com'; //PRO VPS
