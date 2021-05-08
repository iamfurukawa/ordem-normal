import React from 'react'

import { Menubar } from 'primereact/menubar'

import styles from './menu.module.scss'

const Menu = ({ novoPersonagemOnClick, loadingProfile }) => {

  const items = [
    {
      label: 'Novo Personagem',
      icon: 'pi pi-user-plus',
      command: () => novoPersonagemOnClick()
    }
  ];

  const start = (
    <>
      <div className={styles.customInput}>
        <label for="file-upload" className={styles.customFileUpload}>
          <span class="p-menuitem-icon pi pi-upload"></span>
          Carregar Personagem
        </label>
        <input id="file-upload" type="file" onChange={loadingProfile} onClick={e => (e.target.value = null)}/>
      </div>
    </>
  )

  return (
    <>
      <Menubar
        style={{ width: '100%' }}
        start={start}
        model={items}
      />
    </>
  )

}

export default Menu