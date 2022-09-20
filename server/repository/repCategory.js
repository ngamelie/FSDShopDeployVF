/**
 * Create on Sep 16th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "category"

const rep = {

    getAll: async function (){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql)
        return rs

    },

    getOne: async function (id){
        const sql = "select * from " + tbl + " where cid = ?"
        const [rs] = await db.query(sql, [id])
        return rs[0]
    },

    delOne: async function (id){
        const sql = "delete from " + tbl + " where cid = ?"
        const [rs] = await db.query(sql,[id])
        return rs
    },


    newOne: async function (obj){
        const sql = "insert into " + tbl 
        + " (title) values (?)"
        const [rs] = await db.query(sql, [
            obj.title
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set title = ? where cid = ?"
           
        const [rs] = await db.query(sql, [
            obj.title, 
            obj.cid
        ]) 
        return rs
    }


}

module.exports = rep;


