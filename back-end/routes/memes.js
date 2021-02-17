const express = require('express');
const router = express.Router();
const Meme = require('../models/meme')

//GET API for fetching the latest 100 memes 
router.get('/',async(req,res)=>{
    try{
        const memes = await Meme.find().sort({id:-1}).limit(100)
        res.json(memes)
    }catch(err){
        res.send('Error'+ err)
    }
})


//GET API for fetching a particular meme using its ID.
router.get('/:id',async(req,res)=>{
    try{
        const meme = await Meme.find({id:req.params.id})
        res.json(meme)
    }catch(err){
        res.send('Error'+ err )
    }
})

//POST API for posting a meme
//Also, before posting a meme, it is generating unique auto-incremented ID for the meme
router.post('/', async(req,res)=>{
    let maxIdIns = await Meme.find().sort({id:-1}).limit(1);
    let maxId = 0;
    if(maxIdIns && maxIdIns[0])
        maxId = maxIdIns[0].id;
    const meme = new Meme({
        id : maxId + 1,
        name : req.body.name,
        caption : req.body.caption,
        url : req.body.url
    })
    try{
        const m1 = await meme.save();
        res.json(m1)
    }catch(err){
        res.send('Error' + err )
    }
})

//DELETE API for deleting all the memes present in the DB
router.delete('/', async(req, res) => {
    try{
        Meme.deleteMany()
    }catch(err){
        res.send('Error' + err )
    }
})


//DELETE API for deleting a particular meme using its ID
router.delete('/:id', async(req, res) => {
    try{
        const meme = await Meme.deleteOne({id:req.params.id})
        res.json(meme)
    }catch(err){
        res.send('Error' + err )
    }
})

module.exports = router