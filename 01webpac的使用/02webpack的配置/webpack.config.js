const path = require('path');
//用node的东西，缺少node的包，就要用npm init,生成了package。json,
//如果json文件依赖某些东西，要用npm install
//path.resolve()拼接路径
//执行webpack就可以了 （webpack ./src/main.js ./dist/bundle.js）
//npm run serve 跑程序，
//npm run build 打包，还要再把webpack和npm run build 映射
//在json文件找到script，写build的key和v，执行npm run build 就执行脚本了
//优点，免去复杂的命令，
// 优先选择本地的webpack版本，防止版本冲突
//npm install webpack@3.6.0 --save-dev局部安装 全局安装（npm install webpack@3.6.0 -g）
//json 文件多个"devDependencies": {
//     "webpack": "^3.6.0"
//   }
//表示开发依赖
//生成node_modules包
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}