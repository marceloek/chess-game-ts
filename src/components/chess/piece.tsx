import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { IChessPiecePosition } from './types'
import { chessPieceByPosition } from './utils'

interface ChessPieceProps {
  piecePosition?: IChessPiecePosition
  onClick(): void
}

export function ChessPiece(props: ChessPieceProps) {
  const { piecePosition, onClick } = props

  return (
    piecePosition && (
      <FontAwesomeIcon
        icon={chessPieceByPosition[piecePosition]}
        className="block aspect-square size-full hover:cursor-pointer hover:opacity-50 hover:transition-all"
        onClick={onClick}
      />
    )
  )
}
