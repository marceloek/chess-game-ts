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
      <div
        onClick={onClick}
        onKeyUp={() => undefined}
        className="md:text-5xl text-2xl grid place-items-center size-full hover:cursor-pointer hover:opacity-50 hover:transition-all"
      >
        {chessPieceByPosition[piecePosition]}
      </div>
    )
  )
}
