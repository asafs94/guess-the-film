import type { InputHTMLAttributes } from "react"

type WordInputProps = {
  className?: string,
  onChange: (word: CharInputArray) => void,
  disabled?: boolean,
  value: CharInputArray,
  onAskFocus?: (element: HTMLDivElement, direction: 'forward' | 'backward') => void
  name?: string
}

type CharInputArray = Array<InputHTMLAttributes<HTMLInputElement>>