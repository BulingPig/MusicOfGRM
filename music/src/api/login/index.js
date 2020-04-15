import service from '@/utils/request'

export function phoneLogin(data) {
  return service({
    url: `/api/login/cellphone?phone=${data.phone}&password=${data.password}`,
    method: 'get'
  })
}

export function checkPhone(data) {
  return service({
    url: `/api/cellphone/existence/check?phone=${data}`,
    method: 'get'
  })
}
