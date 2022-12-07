class WifiController {

    // [GET] News
    index(req, res) {
        res.render('wifi',
            { header: true }
        );
    }

}

module.exports = new WifiController;