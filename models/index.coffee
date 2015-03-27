mongoose = require 'mongoose'
Schema = mongoose.Schema
schema = require './schema'
_ = require 'underscore'

keys = _.keys schema
_.each keys,(key)->
    mongoose.model(key, new Schema(schema[key]));

getModel = (type)->
    mongoose.model(type)

module.exports =
    getModel: getModel