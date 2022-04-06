const path = require('path');
const fs = require('fs');
var glob = require("glob")
const HtmlWebpackPlugin = require('html-webpack-plugin')

var exercises =
    JSON.parse(fs.readFileSync('exercises.json', { encoding: 'utf8' }))

for (let exercise of exercises) {

    for (let entry of exercise["entries"]) {

        if (fs.existsSync(path.resolve(__dirname, `dist/${entry["file"]}`))) {
            entry['exists'] = true;
            exercise['exists'] = true;
        } else {
            console.log(entry["file"] + " does not exist");
        }
    }
}

console.log(JSON.stringify(exercises, null, 2));

let entries = {
    index: './src/index.ts'
}

let re = /src\/(\d\d)\/setup-(\w+).ts/;
let files = glob.sync("src/??/setup-*.ts");

for (let filename of files) {
    let match = re.exec(filename);
    let num = match[1];
    let name = match[2];

    if (fs.existsSync(path.resolve(__dirname, `src/${num}/setup-${name}.ts`))) {
        entries[name] = `./src/${num}/setup-${name}.ts`;
        console.log("+++++++ " + name + " => " + `./src/${num}/setup-${name}.ts`);
    }
}


module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: entries,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.tpl.html',
            exercises: exercises
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.glsl$/i,
                use: 'raw-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};
