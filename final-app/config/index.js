const configValues = require('./config');

module.exports = {

    getDbConnectionString: function () {
        return 'mongo://' + configValues.uname + ':' +
                            configValues.pwd +
                            '@localhost:27017/nodetodo';
    }
};