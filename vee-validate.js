import Vue from 'vue'
import VeeValidate,{ Validator } from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)
//提示语汉化
Validator.localize('zh_CN',{
    // 简化使用
    messages: zh_CN.messages,
    // 属性汉化操作
    attributes:{
        phone:'手机号',
        code:'验证码',
        name: '邮箱账号 / 用户名',
        pwd: '密码'
    }
})
Validator.extend('changePhone', {
  // 验证手机号码的提示信息
  getMessage: field => `请输入正确的`+field,
  validate: value =>{
      // 验证手机号的规则
      return /[1]\d{10}/.test(value)
  }  
})
