import React, { Component } from 'react'
import autobind from 'autobind-decorator'
import styled from 'styled-components/native'
import RNKakaoLogins from 'react-native-kakao-logins'
import { Button } from 'react-native-elements'

export class Login extends Component {
  constructor(props) {
    super(props)
  }

  @autobind
  onClickKakao() {
    console.log('kakao login start')
    RNKakaoLogins.login((err, result: any) => {
      if (err) {
        console.log(err)
        return
      }

      RNKakaoLogins.getProfile((err, result: any) => {
        if (err) {
          console.log(err)
          return
        }

        console.log(result)

        const data = {
          id: result.id,
          snsType: 'kakao',
        }
      })
    })
  }

  render() {
    return (
      <LoginView>
        <SText>Login</SText>
        <Button title="카카오 로그인" onPress={this.onClickKakao} />
      </LoginView>
    )
  }
}

const LoginView = styled.View`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SText = styled.Text`
  color: palevioletred;
`

export default Login
