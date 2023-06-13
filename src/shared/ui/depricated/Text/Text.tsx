import { classNames, type Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
  INVERTED = 'inverted',
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;

  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = (props: TextProps) => {
  const {
    className,
    text,
    title,
    align = TextAlign.LEFT,
    theme = TextTheme.PRIMARY,
    size = TextSize.M,

    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };

  return (
    <div className={classNames(cls.Text, mods, [className])}>
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Paragraph`}>
          {text}
        </p>
      )}
    </div>
  );
};
