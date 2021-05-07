import React, { useState, useEffect } from 'react'

import DiceService from '../../services/dice/dice-service'

import styles from './dice.module.scss'

const Dice = ({ value = -1, text = '' }) => {

  const [diceResult, setDiceResult] = useState(0)
  const [textResult, setTextResult] = useState('')

  useEffect(() => {
    setDiceResult(value)
    setTextResult(text)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rollDefaultDice = (diceFunc) => {
    setDiceResult(diceFunc())
    setTextResult('')
  }

  return (
    <div className={styles.content}>
      <div className={styles.dices}>
        <div className={styles.dice} onClick={() => rollDefaultDice(DiceService.rollD6)}>d6</div>
        <div className={styles.dice} onClick={() => rollDefaultDice(DiceService.rollD20)}>d20</div>
        <div className={styles.dice} onClick={() => rollDefaultDice(DiceService.rollD100)}>d100</div>
      </div>

      <div className={styles.result}>
        <h1>{diceResult}</h1>
        <p>{textResult}</p>
      </div>
    </div>
  )
}

export default Dice