const User = require('./models/user');

const infoCompany = require('./models/company');

var jwt = require('jsonwebtoken');
const serverJWTSecret = '7pTxN5k652fjHFEJ58LfrLL;';

// const cloudinary = require('cloudinary');
// const cloudinaryStorage = require('multer-storage-cloudinary');
// const multer = require('multer');
const expressJwt = require('express-jwt');


// cloudinary.config({
//     cloud_name: 'vanvani4',
//     api_key: '611596714563166',
//     api_secret: 'Z1E-veCzPCBkIZqg4lmE3gEPTiQ'
// });

// const storage = cloudinaryStorage({
//     cloudinary: cloudinary,
//     folder: 'Contests',
//     allowedFormats: ['jpg', 'png'],
//     transformation: [
//         {width: 235, height: 173, crop: 'fit'}
//     ],
//     // filename: function (req, file, cb) {
//     //     cb(undefined, 'my-file-name');
//     //   }
// });

// const parser = multer({ storage: storage });

const validateToken = function (req, res, next) {
    console.log(req.headers.authorization);
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, serverJWTSecret, (err, decoded) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}

module.exports = function (app) {
    app.get('/main', function (req, res) {
        infoCompany.find(function (err, infocomanies) {
            if (err) {
                res.send(err);
            }
            res.json(infocomanies[0]);
        });
        console.log('get main');
    });

    // app.put('/contest/:id', function (req, res) {
    //     infoCompany.findById(req.body.id, function (err, contest) {
    //         if (err) {
    //             res.send(err);
    //         }
    //         res.json(contest);
    //     });
    //     console.log('put contest/id');
    // });

    // ---------------------create new company------------------------------

    // app.post('/create', /*validateToken,*/ function (req, res) {
    //     infoCompany.create({
    //         name: 'ОСМД "Новострой-2018"',
    //         contacts: [
    //             { person: 'Голова ОСМД', number: '097 123 45 67' },
    //             { person: 'Бухгалтер', number: '068 456 45 67' },
    //             { person: 'Електрик', number: '063 589 68 67' },
    //             { person: 'Сантехнік', number: '096 864 31 11' },
    //             { person: 'Охорона', number: '048 765 65 65' },
    //             { person: 'Диспетчер ліфту', number: '063 321 21 12' }
    //         ]
    //     }, function (err) {
    //         if (err) {
    //             res.send(err);
    //         }
    //     });
    //     console.log('post create');
    // });

    // ---------------------registration new User------------------------------

    // app.post('/registration', validateToken, function (req, res) {
    //     User.create({
    //         login: req.body.login,
    //         password: req.body.password
    //     }, function (err) {
    //         if (err) {
    //             res.send(err);
    //         }
    //     });
    //     console.log('post registration');
    // });

    app.post('/login', function (req, res) {
        User.findOne({ login: req.body.login, password: req.body.password },
            function (err, users) {
                if (err) {
                    res.send(err);
                }
                const token = jwt.sign(users.login, serverJWTSecret);
                res.status(200).send({
                    user: users.login,
                    token: token
                });
            })
        console.log('post login');
    });
}