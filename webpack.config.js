/*
* @Author: lx
* @Date:   2019-05-11 11:22:55
* @Last Modified by:   lx
* @Last Modified time: 2019-05-11 13:30:33
*/
const pathlib = require('path');

module.exports={
	entry: {
		index: './src/index.js',
		test :'./src/1.js'
	}, //入口文件
	output:{
		path:pathlib.resolve('dest/'),//目标文件
		filename:'[name].bundle.js'
	}
}