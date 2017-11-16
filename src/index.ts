import * as express from 'express';
import * as path from 'path';
import * as bp from 'body-parser'
import api from './routers/api'

const app = express();

app 

    .disable('x-powered-by')
    .use((req, res, next) => {
        res.header('Acess-Control-Allow-Origin', "*");
        res.header('Acess-Control-Allow-Methods', 'GET,POST,UPDATE,DELETE,PUT');
        res.header('Acess-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    })
    .use(bp.json())
    .use(bp.urlencoded({extended:true}))
    .use('/api',api)

    //to serve dist 
    .use(express.static(path.join(__dirname + '/../dist')))
    .get('/*', (req: express.Request, res: express.Response) => {
        res.sendFile(path.join(__dirname + '/../dist/index.html'));
    });

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${process.env.PORT || 3000}`);
});