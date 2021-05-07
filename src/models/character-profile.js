import { v4 as uuidv4 } from 'uuid'

const Profile = () => {
  return {
    uuid: uuidv4(),
    criador: '',
    img: null,
    imgUrl: '',
    nome: '',

    dinheiro: 0,
    vida: 0,
    //principais
    forca: 0,
    destreza: 0,
    constituicao: 0,
    inteligencia: 0,
    carisma: 0,
    conhecimento: 0,
    exposicaoAoNormal: 0,
    //secundarias
    sorte: 0,
    diccao: 0,
    imunidade: 0,
    encontrar: 0,
    escutar: 0,
    furtividade: 0,
    esquiva: 0,
    primeirosSocorros: 0,
    //normais 1
    usarEletronicos: 0,
    tarefaDomestica: 0,
    cozinhar: 0,
    dirigir: 0,
    flertar: 0,
    dancar: 0,
    socializar: 0,
    trabalhar: 0,
    //normais 2
    tomarBanho: 0,
    atividadeFisica: 0,
    brincarComPet: 0,
    //outros
    historiaDoPersonagem: '',
    itemsDoPersonagem: '',
  }
}

export default Profile