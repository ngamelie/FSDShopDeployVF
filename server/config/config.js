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
        console.log(obj)
        if(obj && obj.isAuth == 1){
            next()
        } else {
            res.send("You are not admin.")
        }
        
    },

    isAdmin : (req, res, next) => {

        const obj = JSON.parse(req.headers.token)
        console.log(obj)
        if(obj && obj.isAuth == 1 && obj.user.role ===1){
            next()
        } else {
            res.send("You are not admin.")
        }
        
    }
    

} 

module.exports = config;

