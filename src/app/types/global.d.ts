declare module '*.module.scss' {
  type IClassNames = Record<string, string>;
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.module.css';
declare module '*.svg' {
  import type React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest';
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};
