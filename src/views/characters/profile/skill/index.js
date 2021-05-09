import React from 'react'

import { InputNumber } from 'primereact/inputnumber'

import styles from './skill.module.scss'

const Skill = ({ value = 0, setValue = (value) => { }, action = () => { }, name = '', max = 20, isDisabled = true }) => {
  return (
    <div className={styles.skill}>
      <InputNumber value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" min={1} max={max} size={2} format={false} disabled={isDisabled} />
      <p onClick={() => action(value)}>{name}</p>
    </div>
  )
}

export default Skill