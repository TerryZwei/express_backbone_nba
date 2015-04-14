module.exports = {
    appenders: [
        {type: 'console'},
        {
            type: 'file',
            filename: 'log/access.log',
            loggerHost: 'localhost'
            loggerPort: 3011
            backups: 3,
            category: 'normal',
            layout: 
                type: 'colored'
        }
    ]
}