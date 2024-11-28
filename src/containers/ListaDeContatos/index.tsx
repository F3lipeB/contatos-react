import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosFiltrados = contatosFiltrados.filter(
          (item) => item.status === valor
        )
      }

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const exibeResultadoFiltrage = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} contatos(s) encontrado(s) como: Todas ${complementacao}`
    } else {
      mensagem = `${quantidade} contatos(s) encontrado(s) como: "${`${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const contatos = filtraContatos()
  const mensagem = exibeResultadoFiltrage(contatos.length)

  return (
    <>
      <Titulo as="p">
        {mensagem}
        <MainContainer>
          <ul>
            {contatos.map((t) => (
              <li key={t.titulo}>
                <Contato
                  id={t.id}
                  telefone={t.telefone}
                  email={t.email}
                  status={t.status}
                  prioridade={t.prioridade}
                  titulo={t.titulo}
                />
              </li>
            ))}
          </ul>
        </MainContainer>
      </Titulo>
    </>
  )
}

export default ListaDeContatos
