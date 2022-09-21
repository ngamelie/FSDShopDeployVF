/**
 * Create on Sep 14th 
 * Code by Zeen Wu
 */
const database = require('../config/db');
const db = database.db
const tbl = "user"

const rep = {

    getAll: async function (){
        const sql = "select * from " + tbl
        const [rs] = await db.query(sql)
        return rs

    },

    getOne: async function (id){
        const sql = "select * from " + tbl + " where uid = ?"
        const [rs] = await db.query(sql, [id])
        return rs[0]
    },

    getOneByEmail: async function (email){
        const sql = "select * from " + tbl + " where uemail = ?"
        const [rs] = await db.query(sql, [email])
        if (rs.length == 0 ) 
            return false
        return rs[0]
    },

    delOne: async function (id){
        const sql = "delete from " + tbl + " where uid = ?"
        const [rs] = await db.query(sql,[id])
        return rs
    },

    newOne: async function (obj){
        const sql = "insert into " + tbl 
        + " (uemail, role, pword) values (?, ?, ?)"
        const [rs] = await db.query(sql, [
            obj.uemail, 
            obj.role, 
            obj.pword
        ])

        return rs
    },

    updateOne: async function (obj){
        const sql = "update " + tbl 
            + " set uemail = ?, role = ?, pword = ? where uid = ?"
           
        const [rs] = await db.query(sql, [
            obj.uemail, 
            obj.role, 
            obj.pword, 
            obj.uid
        ]) 
        return rs
    }


}

module.exports = rep;


