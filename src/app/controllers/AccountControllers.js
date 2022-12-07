class AccountController {

    // [GET] /account/login
    login(req, res, next) {
        res.render('account/login');
    };

    // [GET] /account/login

    register(req, res, next) {
        res.render('account/register');
    }


    regist(req, res, next) {
        res.render('account/regist');
    }

}

module.exports = new AccountController();


