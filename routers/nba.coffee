NbaController = require('../controllers').nba
module.exports = [
    {
        type: 'get'
        url: '/nba/getInfo1'
        middleware: []
        handler: NbaController.getNbaInfo1
        # timeout: 60000
    }
]