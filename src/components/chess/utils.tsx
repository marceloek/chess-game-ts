import type {
  IChessPiece,
  IChessPieceColor,
  IChessPieceIndex,
  IChessPiecePosition,
} from './types'

const chessPieceByPosition: Record<IChessPiecePosition, string> = {
  pawn: '♟',
  rook: '♜',
  knight: '♞',
  bishop: '♝',
  queen: '♛',
  king: '♚',
}

const chessRowCells = Array.from<undefined>({ length: 8 })

const chessCellSubtitleByIndex: Record<number, string> = {
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd',
  4: 'e',
  5: 'f',
  6: 'g',
  7: 'h',
}

const chessCellPositionByIndex: Record<number, IChessPiecePosition> = {
  0: 'rook',
  1: 'knight',
  2: 'bishop',
  3: 'queen',
  4: 'king',
  5: 'bishop',
  6: 'knight',
  7: 'rook',
}

const createChess: Record<
  'pawn' | 'main' | 'empty',
  (color?: IChessPieceColor) => IChessPiece[]
> = {
  empty() {
    return chessRowCells.map((): null => null)
  },
  pawn(color) {
    if (!color) return this.empty()

    return chessRowCells.map((_, index): IChessPiece => {
      return `${color}-pawn-${index}`
    })
  },
  main(color) {
    if (!color) return this.empty()

    return chessRowCells.map((_, index): IChessPiece => {
      return `${color}-${chessCellPositionByIndex[index]}-${index}`
    })
  },
}

function parseChessCell<
  T = [IChessPieceColor, IChessPiecePosition, IChessPieceIndex],
>(square: IChessPiece): T {
  return (square ? square.split('-') : []) as T
}

export {
  chessCellSubtitleByIndex,
  chessPieceByPosition,
  chessRowCells,
  createChess,
  parseChessCell,
}
