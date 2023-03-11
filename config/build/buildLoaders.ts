import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const tsLoader = {
    test: /\.tsx?$/,

    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const cssLoaders = buildCSSLoaders(isDev)

  const babelLoader = buildBabelLoader(options)

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
