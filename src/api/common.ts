import { post } from '~/utils/methods'

// 顶部导航及底部导航
export function headerRequest(params: any) {
  return post('/company/header', params)
}

// 语种
export function languageRequest(params: any) {
  return post('/company/language', params)
}

// 公司简介
export function companyDetail(params: any) {
  return post('/company/companyDetail', params)
}

// 工商业储能
export function industryRequest(params: any) {
  return post('/company/industry', params)
}

// 户用式业主
export function householdStyleRequest(params: any) {
  return post('/company/householdStyle', params)
}

// 移动电源
export function movepowerRequest(params: any) {
  return post('/company/movepower', params)
}

// 合作及售后
export function callMe(params: any) {
  return post('/company/callMe', params)
}

// 提交留言信息
export function submitMessage(params: any) {
  return post('/company/submitmessage', params)
}
