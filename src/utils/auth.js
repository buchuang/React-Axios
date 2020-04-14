import Cookies from 'js-cookie'
import {localStore} from './sessionStore'

const TokenKey = 'Admin-Token'

export function getUser() {
  if (localStore.get('user')) return localStore.get('user')
  else return {}
}

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token, params) {
  return Cookies.set(TokenKey, token, params)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
