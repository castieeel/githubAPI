import React, { useEffect, useState } from 'react'
import { useGetUsersQuery, useLazyGetReposQuery } from '../services/catalog'
import { useDebounce } from '../hooks/debounce'
import { UserCard } from './UserCard'
import { type IRepos } from '../models/models'
import logo from '../assets/img/github-mark.png'
import * as S from '../styled-components/main.style'

interface IQuery {
  user: string
  pageNum: number
  sortQry: string
  perPage: number
}

export const Main: React.FunctionComponent = () => {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('desc')
  const [page, setPage] = useState(1)
  const [list, setList] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const debounced = useDebounce(search)

  const paramQuery: IQuery = {
    user: debounced,
    pageNum: page,
    sortQry: sort,
    perPage: 5
  }

  const { isError, isLoading, data: users, error } = useGetUsersQuery(paramQuery, { skip: debounced.length < 2, refetchOnFocus: true })
  const [fetchRepos, { isLoading: areReposLoading, data: repos }] = useLazyGetReposQuery()
  const lastPage: number | null = (users != null && paramQuery.perPage >= 5) ? Math.ceil(users.total_count / paramQuery.perPage) : 1
  console.log(debounced)
  useEffect(() => {
    setList(debounced.length > 2)
  }, [debounced])

  const clickHandler = (username: string): void => {
    void fetchRepos(username)
    setIsShown(true)
  }

  return (
    <S.Container>
      <div>
      <S.SearchDiv>
        <S.LogoImage src={logo} alt="logo"></S.LogoImage>
        <S.Title>Введите никнейм пользователя:</S.Title>
      </S.SearchDiv>
      <S.InputDiv>
        <S.Input type="text"
        placeholder='Найти'
        value={search}
        onChange={e => { setSearch(e.target.value); setIsShown(false); setPage(1) }}></S.Input>

    <S.Sort>
    <S.Label><input type='radio' name='sort' onChange={e => { setSort('asc'); setIsShown(false) }}/> по возрастанию</S.Label>
    <S.Label><input type='radio' name='sort' onChange={e => { setSort('desc'); setIsShown(false) }}/> по убыванию</S.Label>
    </S.Sort>
      </S.InputDiv>

    {list && <S.ListUsers>
    { isLoading && <p>Идет загрузка...</p>}
    { isError && 'status' in error && <p>  {error.status} {JSON.stringify(error.data)}</p>}
    { users?.items.map(user => (
      <S.ListItems key={ user.id } onClick= {() => { clickHandler(user.login) }}>
       <S.Avatar src={ user.avatar_url } /> { user.login }
      </S.ListItems>
    )) }
     </S.ListUsers>}

     {list && <S.Pag>
      {page === 1 ? null : (<S.Button onClick={() => { setPage(page - 1); setIsShown(false) }}>Назад</S.Button>)}
      <S.PageNum>{ lastPage > 1 ? `${page}/${lastPage}` : page}</S.PageNum>
      {page === lastPage ? null : (<S.Button onClick={() => { setPage(page + 1); setIsShown(false) }}>Вперед</S.Button>)}
    </S.Pag>}
     </div>

     {(repos != null && isShown)
       ? <S.RepDiv>
     <S.Repositories>
      <S.RepTitle>Список репозиториев:</S.RepTitle>
      { areReposLoading && <p>Загрузка репозиториев...</p> }
      { repos?.map((repo: IRepos) => <UserCard repo={ repo } key={ repo.id }/>)}
     </S.Repositories>
</S.RepDiv>
       : null}
    </S.Container>
  )
}
