import express from "express";

const server = express();

server.listen(8000,()=>console.log(" Servidor rodando!"))

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Atualizar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 */
server.get("/",(req,res)=>{
    return res.json({ status: true, message: "Welcome MyAPI Type Script"});
});