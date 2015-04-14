express = require 'express'
app = express()
timeout = require 'connect-timeout'
bodyParser = require 'body-parser'
multer = require 'multer'
_ = require 'underscore'
mongoose = require 'mongoose'
session = require 'express-session'
cookieParser = require 'cookie-parser'
path = require 'path'
littleUtil = require 'little-util'
littleUtil.requireModules [],true
log4js = require 'log4js'
logconfig = require './config/system'

log4js.configure logconfig
logger = log4js.getLogger 'normal'
logger.setLevel 'INFO'
# mongoose.connect 'mongodb://'

app.set 'view engine', 'jade'
app.set 'views', path.join(__dirname, 'views')

app.use log4js.connectLogger logger,{level: 'auto'}
app.use bodyParser.json()
app.use bodyParser.urlencoded({ extended: true })
app.use multer({dest:'./uploads/'})
app.use session {secret: 'littleframework', key: 'littleframework', cookie: {maxAge: 1000*60*30}}
app.use cookieParser()
app.use '/static/', express.static require('path').join(__dirname, 'static/')
app.use '/js/', express.static require('path').join(__dirname, 'static/javascripts')
app.use '/css/', express.static require('path').join(__dirname, 'static/stylesheets')
app.use '/img/', express.static require('path').join(__dirname, 'static/images')

routers = require './routers'

initRouters = (routers)->
    routers.forEach (routeInfo)->
        _.defaults routeInfo,{middleware: [],type: 'get'}
        if routeInfo.timeout
            routeInfo.middleware.push timeout routeInfo.timeout
        app[routeInfo.type] routeInfo.url,routeInfo.middleware,routeInfo.handler
initRouters routers

app.listen 3000