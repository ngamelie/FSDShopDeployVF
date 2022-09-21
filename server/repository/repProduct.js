/**
 * Create on Sep 19th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "product"

const rep = {

    getAll: async function (from, n){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql, [from, n])
        return rs

    },

    getPageAll: async function (from, n){
        const sql = "select * from " + tbl + " limit ?, ?" 
        const [rs] = await db.query(sql, [from, n])
        return rs

    },

    getSearch: async function (key, value){
        const sql = "select * from " + tbl + " where ? like ?;"
        let v = "%" + value + "%"
        const [rs] = await db.query(sql, [key, v])
        return rs
    },

    getNameSearch: async function (key, from, num){
        const sql = "select * from " + tbl + " where pname like ? limit ? , ? ;"
        let v = "%" + key + "%"
        const [rs] = await db.query(sql, [v, from, num])
        return rs
    },

    getNameSearchNum: async function (key){
        const sql = "select * from " + tbl + " where pname like ?"
        let v = "%" + key + "%"
        const [rs] = await db.query(sql, v)
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
        + " (cid, pname, price, description, img, rate) values (?, ? ,? ,? ,? ,?)"
        const [rs] = await db.query(sql, [
            obj.cid,
            obj.pname,
            obj.price,
            obj.description,
            obj.img,
            obj.rate
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set cid = ?, pname = ?, price = ?, description = ?, img = ?, rate = ?, where pid = ?"
           
        const [rs] = await db.query(sql, [
            obj.cid,
            obj.pname,
            obj.price,
            obj.description,
            obj.img,
            obj.rate,
            obj.pid
        ]) 
        return rs
    }


}

module.exports = rep;


