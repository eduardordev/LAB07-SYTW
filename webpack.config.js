const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/start-home.js",
    spitfire: "./src/start-spitfire.js",
    more: "./src/start-more.js",
    worlds: "./src/start-worlds.js",
    shelter: "./src/start-shelter.js",
    nurture: "./src/start-nurture.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/home/home.html",
      filename: "home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/spitfire/spitfire.html",
      filename: "spitfire.html",
      chunks: ["spitfire"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/more/more.html",
      filename: "more.html",
      chunks: ["more"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/worlds/worlds.html",
      filename: "worlds.html",
      chunks: ["worlds"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/shelter/shelter.html",
      filename: "shelter.html",
      chunks: ["shelter"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/nurture/nurture.html",
      filename: "nurture.html",
      chunks: ["nurture"],
    }),
  ],
  module: {
    //   Incluyo los loaders para css
    // 1. Utilizo css-loader para transformar a js
    // 2. Utilizao style-loader para inyectar el css en js al DOM.
    rules: [
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|mp3|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
        ],
      },
    ],
  },
};
