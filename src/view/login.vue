<template>
  <div class="content">
    <div class="login-view">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="账号:" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码:" prop="password">
          <el-input v-model="form.password" @keyup.enter.native="submitForm"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      rules:{
          name:[
              {required:true,message:'请输入用户名',trigger:'blur'},
          ],
          password:[
              {required:true,message:'请输入密码',trigger:'blur'}
          ]
      }
    };
  },
  methods: {
    //登录
    submitForm() {
      this.$refs['form'].validate((valid)=>{
          if(valid){
               this.$router.push('/successLogin')
          }else{
              console.log('登录失败')
              return false
          }
      })
    },
  },
};
</script>

<style scoped>
 .content {
   display: flex;
   justify-content: center;
   align-items: center;
 }
  .login-view {
     width: 400px;
     height: 200px;
   }
   .button {
     width: 100%;
   }
</style>
