'use strict';

const app = require('./express/server');

app.listen(8080, () => console.log('Local app listening on port 8080!'));