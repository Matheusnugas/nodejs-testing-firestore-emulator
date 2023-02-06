const { onRequest } = require('firebase-functions/v2/https') 

exports.testingapi = onRequest(async (req, res) =>{
    const itemsRouter = require('./routes/item.routes')
    return itemsRouter(req, res);
});
