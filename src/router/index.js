import express from 'express';
import libraryRoutesInit from './libraryRouter.js';

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Welcome to the Library!!"));
    
    libraryRoutesInit(app);
}

export default routes;