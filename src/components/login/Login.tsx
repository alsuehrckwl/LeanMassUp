import React, { Component } from 'react'
import { Button } from 'react-native'
import autobind from 'autobind-decorator'
import styled from 'styled-components/native'
import RNKakaoLogins from 'react-native-kakao-logins'
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
  LoginButton,
} from 'react-native-fbsdk'

export class Login extends Component {
  constructor(props) {
    super(props)
  }

  @autobind
  onClickKakao() {
    console.log('kakao login start')
    RNKakaoLogins.login((err, result: any) => {
      console.log('result login = ', result)
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

  @autobind
  onClickFacebook() {
    LoginManager.logInWithReadPermissions(['public_profile']).then(
      result => {
        if (result.isCancelled) {
          console.log('Login cancelld')
        } else {
          const infoRequest = new GraphRequest(
            '/me',
            null,
            this._responseInfoCallback,
          )
          new GraphRequestManager().addRequest(infoRequest).start()
        }
      },
      error => {
        console.log('Login fail with error')
      },
    )
  }

  @autobind
  _responseInfoCallback(error, result) {
    if (error) {
      console.log('Error fetching data: ' + error.toString())
    } else {
      const data = {
        id: result.id,
        snsType: 'facebook',
      }

      console.log('login = ', result)
    }
  }

  render() {
    return (
      <LoginView>
        <SText>Login</SText>
        <Button title="카카오 로그인" onPress={this.onClickKakao} />
        <Button title="페이스북 로그인" onPress={this.onClickFacebook} />
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
