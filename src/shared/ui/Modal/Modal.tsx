import { useTheme } from '@/app/providers/ThemeProvider'
import {
  type ReactNode, type FC,
} from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import cls from './Modal.module.scss'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '@/shared/lib/hooks/useModal/useModal'

interface ModalProps {
  className?: string
  children?: ReactNode
  onClose: () => void
  isOpen?: boolean
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal: FC<ModalProps> = (props) => {
  const {
    className,
    children,
    onClose,
    isOpen = false,
    lazy = false,
  } = props

  const { theme } = useTheme()

  const {
    close,
    isClosing,
    isMounted,
  } = useModal({
    animationDelay: ANIMATION_DELAY,
    onClose,
    isOpen,
  })

  const mods: Record<string, boolean | undefined> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy && !isMounted) return null

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
      <Overlay onClick={close} />
        <div className={cls.content} >
          {children}
        </div>
      </div>
    </Portal>
  )
}
