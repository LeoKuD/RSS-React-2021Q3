const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [new TerserWebpackPlugin(), new CssMinimizerPlugin()];
  }
  return config;
};

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const styleLoader = (extra) => {
  const loaders = [{ loader: MiniCssExtractPlugin.loader }, "css-loader"];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const babelOptions = (preset) => {
  const options = {
    presets: ["@babel/preset-env"], // используемые плагины
  };
  if (preset) {
    options.presets.push(preset);
  }
  return options;
};

const jsxLoaders = (isDev) => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions("@babel/preset-react")
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

module.exports = {
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./src/app.jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: filename("js"),
    clean: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  devtool: isDev ? "source-map" : false,
  optimization: optimization(),
  mode: "development",
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: isDev,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "webpack Boilerplate",
      template: path.resolve(__dirname, "./src/index.html"), // шаблон
      filename: "index.html", // название выходного файла
      favicon: "./src/favicon.png",
      hash: isProd,
    }),
    // применять изменения только при горячей перезагрузке
    new webpack.HotModuleReplacementPlugin(),
    // new FaviconsWebpackPlugin("./src/favicon.png"),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelOptions(),
      },
      {
        test: /\.ts$/i,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: babelOptions("@babel/preset-typescript"),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: jsxLoaders(isDev);
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/i,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: styleLoader(),
      },
      {
        test: /\.less$/i,
        use: styleLoader("less-loader"),
      },
      {
        test: /\.scss$/i,
        use: styleLoader("sass-loader"),
      },
      { test: /\.xml$/i, use: "xml-loader" },
      { test: /\.(csv|tsv)$/, use: "csv-loader" },
    ],
  },
};
