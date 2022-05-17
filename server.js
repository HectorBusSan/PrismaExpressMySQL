const express= require('express');
const app= express();
app.use(express.json());
const port = process.env.PORT || 3000

const {PrismaClient}=require('@prisma/client');
const prisma = new PrismaClient();

// Cors
const cors = require("cors");

const corsOptions ={
    origin :"http://localhost:8081"
}
app.use(cors(corsOptions));

app.get('/', async (req,res)=>{
    res.json({message:'alive'});
});
app.listen(port,()=>{
    console.log(`Listeningto request on port ${port}`);
});

// CRUD
app.get("/explorers",async (req,res)=>{
    const allExplorers = await prisma.explorer.findMany({});
    res.json(allExplorers);
})

app.get("/explorers/:id", async (req,res) =>{
    const id= req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post("/explorers",async (req,res)=>{
    const explorer={
        name: req.body.name,
        username: req.body.username,
        mission: req.body.mission
    };
    const message = "Explorer creado";
    await prisma.explorer.create({data:explorer});
    return res.json({message});
});

app.put("/explorers/:id",async (req,res)=>{
    const id= parseInt(req.params.id);
    await prisma.explorer.update({
        where:{
            id:id
        },
        data:{
            mission:req.body.mission
        }
    })
    return res.json({message:"Actualizado correctamente"});
})

app.delete("/explorers/:id",async(req,res)=>{
    const id= parseInt(req.params.id);
    await prisma.explorer.delete({where:{id:id}});

    return res.json({message: "Eliminado Correctamente"});
})

// CRUD2
app.get("/explorerMission",async (req,res)=>{
    const explorers = await prisma.post.findMany({});
    res.json(explorers);
});
app.get("/explorerMission/:id",async (req,res)=>{
    const id= req.params.id;
    const explorerMis= await prisma.post.findUnique({where:{id:parseInt(id)}});
    res.json(explorerMis);
})
app.post("/explorerMission/:id",async(req,res)=>{
    const explorerMission={
        name:req.body.name,
        lang:req.body.lang,
        missionCommander:req.body.missionCommander,
        enrollment:req.body.enrollment
    };
    const message="explorerMission Creado";
    await prisma.post.create({data: explorerMission})
    return res.json({message});
});
app.put('/explorerMission/:id',async (req,res)=>{
    const id= parseInt(req.params.id);
    await prisma.post.update({
        where:{
            id:id
        },
        data:{
            missionCommander:req.body.missionCommander
        }
    })
    return res.json({message:"Actualización hecha"});
})
app.delete('/explorerMission/:id',async (req,res)=>{
    const id= parseInt(req.params.id);
    await prisma.post.delete({where:{id:id}});
    return res.json({message:"Elemento Eliminado"});
})