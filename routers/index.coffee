mainController = require('../controllers').main
_ = require 'underscore'
littleUtil = require 'little-util'
self = [
    
]
Routers = _.union.apply this,_.values littleUtil.requireDirModules __dirname
Routers = Routers.concat self
module.exports = Routers