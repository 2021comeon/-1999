var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
    console.log('此时进入了login4')
      res.render("login4");
    });


    router.post("/in", function (req, res, next) {
        console.log("进入login4 的in 处理");
      
        let obj = req.body;
        console.log(obj)
        console.log(obj.username);
        console.log(obj.password)
        //这一步是查询里面有没有 用户输入的 username password 有就可以跳后面页面 没有不可以
        user.findOne(obj, (err, data) => {
          if (err) {
            console.log(err);
          }
          if(data) {
                 res.cookie('islogin','ok')
               //req.session.islogin = 'ok'
               console.log('我在login  路由 /in 里面')
              
              res.redirect('/pro')
          } else {
              res.redirect('/register4')
          }
         
           
        });
      });
      


 





module.exports = router;