later = require 'later'

# composite = [
#     {
#         h: [10]
#         m: [30]
#     },
#     {
#         h: [18]
#         m: [30]
#     }
# ]
# exception = [
#     {
#         m: [1]
#     },
#     {
#         dw: [1,7]
#     }
# ]

# sched = 
#     schedules: composite
#     exceptions: exception

# later.date.localTime()
# console.log "now:" + new Date()

# occurrences = later.schedule(sched).next(10)
# console.log occurrences

# for i in [1..occurrences.length]
#     console.log occurrences[i-1]
cron = later.parse.cron('*/2 * * * *')
# t = later.setTimeout ()->
#     test(5)
# ,cron
t = later.setInterval ()->
    test Math.random(10)
,cron
t2 = later.setInterval ()->
    test 5
,cron
# setTimeout ()->
#     t.clear()
#     console.log 'clear'
# ,2*60*1000

test = (val)->
    console.log new Date()
    console.log val