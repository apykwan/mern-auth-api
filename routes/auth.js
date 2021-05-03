const express = require('express');

// import controllers
const { 
    signup, 
    accountActivation, 
    signin,
    forgotPassword,
    resetPassword,
    googleLogin,
    facebookLogin 
} = require('../controllers/auth');

// import validators
const { 
    userSignupValidator, 
    userSigninValidator, 
    forgetPasswordValidator, 
    resetPasswordValidator 
} = require('../validators/auth');
const { runValidation } = require('../validators');

const router = express.Router();

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/account-activation', accountActivation);
router.post('/signin', userSigninValidator, runValidation, signin);

// forgot reset password
router.put('/forgot-password', forgetPasswordValidator, runValidation, forgotPassword);
router.put('/reset-password', resetPasswordValidator, runValidation, resetPassword);

// google and facebook
router.post('/google-login', googleLogin);
router.post('/facebook-login', facebookLogin);

module.exports = router;