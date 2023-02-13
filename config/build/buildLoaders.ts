import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,

    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoaders = buildCSSLoaders(isDev)

  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env'],
        ],
      },
    },
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

  return [babelLoader, tsLoader, cssLoaders, ...fileLoaders]
}
