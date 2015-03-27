littleFs = require 'little-fs'
fs = require 'fs'
path = require 'path'
models = require '../models'
superagent = require 'superagent'
_ = require "underscore"
class NbaController
    getNbaInfo1: (req, res, next)->
        superagent.get('http://stats.nba.com/stats/homepagev2?GameScope=Season&LeagueID=00&PlayerOrTeam=Player&PlayerScope=All+Players&Season=2014-15&SeasonType=Regular+Season&StatType=Traditional')
            .end (err, resp)->
                allData = JSON.parse resp.text
                results = []
                homepage = 0;
                playCount = 0;
                selDocs = _.pluck allData.resultSets, 'rowSet'
                selDocs = _.flatten selDocs, true
                _.each selDocs,(doc)->
                    if homepage % 5 == 0
                        playCount++
                    homepage++
                    doc.push playCount
                    doc.push homepage
                    doc = _.object ["iid","numid","playername","valid","cteamname","teamname","playid","tl","score","playCount","id"],doc
                    results.push doc
                res.json results
module.exports = new NbaController()