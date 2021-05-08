import React from 'react'

import { Menubar } from 'primereact/menubar'

const Menu = ({ novoPersonagemOnClick, loadingProfile }) => {

  const items = [
    {
      label: 'Novo Personagem',
      icon: 'pi pi-user-plus',
      command: () => novoPersonagemOnClick()
    },
    {
      label: 'Carregar Personagem',
      icon: 'pi pi-upload',
      command: () => loadingProfile()
    }
  ];

  return (
    <>
      <Menubar
        style={{ width: '100%' }}
        model={items}
      />
    </>
  )

}

export default Menu