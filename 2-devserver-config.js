/*
* @Author: lx
* @Date:   2019-05-11 12:46:48
* @Last Modified by:   lx
* @Last Modified time: 2019-05-12 16:58:25
*/

const pathlib=require('path');

module.exports={
	mode :'development', 
	entry:'./src/index',
	output:{
		path     :pathlib.resolve('dest'),
		filename :'bundle.js'
	},

	devServer:{
		contentBase: pathlib.resolve('static'),//你要提供哪里的内容给虚拟服务器用,展示的頁面？
		hot        :true,
		port       :8090
	}
}