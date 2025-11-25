const router = require ('express').Router ();
const { signupController, loginController } = require ('../server/controller/controller');

// signup route
router.post('/signup', signupController);

// loogin router
router.post('/login', loginController);

module.exports = router;