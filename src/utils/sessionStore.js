import localStore from 'store'
import storages from 'store/storages/sessionStorage'

export {
  localStore
}
export default localStore.createStore(storages, [])
