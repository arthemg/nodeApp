var express = require('express');
var router = express.Router();


module.exports = function (app) {
    //Line 7-9 works it prints the message
    app.get('/test', function (req, res) {
        res.json(200, {'test': 'it works!'})
    })

//
//     var curut = router.route('/user');
//     //show the CRUD interface | GET
//     curut.get('/user',function(req,res,next){
//
//
//         req.getConnection(function(err,conn){
//
//             if (err) return next("Cannot Connect");
//
//             var query = conn.query('SELECT * FROM t_user ',function(err,rows){
//
//                 if(err){
//                     console.log(err);
//                     return next("Mysql error, check your query");
//                 }
//
//                 res.render('user',{title:"RESTful Crud Example",data:rows});
//
//             });
//
//         });
//
//     });
//
// //post data to DB | POST
//     curut.post('user',function(req,res,next){
//
//         //validation
//         req.assert('name','Name is required').notEmpty();
//         req.assert('email','A valid email is required').isEmail();
//         req.assert('password','Enter a password 6 - 20').len(6,20);
//
//         var errors = req.validationErrors();
//         if(errors){
//             res.status(422).json(errors);
//             return;
//         }
//
//         //get data
//         var data = {
//             name:req.body.name,
//             email:req.body.email,
//             password:req.body.password
//         };
//
//         //inserting into mysql
//         req.getConnection(function (err, conn){
//
//             if (err) return next("Cannot Connect");
//
//             var query = conn.query("INSERT INTO t_user set ? ",data, function(err, rows){
//
//                 if(err){
//                     console.log(err);
//                     return next("Mysql error, check your query");
//                 }
//
//                 res.sendStatus(200);
//
//             });
//
//         });
//
//     });
//
//
//
//
//









}



//module.exports = router;