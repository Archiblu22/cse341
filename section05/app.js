const http = require('http');

const express = resquire('express');

const app = express();

const server = http.createServer(app);

server.listen(3000);
