var assert = require('assert');
var superagent = require('superagent');

var host = 'localhost:3000';

var testurl = '/nba/getInfo1';

var getNbaData = function(url,callback){
    superagent.get(url).end(function(err,res){
        callback(err,res);
    });
}

describe('nba data', function(){
    this.timeout(50000);
    describe('#getNbaInfo1()', function(){
        it('get nba data info',function(done){
            getNbaData('http://'+host+testurl,function(err,res){
                if(err) throw err;
                done();
            });
        });
    });
});