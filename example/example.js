import express from 'express'
import { authorize } from 'rbac-express-auth'

const app = express()

app.use((req, res, next) => {
    req.user = {
        id: 'abcd',
        role: 'USER' // role of loggedin user
    }

    next();
})


app.get('/', authorize(['USER', 'ADMIN']), (req, res) => {  // user of which role can assess this route
    res.status(200).json({
        message: 'request successfull'
    });
})


app.listen(4008, () => {
    console.log(`server is running on port: 4008`);
    
})