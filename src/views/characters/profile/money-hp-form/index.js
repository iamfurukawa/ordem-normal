import React from 'react'

import { InputNumber } from 'primereact/inputnumber'

const MoneyHPForm = ({ money, setMoney, hp, setHp, isDisabled = true }) => {
  return (
    <div className="p-fluid" style={{ marginTop: '30px', marginBottom: '10px' }}>
      <div className="p-field p-grid">
        <label htmlFor="firstname4" className="p-col-12 p-md-3">Dinheiro</label>
        <div className="p-col-12 p-md-9">
          <InputNumber id="dinheiro" value={money} onValueChange={(e) => setMoney(e.value)} mode="decimal" locale="pt-BR" minFractionDigits={2} disabled={isDisabled}/>
        </div>
      </div>
      <div className="p-field p-grid">
        <label htmlFor="lastname4" className="p-col-12 p-md-2">HP</label>
        <div className="p-col-12 p-md-10">
          <InputNumber id="life" value={hp} onValueChange={(e) => setHp(e.value)} mode="decimal" useGrouping={false} max={999} size={3} disabled={isDisabled}/>
        </div>
      </div>
    </div>
  )
}

export default MoneyHPForm