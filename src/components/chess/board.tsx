import {
  useChessDataState,
  useChessLocationActions,
  useChessLocationState,
} from '@/hooks/useChess'
import { ChessCell } from './cell'
import type { IChessPieceMovement } from './types'
import { chessRowCells } from './utils'

export function ChessBoard() {
  const chessData = useChessDataState()

  const chessLocation = useChessLocationState()
  const { get } = useChessLocationActions()

  const onMovement: IChessPieceMovement = (piece, color, location) => {
    if (color !== chessData.color) {
      return
    }

    get(piece, location)
  }

  return (
    <div className="grid aspect-square flex-1 max-w-162 grid-rows-8 rounded-md border-4 border-slate-700">
      {chessRowCells.map((_item, row) => {
        return (
          <div key={crypto.randomUUID()} className="grid grid-cols-8">
            {chessRowCells.map((_, col) => {
              const piece = chessLocation[row][col]

              return (
                <ChessCell
                  key={crypto.randomUUID()}
                  location={[row, col]}
                  piece={piece}
                  isSelected={piece ? chessData.piece === piece : false}
                  onMovement={onMovement}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
