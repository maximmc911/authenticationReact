import s from '../style/AutoPages.module.css'
import apple from '../imageAutoPages/apple.png'
import faceboock from '../imageAutoPages/Facebook.png'
import google from '../imageAutoPages/google.png'
import AutoPagesComponentPC from './AutoPagesComponentPC'
import { useState } from 'react'
import { formInput, modal } from './interface/index'
import { SentMessage } from './SentData/index'
import ModalWindow from './ModalWindow'

const AutoPagesFirst = () => {
    // constants
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [emailTouch, setEmailTouch] = useState<boolean>(false);
    const [passwordTouch, setPasswordTouch] = useState<boolean>(false);

    const [emailError, setEmailError] = useState<string>('E-mail не может быть пустым');
    const [passwordError, setPasswordError] = useState<string>('Пароль не может быть пустым');

    const formData: formInput = {
        email: '',
        password: '',
    };
    const [modal, setmodal] = useState<modal>({
        icon: null,
        close: null,
    })



    // functions
    const emailHandler = (e: object) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        setEmail(e.target.value)
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(`Некорректный E-mail`)
        } else {
            setEmailError(``)
        }
    }
    const passwordHandler = (e: object) => {
        setPassword(e.target.value)
        if (!e.target.value) {
            setPasswordError(`Пароль не может быть пустым`)

        }
        if (e.target.value.length < 6) {
            setPasswordError(`Пароль должен быть больше 6 символов`)
        } else {
            setPasswordError(``)
        }

    }

    const handlerExamination = (e: object): void => {
        switch (e.target.name) {
            case `email`:
                setEmailTouch(true)
                break;
            case `password`:
                setPasswordTouch(true)
                break;


        }
    }
    const pushForm = (): void => {
        formData.email = email;
        formData.password = password;
        setEmail(``);
        setPassword(``);
        if (SentMessage(formData)) {
            setmodal({ icon: true, close: true })
        } else {
            ClickBadModal()
        }


    }


    const ClickBadModal = (): void => {
        setmodal({ icon: null, close: true })
    }






    return (
        <>
            <div className={s.authorization}>
                <div className={s.autoPages}>
                    <div className={s.autoPages_Header}>
                        <h1>Sign in</h1>
                        <h4>If you don't have an account register <br /> You can   Register here !  </h4>
                    </div>

                    <div className={s.formInput}>
                        <form>
                            <p>E-mail:</p>
                            <input
                                name='email'
                                value={email}
                                onChange={e => emailHandler(e)}
                                onBlur={e => handlerExamination(e)}
                                className={s.Input} type="email"
                                placeholder="Enter your email address"
                            />

                        </form>
                        {(emailTouch && emailError) && <span>{emailError}</span>}
                        <form>
                            <p>Password:</p>
                            <input
                                value={password}
                                name='password'
                                onChange={e => passwordHandler(e)}
                                onBlur={e => handlerExamination(e)}
                                className={s.Input} type="password"
                                placeholder="Enter your Password" />
                        </form>
                        {(passwordTouch && passwordError) && <span>{passwordError}</span>}


                    </div>
                    <div className={s.formInputFooter}>
                        <div className='dbtn' >

                            <button onClick={pushForm} className={s.btn}>Login</button>
                        </div>
                        <p>or continue with</p>
                        <div onClick={ClickBadModal} className={s.footerIcons}>
                            <img src={faceboock} alt="facebook" />
                            <img src={apple} alt="apple" />
                            <img src={google} alt="google" />

                        </div>
                    </div>
                </div>
                <AutoPagesComponentPC />
            </div>
            <ModalWindow modal={modal} />
        </>
    )
}

export default AutoPagesFirst