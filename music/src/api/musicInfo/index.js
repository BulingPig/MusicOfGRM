
import service from '@/utils/request'

export function searchHot() {
  return service({
    url: `/api/search/hot/detail`,
    method: 'get'
  })
}
