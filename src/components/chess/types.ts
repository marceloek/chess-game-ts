type IChessPieceColor = 'black' | 'white'

type IChessPiecePosition =
  | 'pawn'
  | 'rook'
  | 'knight'
  | 'bishop'
  | 'queen'
  | 'king'

type IChessPieceIndex = number

type IChessPiece =
  | `${IChessPieceColor}-${IChessPiecePosition}-${IChessPieceIndex}`
  | null

type IChessLocation = [number, number]

type IChessDataStatus = 'none' | 'check' | 'checkmate'

interface IChessData {
  movements: number
  piece: IChessPiece
  color: IChessPieceColor
  status: IChessDataStatus
}

type IChessPieceMovement = (
  piece: IChessPiece,
  color: IChessPieceColor,
  location: IChessLocation,
) => void

export type {
  IChessData,
  IChessLocation,
  IChessPiece,
  IChessPieceColor,
  IChessPieceIndex,
  IChessPieceMovement,
  IChessPiecePosition,
}
