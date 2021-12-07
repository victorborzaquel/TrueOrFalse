import React from 'react';
import { TextInputProps } from 'react-native';

import {
  Container, Input
} from './styles';

export function UIInput({...rest}: TextInputProps) {
  return (
    <Container>
      <Input {...rest}/>
    </Container>
  );
}
