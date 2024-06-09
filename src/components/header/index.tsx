import { ThemeToggle } from '../theme/toggle'

export function Header() {
  return (
    <header className="grid grid-cols-3 items-center border-b p-4">
      <span className="text-start">Início</span>

      <span className="text-center">Chess Game TS</span>

      <span className="text-end">
        <ThemeToggle />
      </span>
    </header>
  )
}
