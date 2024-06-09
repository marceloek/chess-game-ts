import { useChessStore } from '@/state/chess'

function useChessDataState() {
  return useChessStore((state) => state.data)
}

function useChessLocationState() {
  return useChessStore((state) => state.location)
}

function useChessLocationActions() {
  return {
    get: useChessStore((state) => state.getMovementOptions),
    set: useChessStore((state) => state.setMovement),
  }
}

export { useChessDataState, useChessLocationActions, useChessLocationState }
