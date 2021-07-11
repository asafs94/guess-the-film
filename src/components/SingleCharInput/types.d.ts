
export type SingleCharInputProps = {
  onPrevious?: () => void,
  onNext?: () => void,
  regex?: RegExp,
  onChange?: (value: string) => void,
  defaultValue?: string,
  disabled?: boolean,
  className?: string
}