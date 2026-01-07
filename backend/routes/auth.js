const router = require ('express').Router ();
const signupController = require ('../controllers/controller');
const loginController = require ('../controllers/loginController');
// const rateLimit = require ("express-rate-limit");

// //Apply rate limiting to login route
// const authLimiter = rateLimit ({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 10, // limit each IP to 10 requests per windowsMs
//     keyGenerator: (req)=> {
//         return req.user ? req.user.id : req.ip
//     },
//     message: {
//         error: "Too many login attempts from this Ip, please try again after 15 minutes"
//     }
// })

// signup route
router.post('/signup', signupController);

// login router
router.post('/login',loginController);

module.exports = router;