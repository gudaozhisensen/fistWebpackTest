const pathlib = require('path');
// import pathlib from 'path'; //ES6模板


module.exports={
    module:'development',
    entry : '/src/ES6',
    output: {
        path: pathlib.resolve('dest'),
        filename:'budle.js'
    },
    module:{
        rules:[
            {
                exclude:/node_modules/,
                test: /\.js$/,
                use:{
                    loader : 'bable-loader',
                    options: {
                        presets:['env']
                    }
                }
            }
        ]
    }
};
    