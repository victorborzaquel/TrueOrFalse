import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{color: string}>`
  background-color: ${({color})=>color};
  border-radius: 10px;
  flex-shrink: 1;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 0 12px;
`;