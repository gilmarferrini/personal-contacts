import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFC;
  padding: 30px;
`
export const TitleArea = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 40px 0;
`

export const TitleText = styled.Text`
  font-size: 24px;
`

export const Input = styled.TextInput`
  border: 1px solid #6CCFF6;
  height: 46px;
  text-align: center;
  border-radius: 10px;

  margin-bottom: 17px;
  
`

export const Line = styled.View`
  height: 1px;
  background-color: rgba(0,0,0, 0.10);
  margin: 14px 0;
`