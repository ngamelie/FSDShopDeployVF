/**
 * Create on Sep 20th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "order"

const rep = {

    getAll: async function (){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql)
        return rs

    },

    getOne: async function (id){
        const sql = "select * from " + tbl + " where oid = ?"
        const [rs] = await db.query(sql, [id])
        return rs[0]
    },

    delOne: async function (id){
        const sql = "delete from " + tbl + " where oid = ?"
        const [rs] = await db.query(sql,[id])
        return rs
    },


    newOne: async function (obj){
        const sql = "insert into " + tbl 
        + " (uid, status, odate) values (?, ? ,?)"
        const [rs] = await db.query(sql, [
            obj.uid,
            obj.status,
            obj.odate
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set uid = ?, status = ?, odate = ? where oid = ?"
           
        const [rs] = await db.query(sql, [
            obj.uid,
            obj.status,
            obj.odate,
            obj.oid

        ]) 
        return rs
    }


}

module.exports = rep;


