import React, { useState, useEffect } from 'react'

import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'

import FirebaseUIService from '../../services/firebase/firebase-ui-service'
import FirebaseAuthService from '../../services/firebase/firebase-auth-service'

const Menu = ({ novoPersonagemOnClick, user, setUser }) => {

  const [loginDialog, setLoginDialog] = useState(false)

  useEffect(() => {
    const authObserver = FirebaseAuthService.getUser(setUser)
    return () => authObserver()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const items = [
    {
      label: 'Novo Personagem',
      icon: 'pi pi-user-plus',
      command: () => novoPersonagemOnClick()
    }
  ];

  const login = () => {
    setLoginDialog(true)
    setTimeout(() => FirebaseUIService.start(), 500);
  }

  const logout = () => {
    FirebaseUIService.stop()
  }

  const buttonLogin = () => {
    if (user?.uid)
      return <Button label="Sair" icon="pi pi-sign-out" className="p-button-danger" onClick={logout} />
    return <Button label="Entrar" icon="pi pi-sign-in" className="p-button-success" onClick={login} />
  }

  return (
    <>
      <Menubar
        style={{ width: '100%' }}
        model={items}
        end={buttonLogin()}
      />

      <Dialog visible={loginDialog} style={{boxShadow: 'none'}} onHide={() => setLoginDialog(false)} baseZIndex={1000}>
        <div id="firebaseui-auth-container"></div>
      </Dialog>
    </>
  )

}

export default Menu