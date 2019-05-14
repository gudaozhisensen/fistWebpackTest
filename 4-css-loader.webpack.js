const pathlib = require('path');
// import pathlib from 'path'; //ES6模板


module.exports={
    module:'development',
    entry : '/src/2',
    output: {
        path: pathlib.resolve('dest'),
        filename:'budle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/, use:'css-loader'
            }
        ]
    }
};
    