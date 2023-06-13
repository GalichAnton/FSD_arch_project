import type webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCSSLoaders } from './loaders/buildCSSLoaders'
import { type BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  // const tsLoader = {
  //   test: /\.tsx?$/,

  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoaders = buildCSSLoaders(isDev)

  const babelLoader = buildBabelLoader(options)

  const fileLoaders = [
    {
      test: /\.svg$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                    currentColor: true,
                },
              },
            ],
          },
        },
      }],
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

  return [
    babelLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // tsLoader
    cssLoaders,
    ...fileLoaders,
  ]
}
