import { CSSTransition } from 'react-transition-group'

type Props = any

export default function Grow({ children, ...props }: Props) {
  return (
    <CSSTransition timeout={300} mountOnEnter unmountOnExit classNames='slide' {...props} >
      {children}
    </CSSTransition>
  )
}
