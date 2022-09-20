/**
 * Create on Sep 19th 
 * Code by Zeen Wu
 */
 
// dependency
const express = require("express")
const router = require('express').Router();
const cors = require("cors")

// module
const rep = require ('../repository/repProduct')
const config = require('../config/config');
// app init
router.use(cors())
router.use(express.json())
router.use(cors())

// -- get all------------------------------------------------ //
router.get("/", async(req, res) => {

    try {
        const obj = await rep.getAll()
        res.send(obj)
    } catch (e) {
        console.error('error is:', e.message);
        res.send()
    }
    
})

// -- getSearch------------------------------------------------ //
router.post("/search", async(req, res) => {
    const obj = req.body
    try {
        const list = await rep.getSearch(obj.key, obj.value)
        res.send(list)
    } catch (e) {
        console.error('error is:', e.message);
        res.send()
    }
    
})


// -- new one ---------------------------------------- //
router.post("/", config.isUser, (req, res) => {
    const obj = req.body   

    try {
        rep.newOne(obj)
        res.send("New category has been created.")
    } catch (e) {
        console.error('error is:', e.message);
        res.send(e.message)
    }
    
})

// -- get one By Id ------------------------------------------------ //
router.get("/:id", async(req, res) => {
    const id = req.params.id
    try {
        const obj = await rep.getOne(id)
        res.send(obj)
    } catch (e) {
        console.error('error is:', e.message);
        res.send()
    }
    
})

// -- delete ------------------------------------------------ //
router.delete("/del/:id", config.isUser, async(req, res) => {
    const id = req.params.id
    try {
        const rs = await rep.delOne(id)
        res.send(rs)  
    } catch (e) {
        console.error('error is:', e.message);
        res.send()  
    }
     
})


// -- update ------------------------------------------------ //
router.put("/update", config.isUser, async(req, res) => {
    const obj = req.body
    
    try {
        const rs = await rep.updateOne(obj)
        res.send(rs)
    } catch (e) {
        console.error('error is:', e.message);
        res.send()
    }
    
})



module.exports = router;

