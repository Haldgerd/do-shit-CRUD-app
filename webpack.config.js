// import { resolve as _resolve } from "path";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

module.exports = (env) => {
  // source mapping
  const isProduction = env === "production";

  return {
    entry: "./index.jsx",
    output: {
      path: path.resolve(__dirname, "build"),
      publicPath: "/",
      filename: "bundle.js",
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components"),
      },
      extensions: [".js", ".jsx"],
    },
    devServer: {
      contentBase: "./build",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve("./index.html"),
      }),
    ],
    devtool: isProduction ? "source-map" : "inline-source-map",
  };
};
