import { Validator } from 'jsonschema'

const ProfileValidator = () => {

  const validator = new Validator()

  const schemaProfile = {
    'type': 'object',
    'properties': {
      'uuid': { 'type': 'string' },
      'img': { 'type': ['string', 'null'] },
      'nome': { 'type': 'string', 'minLength': 1 },
      'dinheiro': { 'type': 'integer', 'minimum': 0 },
      'vida': { 'type': 'integer', 'minimum': 0 },
      'forca': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'destreza': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'constituicao': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'inteligencia': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'carisma': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'conhecimento': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'exposicaoAoNormal': { 'type': 'integer', 'minimum': 1, 'maximum': 100 },
      'sorte': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'diccao': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'imunidade': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'encontrar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'escutar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'furtividade': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'esquiva': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'primeirosSocorros': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'usarEletronicos': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'tarefaDomestica': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'cozinhar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'dirigir': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'flertar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'dancar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'socializar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'trabalhar': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'atividadeFisica': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'brincarComPet': { 'type': 'integer', 'minimum': 1, 'maximum': 20 },
      'historiaDoPersonagem': { 'type': 'string' },
      'itemsDoPersonagem': { 'type': 'string' },
    },
    'required': ['uuid',
      'nome',
      'dinheiro',
      'vida',
      'forca',
      'destreza',
      'constituicao',
      'inteligencia',
      'carisma',
      'conhecimento',
      'exposicaoAoNormal',
      'sorte',
      'diccao',
      'imunidade',
      'encontrar',
      'escutar',
      'furtividade',
      'esquiva',
      'primeirosSocorros',
      'usarEletronicos',
      'tarefaDomestica',
      'cozinhar',
      'dirigir',
      'flertar',
      'dancar',
      'socializar',
      'trabalhar',
      'atividadeFisica',
      'brincarComPet',
      'historiaDoPersonagem',
      'itemsDoPersonagem',
    ]
  }

  const validate = (profile) => {
    const validatorResult = validator.validate(profile, schemaProfile)
    if (!validatorResult.valid) {
      // eslint-disable-next-line no-throw-literal
      throw "Ficha inválida."
    }
  }

  return {
    validate,
  }
}

export default ProfileValidator()