//install webpack
Sudo npm install webpack –g
//add webpack.config.json file
module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  }
}
 // html file to be loaded
 <html>
  <body>
    <script src="bundle.js"></script>
  </body>
</html>

//javascript file to load
document.write('welcome to my app');
console.log('app loaded');

//watch the changes of files

Webpack –watch

// set watch: true in webpack.config.json

module.exports = {
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  }, 
  watch: true
}
// another js file
console.log('global.js is now loaded...');

//edit the webpack.config.json file to accept multiple file

module.exports = {
  entry: ["./global.js", "./app.js"],
  output: {
    filename: "bundle.js"
  }
}

//webpack loaders installation and its dependecies

npm install babel-core babel-loader jshint jshint-loader node-libs-browser babel-preset-es2015 babel-preset-react webpack  --save-dev

//changing the babel loader file (logger.js)
let checkName= (firstName, lastName) => {
 if(firstName !== 'nader' || lastName !== 'dabit') {
   console.log('You are not Nader Dabit');
 } else {
    console.log('You are Nader Dabit');
  }
}
checkName('nader', 'jackson');

//change webpack.config.json

module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
},
 module: {
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015'] 
       }
     }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}


