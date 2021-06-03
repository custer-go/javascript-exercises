import request from '@/utils/request'

export default {
  // 条件分页查询接口
  getList(query, current = 1, size = 20) {
    return request({
      url: `/article/advert/search`,
      method: 'post',
      data: { ...query, current, size }
    })
  }
}
