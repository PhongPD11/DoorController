class SettingController {

    // [GET] News
    index(req, res) {
        res.render('setting',
            { header: true }
        );
    }

}

module.exports = new SettingController;