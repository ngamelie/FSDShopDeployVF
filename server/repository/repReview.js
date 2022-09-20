/**
 * Create on Sep 20th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "review"

const rep = {

    getAll: async function (){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql)
        return rs

    },

    getOne: async function (id){
        const sql = "select * from " + tbl + " where rid = ?"
        const [rs] = await db.query(sql, [id])
        return rs[0]
    },

    delOne: async function (id){
        const sql = "delete from " + tbl + " where rid = ?"
        const [rs] = await db.query(sql,[id])
        return rs
    },


    newOne: async function (obj){
        const sql = "insert into " + tbl 
        + " (uid, pid, text, date) values (?, ? ,?, ?)"
        const [rs] = await db.query(sql, [
            obj.uid,
            obj.pid,
            obj.text,
            obj.date
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set uid = ?, pid = ?, text = ?, date = ? where rid = ?"
           
        const [rs] = await db.query(sql, [
            obj.uid,
            obj.pid,
            obj.text,
            obj.date,
            obj.rid
        ]) 
        return rs
    }


}

module.exports = rep;


