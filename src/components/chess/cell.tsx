import { cn } from '@/lib/utils'

import { ChessPiece } from './piece'
import { ChessCellSubtitle } from './subtitle'
import type { IChessLocation, IChessPiece, IChessPieceMovement } from './types'
import {
  chessCellSubtitleByIndex,
  chessRowCells,
  parseChessCell,
} from './utils'

interface ChessCellProps {
  location: IChessLocation
  piece: IChessPiece
  isSelected: boolean
  onMovement: IChessPieceMovement
}

export function ChessCell(props: ChessCellProps) {
  const { location, piece, isSelected, onMovement } = props
  const [row, col] = location

  const isEvenLocation = (row + col) % 2 === 0

  const [color, position] = parseChessCell(piece)

  return (
    <div
      className={cn(
        'relative md:p-4 p-1',
        isEvenLocation ? 'bg-slate-300' : 'bg-slate-800',
        color === 'black' ? 'text-slate-600' : 'text-slate-100',
        isSelected && 'bg-emerald-300',
      )}
    >
      {/* subtitle number (first column) */}
      <ChessCellSubtitle
        position="left"
        subtitle={col === 0 && chessRowCells.length - row}
      />

      <ChessPiece
        piecePosition={position}
        onClick={() => onMovement(piece, color, location)}
      />

      {/* subtitle letter (last row) */}
      <ChessCellSubtitle
        position="right"
        subtitle={
          row === chessRowCells.length - 1 && chessCellSubtitleByIndex[col]
        }
      />
    </div>
  )
}
