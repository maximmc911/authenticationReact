import s from '../style/CompomemtPC.module.css'
import Sally from '../imageAutoPages/Saly-10.png'
const AutoPagesComponentPC = () => {
  return (
    <>
      <div className={s.image}>
        <div className={s.logo}>
          <img src={Sally} alt="logo" />
        </div>
        <div className={s.description}>
          <h1>Sign in to name</h1>
        </div>
      </div>
    </>
  )
}

export default AutoPagesComponentPC