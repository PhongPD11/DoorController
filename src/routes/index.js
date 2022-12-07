const settingRouter = require('./setting');
const wifiRouter = require('./wifi');
const siteRouter = require('./site');
const accountRouter = require('./account');

function route(app) {
    app.use('/setting', settingRouter);
    app.use('/wifi', wifiRouter);
    app.use('/account', accountRouter);
    app.use('/', siteRouter);
}

module.exports = route;