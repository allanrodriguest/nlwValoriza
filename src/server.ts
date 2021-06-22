import express from "express";

const app = express();

app.get('/test', (request, response) => {
    return response.send("HElL0 GET TeST")
})

app.post('/test-post', (request, response) => {
    return response.send("Ola POST TEST")
})

app.listen(3000, () => console.log("Server tá funcionando, visse?"));