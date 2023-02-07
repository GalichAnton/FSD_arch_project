import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.endsWith('.module.scss'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          },
        },
      },
      "sass-loader",
    ],
  }

  const fileLoaders = [
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff2?|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ]

  return [tsLoader, cssLoaders, ...fileLoaders]
}