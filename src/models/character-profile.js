import { v4 as uuidv4 } from 'uuid'

const Profile = () => {
  return {
    uuid: uuidv4(),
    img: null,
    nome: '',

    dinheiro: 1,
    vida: 1,
    //principais
    forca: 1,
    destreza: 1,
    constituicao: 1,
    inteligencia: 1,
    carisma: 1,
    conhecimento: 1,
    exposicaoAoNormal: 1,
    //secundarias
    sorte: 1,
    diccao: 1,
    imunidade: 1,
    encontrar: 1,
    escutar: 1,
    furtividade: 1,
    esquiva: 1,
    primeirosSocorros: 1,
    //normais 1
    usarEletronicos: 1,
    tarefaDomestica: 1,
    cozinhar: 1,
    dirigir: 1,
    flertar: 1,
    dancar: 1,
    socializar: 1,
    trabalhar: 1,
    //normais 2
    atividadeFisica: 1,
    brincarComPet: 1,
    //outros
    historiaDoPersonagem: '',
    itemsDoPersonagem: '',
  }
}

export default Profile