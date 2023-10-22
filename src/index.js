const express = require('express');

const app = express();

const { ServerConfig } = require('./config');

const router = require('./routers');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully stated the server on PORT ${ServerConfig.PORT}`);
});

