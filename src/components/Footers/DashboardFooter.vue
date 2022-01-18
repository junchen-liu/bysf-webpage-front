<template>
	
	<!-- Layout Footer -->
	<a-layout-footer>
		<a-row type="flex">
			<a-col :span="24" :md="12">

				<!-- Footer Copyright Notice -->
				<p class="copyright">
					© 2022 祝梦公司
					<a href="https://creative-tim.com">版权所有</a>
				</p>
				<!-- / Footer Copyright Notice -->

			</a-col>
			<a-col :span="24" :md="12" class="footer-control">

				<!-- Footer Navigation Menu -->
				<a-menu mode="horizontal">
					<a-menu-item>祝梦团队</a-menu-item>
					<a-menu-item>关于我们</a-menu-item>
					<a-menu-item>关注微博</a-menu-item>
					<a-menu-item>License</a-menu-item>
				</a-menu>
				<!-- / Footer Navigation Menu -->

			</a-col>
		</a-row>
	</a-layout-footer>
	<!-- / Layout Footer -->

</template>

<script>

	export default ({
		data() {
			return {
			}
		},
	})

</script>
