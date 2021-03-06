// import { resolve as _resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname, path } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = (env) => {
    // source mapping
    const isProduction = env === 'production';

    return {
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, './dist/'),
            publicPath: './dist/',
            filename: 'bundle.js/',
        },
        resolve: {
            alias: {
                components: path.resolve(__dirname, './src/components/'),
            },
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            // contentBase: path.join(__dirname, './build'),
            static: './',
            compress: true,
            port: 3000,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            preset: '@/babel-preset-env',
                        },
                        {
                            loader: 'eslint-loader',
                        },
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                        // Compiles Sass to CSS
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg)$/,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/,
                    use: [
                        // Creates `style` nodes from JS strings
                        'style-loader',
                        // Translates CSS into CommonJS
                        'css-loader',
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve('./public/index.html'),
            }),
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
    };
};
