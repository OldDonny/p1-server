import * as express from 'express';
import * as path from 'path';
import * as bp from 'body-parser'
import api from './routers/api'

const app = express();

app 

    .disable('x-powered-by')
    .use(bp.json())
    .use(bp.urlencoded({extended:true}))
    .use('/api', (req, res, next) => { 
        console.log('making api call');
        next();
    }, api)

    //to serve dist 
    .use(express.static(path.join(__dirname + '/../dist')))
    .get('/*', (req: express.Request, res: express.Response) => {
        res.sendFile(path.join(__dirname + '/../dist/index.html'));
    });

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});