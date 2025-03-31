const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.use(express.json());

app.post('/proxy', (req, res) => {
   const url = 'https://llm.api.cloud.yandex.net/foundationModels/v1/completion';
   axios.post(url, req.body, {
       headers: {
           'Content-Type': 'application/json',
           'x-folder-id': 'ajek1ad2tbb55hidbqhk'
       }
   })
   .then(response => res.json(response.data))
   .catch(error => res.status(500).send(error.message));
});

app.listen(port, () => {
   console.log(`Proxy server running at http://localhost:${port}`);
});
