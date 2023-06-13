import { memo, useCallback } from 'react';

import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppButton, AppButtonVariant } from '../AppButton';
import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <AppButton onClick={onCopy} className={cls.copyBtn} variant={AppButtonVariant.CLEAR}>
        <CopyIcon className={cls.copyIcon} />
      </AppButton>
      <code>{text}</code>
    </pre>
  );
});
