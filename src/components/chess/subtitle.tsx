import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface Props {
  position: 'left' | 'right'
  subtitle: ReactNode
}

export function ChessCellSubtitle(props: Props) {
  const { subtitle, position } = props

  return (
    <span
      className={cn(
        'absolute p-1 text-emerald-700 leading-none',
        position === 'left' ? 'top-0 left-0' : 'right-0 bottom-0',
      )}
    >
      {subtitle}
    </span>
  )
}
