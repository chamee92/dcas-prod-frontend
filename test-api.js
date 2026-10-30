const http = require('http');

const payload = JSON.stringify({
  user_id: 1,
  new_password: "123",
  new_password_confirmation: "123"
});

const options = {
  hostname: 'localhost',
  port: 8000,
  path: '/api/user/password/reset',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = http.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(`Status: ${res.statusCode}`);
    console.log(`Body: ${data}`);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.write(payload);
req.end();
