import React, { useState } from 'react'
import _ from 'lodash'

import { Divider } from 'primereact/divider'
import { Fieldset } from 'primereact/fieldset'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'

import ImgPrev from '../../../components/img-preview'
import InputEditable from '../../../components/input-editable'
import Skill from './skill'
import MoneyHPForm from './money-hp-form'
import Dice from '../../../components/dice'

import ProfileModel from '../../../models/character-profile'
import DiceService from '../../../services/dice/dice-service'

import styles from './profile.module.scss'

const Profile = ({ profileModel = new ProfileModel(), updateProfile = (profile) => { }, downloadProfile = (profile) => { }, closeProfile = (profile) => { }, isDisabled = false }) => {

	const [profile, setProfile] = useState(profileModel)
	const [diceValue, setDiceValue] = useState(0)
	const [diceText, setDiceText] = useState('')

	const handleSetProfile = (prop, entry) => {
		const copyProfile = Object.assign({}, profile)
		copyProfile[prop] = entry
		setProfile(copyProfile)
		updateProfile(copyProfile)
	}

	const handleDice = (skill, isD20 = true, diceMax = 20) => {
		setDiceValue('...')
		setDiceText('...')

		const roll = () => {
			const diceValue = DiceService.rollDN(diceMax)
			setDiceValue(diceValue)
			setDiceText(DiceService.getResult(isD20)(profile[skill], diceValue))
		}

		_.debounce(roll, 1000)()
	}

	const DiceRoll = () => {
		return <Dice value={diceValue} text={diceText} />
	}

	const leftContents = (
		<Button icon="pi pi-download" className="p-button-success p-mr-2" label={"Download"} onClick={() => downloadProfile(profile)} />
	)

	const rightContents = (
		<Button icon="pi pi-times" className="p-button-danger" label={"Fechar"} onClick={() => closeProfile(profile)} />
	)

	return (
		<div className={styles.content}>
			<div className={styles.leftSide}>
				<ImgPrev img={profile.img} setImage={(v) => handleSetProfile('img', v)} isDisabled={isDisabled} />
				<MoneyHPForm money={profile.dinheiro} hp={profileModel.vida} setMoney={(v) => handleSetProfile('dinheiro', v)} setHp={(v) => handleSetProfile('vida', v)} isDisabled={isDisabled} />
				<DiceRoll />
			</div>

			<Divider layout="vertical" />

			<div className={styles.rightSide}>
				<Toolbar left={leftContents} right={rightContents} />
				<InputEditable text={profile.nome} className={styles.profileName} setValue={(v) => handleSetProfile('nome', v)} isDisabled={isDisabled} />
				<div className={styles.skills}>
					<Fieldset className={styles.fieldset} legend="Principais">
						<Skill name={"Força"} value={profile.forca} setValue={(v) => handleSetProfile('forca', v)} action={() => handleDice('forca')} isDisabled={isDisabled} />
						<Skill name={"Destreza"} value={profile.destreza} setValue={(v) => handleSetProfile('destreza', v)} action={() => handleDice('destreza')} isDisabled={isDisabled} />
						<Skill name={"Constituição"} value={profile.constituicao} setValue={(v) => handleSetProfile('constituicao', v)} action={() => handleDice('constituicao')} isDisabled={isDisabled} />
						<Skill name={"Inteligência"} value={profile.inteligencia} setValue={(v) => handleSetProfile('inteligencia', v)} action={() => handleDice('inteligencia')} isDisabled={isDisabled} />
						<Skill name={"Carisma"} value={profile.carisma} setValue={(v) => handleSetProfile('carisma', v)} action={() => handleDice('carisma')} isDisabled={isDisabled} />
						<Skill name={"Conhecimento"} value={profile.conhecimento} setValue={(v) => handleSetProfile('conhecimento', v)} action={() => handleDice('conhecimento')} isDisabled={isDisabled} />
						<Skill name={"Exposição ao normal"} value={profile.exposicaoAoNormal} setValue={(v) => handleSetProfile('exposicaoAoNormal', v)} action={() => handleDice('exposicaoAoNormal', false, 100)} max={100} isDisabled={isDisabled} />
					</Fieldset>

					<Fieldset className={styles.fieldset} legend="Secundárias">
						<Skill name={"Sorte"} value={profile.sorte} setValue={(v) => handleSetProfile('sorte', v)} action={() => handleDice('sorte')} isDisabled={isDisabled} />
						<Skill name={"Dicção"} value={profile.diccao} setValue={(v) => handleSetProfile('diccao', v)} action={() => handleDice('diccao')} isDisabled={isDisabled} />
						<Skill name={"Imunidade (saúde)"} value={profile.imunidade} setValue={(v) => handleSetProfile('imunidade', v)} action={() => handleDice('imunidade')} isDisabled={isDisabled} />
						<Skill name={"Encontrar"} value={profile.encontrar} setValue={(v) => handleSetProfile('encontrar', v)} action={() => handleDice('encontrar')} isDisabled={isDisabled} />
						<Skill name={"Escutar"} value={profile.escutar} setValue={(v) => handleSetProfile('escutar', v)} action={() => handleDice('escutar')} isDisabled={isDisabled} />
						<Skill name={"Furtividade"} value={profile.furtividade} setValue={(v) => handleSetProfile('furtividade', v)} action={() => handleDice('furtividade')} isDisabled={isDisabled} />
						<Skill name={"Esquiva"} value={profile.esquiva} setValue={(v) => handleSetProfile('esquiva', v)} action={() => handleDice('esquiva')} isDisabled={isDisabled} />
						<Skill name={"Primeiros socorros"} value={profile.primeirosSocorros} setValue={(v) => handleSetProfile('primeirosSocorros', v)} action={() => handleDice('primeirosSocorros')} isDisabled={isDisabled} />
					</Fieldset>

					<Fieldset className={styles.fieldset} legend="Normais">
						<Skill name={"Usar eletronicos"} value={profile.usarEletronicos} setValue={(v) => handleSetProfile('usarEletronicos', v)} action={() => handleDice('usarEletronicos')} isDisabled={isDisabled} />
						<Skill name={"Tarefa doméstica"} value={profile.tarefaDomestica} setValue={(v) => handleSetProfile('tarefaDomestica', v)} action={() => handleDice('tarefaDomestica')} isDisabled={isDisabled} />
						<Skill name={"Cozinhar"} value={profile.cozinhar} setValue={(v) => handleSetProfile('cozinhar', v)} action={() => handleDice('cozinhar')} isDisabled={isDisabled} />
						<Skill name={"Dirigir"} value={profile.dirigir} setValue={(v) => handleSetProfile('dirigir', v)} action={() => handleDice('dirigir')} isDisabled={isDisabled} />
						<Skill name={"Flertar"} value={profile.flertar} setValue={(v) => handleSetProfile('flertar', v)} action={() => handleDice('flertar')} isDisabled={isDisabled} />
						<Skill name={"Dançar"} value={profile.dancar} setValue={(v) => handleSetProfile('dancar', v)} action={() => handleDice('dancar')} isDisabled={isDisabled} />
						<Skill name={"Socializar"} value={profile.socializar} setValue={(v) => handleSetProfile('socializar', v)} action={() => handleDice('socializar')} isDisabled={isDisabled} />
						<Skill name={"Trabalhar"} value={profile.trabalhar} setValue={(v) => handleSetProfile('trabalhar', v)} action={() => handleDice('trabalhar')} isDisabled={isDisabled} />
					</Fieldset>

					<Fieldset className={styles.fieldset} legend="Normais">
						<Skill name={"Atividade fisica"} value={profile.atividadeFisica} setValue={(v) => handleSetProfile('atividadeFisica', v)} action={() => handleDice('atividadeFisica')} isDisabled={isDisabled} />
						<Skill name={"Brincar com pet"} value={profile.brincarComPet} setValue={(v) => handleSetProfile('brincarComPet', v)} action={() => handleDice('brincarComPet')} isDisabled={isDisabled} />
					</Fieldset>
				</div>
				<h4>História do personagem</h4>
				<InputTextarea value={profile.historiaDoPersonagem} onChange={(e) => handleSetProfile('historiaDoPersonagem', e.target.value)} rows={5} cols={30} autoResize disabled={isDisabled} />

				<h4>Items do personagem</h4>
				<InputTextarea value={profile.itemsDoPersonagem} onChange={(e) => handleSetProfile('itemsDoPersonagem', e.target.value)} rows={5} cols={30} autoResize disabled={isDisabled} />
			</div>
		</div>
	)
}

export default Profile