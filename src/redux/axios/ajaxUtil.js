import axios from 'axios'
import _ from 'lodash'
import * as auth from '../../utils/auth'
let ajaxUtil = {}
ajaxUtil.title = function (title) {
}

const ajaxUrl = '/'

ajaxUtil.config = {
  baseURL: ajaxUrl,
  timeout: 30000,
  responseType: 'json',
}
if (process.env.NODE_ENV === `development`) {
  ajaxUtil.config.timeout = 30000
}

ajaxUtil.create = axios.create
ajaxUtil.headers = headers => {
  return {
    ajax: axios.create({
      ...ajaxUtil.config,
      headers: headers,
    }),
  }
}
ajaxUtil.ajax = axios.create(ajaxUtil.config)

ajaxUtil.stitchingParams = (url, payload, all) => {
  if (!all) {
    if (payload && payload.params) {
      return ajaxUtil.stitchingParams(url, payload.params, true)
    } else {
      return url + '?_timestamp=' + Math.random(10)
    }
  }
  let params = _.keys(payload)
    .map(k => {
      if (_.isNull(payload[k]) || _.isUndefined(payload[k]) || _.isEqual(payload[k], '')) {
        return null
      } else {
        if (ajaxUtil.isMock(url)) {
          return k + '=' + payload[k]
        } else {
          if (_.isArray(payload[k])) {
            return _.reduce(
              payload[k],
              (k1, k2) => {
                return `${k1}&${k}=${encodeURI(k2)}`
              },
              '',
            )
          } else if (k === 'offset') {
            return window.pageHelper.offsetAlias + '=' + (payload[k] - 1)
          } else if (k === 'limit') {
            return window.pageHelper.limitAlias + '=' + payload[k]
          } else if (k === 'sortField') {
            if (payload['sortOrder'] === 'normal') return null
            else return `sort_by=${payload['sortField']}:${payload['sortOrder']}`
          } else if (k === 'sortOrder') {
            return null
          } else return k + '=' + encodeURI(payload[k])
        }
      }
    })
    .filter(m => m !== null)
    .join('&')
  let s = url + (params === '' ? '?' : '?' + params + '&') + '_timestamp=' + Math.random(10)
  if (process.env.NODE_ENV === `development`) {
    console.log(s)
  }
  return s
}

ajaxUtil.mockHandler = res => {
  return {
    source: 'mock',
    loading: false,
    error: res.errorMsg,
    data: res.data.content || 'data format error!',
  }
}

// const tokenExpires = 1 / 24 / 60 * 25
ajaxUtil.myRequest = (action, payload) => {
  let url = action.url(payload) || '/'
  let refreshToken = _.get(payload, 'refreshToken', true)
  if (action.method === 'get') url = ajaxUtil.stitchingParams(url, payload, true)
  else url = ajaxUtil.stitchingParams(url, payload, false)

  //此处代码原本为防止短时间没发送重复的请求而设置，但是为了employee-select-text控件会短时间内查询两次同一个id的情况去掉这个限制
  // if (Vue.config.last_request && url === Vue.config.last_request.url) {
  //   return;
  // }
  // Vue.config.last_request = {
  //   url: url,
  //   payload: payload,
  // }
  // setTimeout(() => {
  //   Vue.config.last_request = null;
  // }, 300);
  const token = auth.getToken()
  // const params = {expires: tokenExpires};
  // if (!!token && refreshToken) {
  //   auth.setToken(token);
  // }
  // else if (url.includes('/api/uc/users/login')  && url.includes('/api/sso/users/tologin') && refreshToken) {
  //   return new Promise((resolve, reject) => {
  //     resolve('AUTH_TOKEN_EXPIRED')
  //   })
  // }

  return new Promise((resolve, reject) => {
    ajaxUtil
      .headers({
        Authorization: token,
        Locale: window.config.lang,
        Channel: 'website',
        overflow: false,
      })
      .ajax({
        url: url,
        method: action.method || 'get',
        data: ajaxUtil.payloadWrapper(action, url, payload),
      })
      .then(response => {
        if (refreshToken) {
          if (response.headers.Authorization) {
            auth.setToken(response.headers.Authorization)
          } else if (response.headers.authorization) {
            auth.setToken(response.headers.authorization)
          }
        }
        resolve(response)
      })
      .catch(res => {
        reject(res.response)
      })
  })
}

ajaxUtil.apiHandler = ({data}) => {
  let error = null
  let keys = _.keys(data)
  if (_.includes(keys, 'offset') && _.includes(keys, 'limit')) {
    _.forEach(keys, key => {
      if (key === 'offset') {
        data[key] = data[key] + 1
      } else if (key === 'limit' || key === 'more' || key === 'total') {
        data[key] = data[key]
      } else if (key === 'errorCode') {
        error = data[key]
      } else if (key === 'error') {
        error = data.error.code
      } else {
        data.list = data[key]
        delete data[key]
      }
    })
  }
  return {
    source: 'api',
    loading: false,
    error: error,
    data: data,
  }
}

ajaxUtil.isMock = url => {
  return /^\/mock/.test(url)
}

ajaxUtil.payloadWrapper = (action, url, payload) => {
  if (payload) {
    if (payload.payload) {
      return payload.payload
    } else return payload
  }
}

export default ajaxUtil
