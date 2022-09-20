/**
 * Create on Sep 14th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "order_item"

const rep = {

    getAll: async function (){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql)
        return rs

    },

    getOne: async function (id){
        const sql = "select * from " + tbl + " where pid = ?"
        const [rs] = await db.query(sql, [id])
        return rs[0]
    },

    delOne: async function (id){
        const sql = "delete from " + tbl + " where pid = ?"
        const [rs] = await db.query(sql,[id])
        return rs
    },


    newOne: async function (obj){
        const sql = "insert into " + tbl 
        + " (oid, pid, quantity, pname, price, description, img) values (?, ? ,? ,? ,? ,?, ?)"
        const [rs] = await db.query(sql, [
            obj.oid,
            obj.pid,
            obj.quantity,
            obj.pname,
            obj.price,
            obj.description,
            obj.img
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set cid = ?, pname = ?, price = ?, description = ?, img = ?, rate = ?, where pid = ?"
           
        const [rs] = await db.query(sql, [
            obj.oid,
            obj.pid,
            obj.quantity,
            obj.pname,
            obj.price,
            obj.description,
            obj.img,
            obj.iid

        ]) 
        return rs
    }


}

module.exports = rep;


