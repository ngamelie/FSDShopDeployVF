/**
 * Create by Zeen Wu on Sep 8th 
 * 
 */
const config = {
    app: {
        port: 3001,
        client: 3000
    },

    isUser : (req, res, next) => {

        const obj = JSON.parse(req.headers.token)
        if(obj && (obj.isAuth).charAt((obj.isAuth).length-1) == "1"){
            next()
        } else {
            res.send("You are not a user yet.")
        }
        
    },

    isAdmin : (req, res, next) => {

        const obj = JSON.parse(req.headers.token)
        if(obj && (obj.isAuth).charAt((obj.isAuth).length-1) == "1" && (obj.user.role).charAt((obj.user.role).length-1) == "1"){
            next()
        } else {
            res.send("Access is forbidden.")
        }
        
    }
    

} 

module.exports = config;

