import React, { useState, useEffect } from 'react'

import { TabView, TabPanel } from 'primereact/tabview'
import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { InputText } from 'primereact/inputtext'

import ReactGA from 'react-ga'
import { v4 as uuidv4 } from 'uuid'

import Menu from '../../components/menu'
import Header from '../../components/header'
import Profile from './profile'

import ProfileModel from '../../models/character-profile'
import ProfilesLocalStorageService from '../../services/local-storage/profiles-local-storage-service'

const CharactersView = () => {
	//ReactGA.initialize('UA-196562490-1', { debug: true })

	const [isNewProfile, setNewProfile] = useState(false)

	const [activeIndex, setActiveIndex] = useState(null)
	const [perfis, addPerfil] = useState([])
	const [nome, setNome] = useState('')

	useEffect(() => {
		addPerfil(ProfilesLocalStorageService.openProfiles())
		ReactGA.event({
			category: 'User',
			action: 'Iniciando acesso'
		})
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
		)
	}

	const addNewProfile = () => {
		if (nome !== '') {
			let novoPerfil = ProfileModel()
			novoPerfil.nome = nome
			addPerfil([...perfis, novoPerfil])

			ReactGA.event({
				category: 'User',
				action: 'Criando profile'
			})
		}
		setNewProfile(false)
	}

	const loadingProfile = async (event) => {
		ReactGA.event({
			category: 'User',
			action: 'Carregando profile'
		})

		const fileUploaded = event.target.files[0]
		const perfilUploaded = JSON.parse(await _getBase64(fileUploaded))
		perfilUploaded.uuid = uuidv4() //rewriting uuid to close one by one
		addPerfil([...perfis, perfilUploaded])
	}

	const _getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader()
			reader.onload = () => resolve(reader.result)
			reader.onerror = error => reject(error)
			reader.readAsText(file)
		})
	}

	const downloadProfile = async (profile) => {
		ReactGA.event({
			category: 'User',
			action: 'Baixando profile'
		})

		const fileName = profile.nome
		const json = JSON.stringify(profile)
		const blob = new Blob([json], { type: 'application/json' })
		const href = await URL.createObjectURL(blob)
		const link = document.createElement('a')
		link.href = href
		link.download = fileName + ".json"
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	const handleUpdateProfile = (profile) => {
		const copyProfiles = [...perfis]
		copyProfiles[copyProfiles.findIndex(el => el.uuid === profile.uuid)] = profile
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
			<Menu novoPersonagemOnClick={() => setNewProfile(true)} loadingProfile={loadingProfile} />

			<div class="center">

				<Header />

				<TabView style={{ width: '80%', marginBottom: '30px' }} activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
					{perfis.map(profile => <TabPanel header={profile.nome}> <Profile profileModel={profile} updateProfile={handleUpdateProfile} closeProfile={handleCloseProfile} downloadProfile={downloadProfile} /> </TabPanel>)}
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

export default CharactersView