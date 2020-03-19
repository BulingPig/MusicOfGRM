import service from '@/utils/request'

// 检测手机号是否注册
export function testPhoneRegister() {
  return service({
    url: `/api/cellphone/existence/check?phone=13870083309`,
    method: 'post'
  })
}