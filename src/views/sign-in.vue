<!-- 
	This is the sign in page, it uses the dashboard layout in: 
	"./layouts/Default.vue" .
 -->

<template>
  <div>

    <!-- Default Layout -->
    <a-layout class="layout-default" id="layout-default" :class="['layout-default']">
      <!-- Layout Header ( Navbar ) -->
      <DefaultHeader></DefaultHeader>
      <!-- / Layout Header ( Navbar ) -->


      <!-- Page Content -->
      <a-layout-content>
        <div class="sign-in">

          <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle">

            <!-- Sign In Form Column -->
            <a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
              <h1 class="mb-15">登录</h1>
              <h5 class="font-regular text-muted">输入电子邮箱与密码以登录</h5>

              <!-- Sign In Form -->
              <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                  :hideRequiredMark="true"
              >
                <a-form-item class="mb-10" label="账户名" :colon="false">
                  <a-input
                      v-decorator="[
						'Email',
						{ rules: [{ required: true, message: '请输入邮箱！' }] },
						]" placeholder="电子邮箱地址" />
                </a-form-item>
                <a-form-item class="mb-5" label="用户密码" :colon="false">
                  <a-input
                      v-decorator="[
						'Password',
						{ rules: [{ required: true, message: '请输入密码！' }] },
						]" type="password" placeholder="密码" />
                </a-form-item>
                <a-form-item class="mb-10">
                  <a-switch v-model="rememberMe" />记住我
                </a-form-item>
                <a-form-item>
                  <a-button type="primary" block html-type="submit" class="login-form-button">
                    登录
                  </a-button>
                </a-form-item>
              </a-form>
              <!-- / Sign In Form -->

              <p class="font-semibold text-muted">没有账户？ <router-link to="/sign-in" class="font-bold text-dark">立即注册</router-link></p>
            </a-col>
            <!-- / Sign In Form Column -->

            <!-- Sign In Image Column -->
            <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
              <img src="images/img-signin.jpg" alt="">
            </a-col>
            <!-- Sign In Image Column -->

          </a-row>

        </div>
      </a-layout-content>
      <!-- / Page Content -->

      <!-- Layout Footer -->
      <DefaultFooter></DefaultFooter>
      <!-- / Layout Footer -->

    </a-layout>
    <!-- / Default Layout -->

  </div>

</template>

<script>

	export default ({
    name:'SignIn',
    data() {
			return {
				// Binded model property for "Sign In Form" switch button for "Remember Me" .
				rememberMe: true,
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
					}
				});
			},
		},
	})

</script>

<style lang="scss">
	body {
		background-color: #ffffff;
	}
</style>