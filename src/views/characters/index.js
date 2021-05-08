import React, { useState, useEffect } from 'react'

import { TabView, TabPanel } from 'primereact/tabview'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

import ReactGA from 'react-ga'

import Menu from '../../components/menu'
import Header from '../../components/header'
import Profile from './profile'

import ProfileModel from '../../models/character-profile'
import ProfilesLocalStorageService from '../../services/local-storage/profiles-local-storage-service'

const CharactersView = () => {
	//ReactGA.initialize('UA-196562490-1', { debug: true });

	const [isNewProfile, setNewProfile] = useState(false)

	const [activeIndex, setActiveIndex] = useState(null)
	const [perfis, addPerfil] = useState([])
	const [nome, setNome] = useState('')

	useEffect(() => {
		addPerfil(ProfilesLocalStorageService.openProfiles())
		ReactGA.event({
			category: 'User',
			action: 'Iniciando acesso'
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		//sempre reseta o nome
		setNome('')
	}, [isNewProfile])

	useEffect(() => {
		ProfilesLocalStorageService.saveProfiles(perfis)
		setActiveIndex(_getActualNumberOfTabs())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [perfis])

	const footerDialog = () => {
		return (
			<div>
				<Button label="Cancelar" icon="pi pi-times" onClick={() => setNewProfile(false)} className="p-button-danger" />
				<Button label="Criar" icon="pi pi-check" onClick={() => addNewProfile()} className="p-button-success" autoFocus />
			</div>
		);
	}

	const addNewProfile = () => {
		if (nome !== '') {
			let novoPerfil = ProfileModel()
			novoPerfil.nome = nome
			addPerfil([...perfis, novoPerfil])

			ReactGA.event({
				category: 'User',
				action: 'Criando profile'
			});
		}
		setNewProfile(false)
	}

	const loadingProfile = () => {
		ReactGA.event({
			category: 'User',
			action: 'Carregando profile'
		});
	}

	const downloadProfile = () => {
		ReactGA.event({
			category: 'User',
			action: 'Baixando profile'
		});
	}

	const handleUpdateProfile = (profile) => {
		const copyProfiles = [...perfis]
		copyProfiles[copyProfiles.findIndex(el => el.uuid === profile.uuid)] = profile;
		addPerfil(copyProfiles)
	}

	const handleCloseProfile = (profile) => {
		const copyProfiles = perfis.filter((perfil) => perfil.uuid !== profile.uuid)
		addPerfil(copyProfiles)
		setActiveIndex(_getActualNumberOfTabs())
	}

	const _getActualNumberOfTabs = () => {
		return perfis.length - 1
	}

	return (
		<>
			<Menu novoPersonagemOnClick={() => setNewProfile(true)} loadingProfile={loadingProfile}/>

			<div class="center">

				<Header />

				<TabView style={{ width: '80%', marginBottom: '30px' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
					{perfis.map(profile => <TabPanel header={profile.nome}> <Profile profileModel={profile} updateProfile={handleUpdateProfile} closeProfile={handleCloseProfile} downloadProfile={downloadProfile}/> </TabPanel>)}
				</TabView>
			</div>

			<Dialog header="Criar Personagem" visible={isNewProfile} style={{ width: '20vw' }} footer={footerDialog()} onHide={() => setNewProfile(false)}>
				<div className="p-field">
					<label htmlFor="nome" className="p-d-block">Qual será o nome? </label>
					<InputText style={{ width: '100%' }} value={nome} onChange={(e) => setNome(e.target.value)} maxLength={20} />
				</div>
			</Dialog>
		</>
	)
}

export default CharactersView;