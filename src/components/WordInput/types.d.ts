import { SingleCharInputProps } from "../SingleCharInput/types"

type WordInputProps = {
  className?: string,
  onChange: (word: CharInputArray) => void,
  disabled?: boolean,
  value: CharInputArray,
  onAskFocus?: (element: HTMLDivElement, direction: 'forward' | 'backward') => void
  name?: string,
  preferredCasing?: "uppercase" | "lowercase",
  autoFocus?: boolean
}

type CharInputArray = Array<SingleCharInputProps>