<!-- 
	This is the sign up page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>
        <div>
          <!-- Sign Up Image And Headings -->
          <div class="sign-up-header" style="background-image: url('images/bg-signup.jpg')">
            <div class="content">
              <h1 class="mb-5">注册</h1>
            </div>
          </div>
          <!-- / Sign Up Image And Headings -->

          <!-- Sign Up Form -->
          <a-card :bordered="false" class="card-signup header-solid h-full" :bodyStyle="{paddingTop: 0}">
            <p class="text-center my-25 font-semibold text-muted">输入信息完成注册</p>
            <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
            >
              <a-form-item class="mb-10">
                <a-input
                    v-decorator="[
						'user_name',
						{ rules: [{ required: true, message: '请输入用户名' }] },
						]"
                    placeholder="用户名"
                >
                </a-input>
              </a-form-item>
              <a-form-item class="mb-10">
                <a-input
                    v-decorator="[
						'email',
						{ rules: [{ required: true, message: '请输入正确的邮箱！',pattern:'^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$' }] },
						]"
                    placeholder="电子邮箱"
                >
                </a-input>
              </a-form-item>
              <a-form-item class="mb-5">
                <a-input
                    v-decorator="[
						'password',
						{ rules: [{ required: true, message: '请设置密码!' }] },
						]"
                    type="password"
                    placeholder="密码"
                >
                </a-input>
              </a-form-item>
              <a-form-item class="mb-10">
                <a-checkbox
                    v-decorator="[
						'remember',
						{
							valuePropName: 'checked',
							initialValue: true,
							rules: [{ required: true, message: '请同意条约！' }]
						},
						]"
                >
                  我同意 <a href="#" class="font-bold text-dark">条款和条约</a>
                </a-checkbox>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" block html-type="submit" class="login-form-button">
                  注册
                </a-button>
              </a-form-item>
            </a-form>
            <p class="font-semibold text-muted text-center">已有账号？ <router-link to="/sign-in" class="font-bold text-dark">点此登录</router-link></p>
          </a-card>
          <!-- / Sign Up Form -->

        </div>
  </div>

</template>
<script>

	export default ({
		data() {
			return {
			}
		},
		beforeCreate() {
			// Creates the form and adds to it component's "form" property.
			this.form = this.$form.createForm(this, { name: 'normal_login' });
		},
		methods: {
			// Handles input validation after submission.
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if ( !err ) {
						console.log('Received values of form: ', values) ;
            this.$axios({
              method: 'post',
              url: this.api.ApiUrl + '/user/register',
              data: {
                user_name:values.user_name,
                email:values.email,
                password:values.password
              }
            }).then(res => {
              if (res.data.code == '200'){
                this.$router.push('/login');
                alert('注册成功，请检查邮箱激活账号！');
              } else {
                alert('注册失败，请联系客服');
              }
            }).catch(error => {
              alert('注册失败，请联系客服');
              console.log(error);
            });
					}
				});
			},
		},
	})

</script>

<style lang="scss">
</style>