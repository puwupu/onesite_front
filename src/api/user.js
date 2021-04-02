import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/api/v1/auth/login/',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/api/v1/user/info/',
    method: 'get'
  })
}
