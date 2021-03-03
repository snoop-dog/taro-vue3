import Taro from '@tarojs/taro'
import config from '@static/index'

/**
 * @description: 请求公共方法
 * @param {String} url 请求url
 * @param {Object} params 请求参数
 * @param {String} method 请求方法
 * @param {Function} successCallback 请求成功回调函数
 * @param {Function} failCallback 请求失败回调函数
 * @returns void
 */
export function httpRequest (url, params, method, successCallback, failCallback) {
  Taro.request(
    {
      url: config.baseRequestUrl + url,
      data: params,
      timeout: config.timeout,
      method: method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data)
        successCallback(res)
      },
      fail: (error) => {
        failCallback(error)
      }
    },
  )
}