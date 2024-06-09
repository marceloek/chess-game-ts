import {
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons'

import type {
  IChessPiece,
  IChessPieceColor,
  IChessPieceIndex,
  IChessPiecePosition,
} from './types'

const chessPieceByPosition: Record<IChessPiecePosition, IconDefinition> = {
  pawn: faChessPawn,
  rook: faChessRook,
  knight: faChessKnight,
  bishop: faChessBishop,
  queen: faChessQueen,
  king: faChessKing,
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
  pawn: (color = 'black') => {
    return chessRowCells.map((_, index): IChessPiece => {
      return `${color}-pawn-${index}`
    })
  },
  main: (color = 'black') => {
    return chessRowCells.map((_, index): IChessPiece => {
      return `${color}-${chessCellPositionByIndex[index]}-${index}`
    })
  },
  empty: () => {
    return chessRowCells.map((): null => null)
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
