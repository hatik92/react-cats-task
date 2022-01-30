import { FC } from 'react'
import s from './loading.module.sass'

const Loading: FC<any> = () => {
  return (<>
    <div className={s.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </>)
}

export default Loading