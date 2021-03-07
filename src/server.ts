import "reflect-metadata";
import express from "express";
import fs from "fs-extra";
import path from "path";

import "./database";

/* Colocando os caminhos  */
global.dir = {};
global.dir.root = __dirname; // Diretorio do projeto
global.dir.controller = path.join(global.dir.root,'controllers');// Diretorio das controllers

const server = express();

server.listen(8000,()=>console.log(" Servidor rodando!"))

server.get("/",(req,res)=>{
    return res.json({ status: true, message: "Welcome MyAPI Type Script"});
});


fs.readdirSync(global.dir.controller).forEach(element => {
    console.log(element);
});
