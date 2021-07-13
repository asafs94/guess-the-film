import { FC, ReactNode, useState } from "react";
import Icons from "../../assets/icons";
import Grow from "../Animations/Grow";
import Slide from '../Animations/Slide'
import Paper from "../Paper";
import styles from './Modal.module.scss';

type Props = {
  children: ReactNode,
  onClose?: () => void;
  header?: string
  show: boolean
}

const Modal: FC<Props> = ({ show, onClose, children, header }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <Grow in={show} onEntered={() => setShowModal(true)}>
      <div className={styles.Root} >
        <div className={styles.Backdrop} onClick={() => setShowModal(false)} />
        <Slide in={showModal} onExited={onClose}>
          <Paper className={styles.Modal}>
            {header && <h3 className={styles.Header} >{header}</h3>}
            <button className={styles.Close} onClick={() => setShowModal(false)} >
              <Icons.Close />
            </button>
            <div className={styles.Content} >
              {children}
            </div>
          </Paper>
        </Slide>
      </div>
    </Grow>


  )
}


export default Modal;