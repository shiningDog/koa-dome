/*
 * @Descripttion: 
 * @Author: Weize
 * @Date: 2021-05-14 09:20:12
 * @LastEditors: Weize
 * @LastEditTime: 2021-05-14 11:05:03
 */
const router = require('koa-router')()

router.prefix('/api')

router.post('/test', async (ctx, next) => {
  console.log('query',ctx.query)
  console.log('body',ctx.request.body)
  // console.log('body',ctx.request.body)
  ctx.body = {
    code:200,
    data:null,
    message:'请求成功'
  }
})

module.exports = router
