var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    debug: true,
    entry: {
        scripts: ["./dev/scripts/vendor.ts", "./dev/scripts/bootstrap.ts"],
        styles: "./dev/sass/all.scss"
    },
    module: {
        preLoaders: [ { test: /\.ts$/, loader: 'tslint-loader' } ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ]
                },
                exclude: [ /Spec\.ts$/, /node_modules/ ]
            },
            {
                test   : /\.(ttf|TFF|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader","css-loader!sass-loader")
            }
        ],
        noParse: [ /zone\.js\/dist\/.+/, /angular2\/bundles\/.+/ ]
    },
    resolve: {
        // ensure loader extensions match
        extensions: ['','.ts','.js','scss']
    },
    output: {
        path: "./prod",
        filename: "[name].js",
        sourceMapFilename: '[name].map'
    },
    plugins: [
        new ExtractTextPlugin("[name].css")
    ]
};