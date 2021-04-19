import { useState } from 'react';
import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransectionMondal: () => void;
}

export function Header({onOpenNewTransectionMondal}: HeaderProps) {
  

  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money"/>
      <button type="button" onClick={onOpenNewTransectionMondal} >
        Nova transação
      </button>
      
      </Content>
    </Container>
  )
}