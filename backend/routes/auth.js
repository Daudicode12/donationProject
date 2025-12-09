const router = require ('express').Router ();
const { signupController, loginController } = require ('../controllers/controller');

// signup route
router.post('/signup', signupController);

// loogin router
router.post('/login', loginController);

module.exports = router;