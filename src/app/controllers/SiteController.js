const Property = require('../models/Property');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] News
    index(req, res, next) {

        Property.find({})
            .then(properties => {
                res.render('home', {
                    properties: multipleMongooseToObject(properties),
                    header: true,
                });
            })
            .catch(next);

        // res.render('home');
    }
}

module.exports = new SiteController;