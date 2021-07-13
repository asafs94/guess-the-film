import type { CharInputArray } from "../WordInput/types"

type GameFormProps = {
  words: CharInputArray[], onSubmit: (name: string) => void, className?: string
}
type FocusIndicator = { index: number, direction: "forward" | "backward" }