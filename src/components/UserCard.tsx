import React from 'react'
import { type IRepos } from '../models/models'
import * as S from '../styled-components/userсard.style'

interface IProps {
  repo: IRepos
}

export const UserCard: React.FunctionComponent<IProps> = ({ repo }) => {
  return (
        <S.RepContainer>
            <S.FullName>{repo.full_name}</S.FullName>
            <S.RepoElem>Forks: {repo.forks}</S.RepoElem>
            <S.RepoElem>Watchers: {repo.watchers}</S.RepoElem>
        </S.RepContainer>
  )
}
