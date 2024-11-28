import * as enums from '../utils/enums/Contato'

class Contato {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  telefone: string
  email: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    telefone: string,
    email: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.telefone = telefone
    this.email = email
    this.id = id
  }
}

export default Contato
