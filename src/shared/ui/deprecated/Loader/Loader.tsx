import React, { type FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}
/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
