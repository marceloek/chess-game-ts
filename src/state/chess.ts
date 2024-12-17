import type {
  IChessData,
  IChessLocation,
  IChessPiece,
} from '@/components/chess/types'
import { createChess } from '@/components/chess/utils'
import { type StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ChessState {
  data: IChessData
  location: IChessPiece[][]
}

interface ChessActions {
  // location
  getMovementOptions(piece: IChessPiece, oldLocation: IChessLocation): void
  setMovement(
    piece: IChessPiece,
    oldLocation: IChessLocation,
    newLocation: IChessLocation,
  ): void
}

type ChessStore = ChessState & ChessActions

const chessStore: StateCreator<ChessStore> = (set) => ({
  data: {
    color: 'white',
    movements: 0,
    status: 'none',
    piece: null,
  },

  location: [
    createChess.main(),
    createChess.pawn(),
    createChess.empty(),
    createChess.empty(),
    createChess.empty(),
    createChess.empty(),
    createChess.pawn('white'),
    createChess.main('white'),
  ],
  getMovementOptions: (piece, location) => {
    console.log('boa jogada:', piece, location)

    set((state) => {
      return {
        data: {
          ...state.data,
          piece: state.data.piece === piece ? null : piece,
        },
      }
    })
  },
  setMovement: (piece, [oldRow, oldCol], [newRow, newCol]) => {
    set((state) => {
      const newChess = [...state.location]

      if (!newChess[newRow][newCol]) {
        newChess[oldRow][oldCol] = null
        newChess[newRow][newCol] = piece
      }

      return {
        location: newChess,
      }
    })
  },
})

export const useChessStore = create<ChessStore>()(
  persist(chessStore, { name: 'chess' }),
)
