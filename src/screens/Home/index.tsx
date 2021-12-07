import React, { useState } from 'react';
import { UIButton } from '../../components/UIButton';
import { UIInput } from '../../components/UIInput';
import { UISelectDropdown } from '../../components/UISelectDropdown';

import {
  Container,
  SelectWrapper,
  Select, InputWrapper, Result, WarningMessage, Message, Form
} from './styles';

export type Type = "String" | "Number" | "Boolean";
export type Operators = "<" | ">" | "<=" | ">=" | "==" | "!=" | "===" | "!==";

export function Home() {
  const [type1, setType1] = useState<Type>("String")
  const [type2, setType2] = useState<Type>("String")
  const [string1, setString1] = useState("")
  const [string2, setString2] = useState("")
  const [operator, setOperator] = useState<Operators>("==")
  const [warnMessage, setWarnMessage] = useState("Preencha todos os campos para fazer a comparação")
  const [result, setResult] = useState("")

  const data = ["String", "Number", "Boolean"] as Type[]
  const operators = ["<", ">", "<=", ">=", "==", "!=", "===", "!=="] as Operators[]

  function compareValues() {
    const allIsEmpty = (values: string[]) => !values.every(value => value.trim() !== "")

    function convertType(value: string, type: Type) {
        switch (type) {
          case "Number": return Number(value)
          case "Boolean": return value.toLocaleLowerCase().trim() === 'true' ? true : false
          default: return value
        }
    }

    if (allIsEmpty([string1, string2, operator])) {
      return setWarnMessage("Preencha todos os campos para fazer a comparação")
    }

    if (!operators.includes(operator)) {
      return setWarnMessage("Preencha um operador válido")
    }

    const value1 = convertType(string1, type1)
    const value2 = convertType(string2, type2)

    if (!value1) return setWarnMessage("Tipo do valor 1 é inválido!")
    if (!value2) return setWarnMessage("Tipo do valor 2 é inválido!")

    setWarnMessage("")

    switch (operator) {
      case "<": return value1 < value2
      case ">": return value1 > value2
      case ">=": return value1 >= value2
      case "<=": return value1 <= value2
      case "==": return value1 == value2
      case "!=": return value1 != value2
      case "===": return value1 === value2
      case "!==": return value1 !== value2
      default: return
    }
  }

  function handleCompare() {
    setResult(`${compareValues() ? "Verdadeiro" : "Falso" || ""}`)
  }

  return (
    <Container>
      <Message>
        {warnMessage === ''
          ? <Result>{result}</Result>
          : <WarningMessage>{warnMessage}</WarningMessage>
        }
      </Message>

      <Form>
        <Select>
          <UIInput
            value={string1}
            onChangeText={setString1}
            placeholder='Valor 1'
          />
          <SelectWrapper>
            <UISelectDropdown
              defaultValue={type1}
              data={data}
              onSelect={selectedItem => setType1(selectedItem as Type)}
            />
          </SelectWrapper>
        </Select>

        <InputWrapper>
          <UISelectDropdown
            defaultValue={operator}
            data={operators}
            onSelect={selectedItem => setOperator(selectedItem as Operators)}
            width="100%"
          />
        </InputWrapper>

        <Select>
          <UIInput
            value={string2}
            onChangeText={setString2}
            placeholder='Valor 2'
          />
          <SelectWrapper>
            <UISelectDropdown
              defaultValue={type2}
              data={data}
              onSelect={selectedItem => setType2(selectedItem as Type)}
            />
          </SelectWrapper>
        </Select>
      </Form>

      <UIButton
        title="Comparar"
        color="#aeffa7"
        onPress={handleCompare}
      />
    </Container>
  );
}
