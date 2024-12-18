import express from 'express';
import libraryRoutesInit from './libraryRouter.js';

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Bem-vindo(a) a Livraria!"));
    
    libraryRoutesInit(app);
}

export default routes;