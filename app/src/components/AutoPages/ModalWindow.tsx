import { useState, useEffect } from 'react'
import s from '../style/ModalWindow.module.css'
import styleBTN from '../style/AutoPages.module.css'
import { modal } from './interface'
import ok from '../imageAutoPages/icons8-ок.svg'
import no from '../imageAutoPages/no.png'

const ModalWindow = ({ modal }) => {

  const ModalW: modal = {
    icon: modal.icon,
    close: modal.close
  }



  const [icon, setIcon] = useState<boolean | null>()

  const [close, setClose] = useState<boolean | null>();
  const handleClose = (): void => {
    setClose(!close)
  }

  useEffect(() => {
    setIcon(ModalW.icon);
    setClose(ModalW.close);
  }, [modal])


  return (
    <>
      <div className={close ? s.bg : s.bgclose} onClick={handleClose} >
        <div className={s.window}>
          <div className={s.content}>
            {icon ?
              (<img src={ok} alt="logo" />) :
              (<img src={no} alt="logo" />)

            }
            {icon ?
              (<h1>Добро пожаловать!</h1>) :
              (<h1>Недоступно!</h1>)

            }

            <div className={s.btn}>

              <div className={styleBTN.dbtn} >

                <button onClick={handleClose} className={styleBTN.btn}>Далее</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default ModalWindow