<template>

	<!-- Profile Information Card -->
	<a-card :bordered="false" class="header-solid h-full card-profile-information" :bodyStyle="{paddingTop: 0, paddingBottom: '16px' }" :headStyle="{paddingRight: 0,}">
		<template #title>
			<h6 class="font-semibold m-0">个人资料</h6>
		</template>
		<a-button type="link" slot="extra" @click="jump">
<!--      click the icon, jump to the setting-->
      <a-icon type="edit" :style="{ fontSize: '20px' }"/>
		</a-button>
		<p class="text-dark" >
          hi，我是刘小年，关于决定：如果你不能决定，则答案是否定的。如果两条同样困难的道路，选择短期内更痛苦的一条（避免痛苦会造成平等的错觉）
		</p>
		<hr class="my-25">

    <a-form-model  :label-col="{span:4}" :wrapper-col="{span:5}">
      <a-form-model-item label="昵称">
        <a-input placeholder="刘小年"/>
      </a-form-model-item>
      <a-form-model-item label="头像">
        <a-upload
            name="avatar"
            list-type="picture-card"
            class="avatar-uploader"
            :show-upload-list="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :before-upload="beforeUpload"
            @change="handleChange"
        >
          <img v-if="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
      </a-form-model-item>
      <a-form-model-item label="性别">
        <a-radio-group>
          <a-radio>男</a-radio>
          <a-radio>女</a-radio>
          <a-radio>保密</a-radio>
        </a-radio-group>
      </a-form-model-item>
      <a-form-model-item label="学校">
        <a-select placeholder="请选择院校">
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="院系">
        <a-select placeholder="请选择院系">
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="年级">
        <a-input placeholder="大二"/>
      </a-form-model-item>
      <a-form-model-item label="个人介绍">
        <a-input placeholder="用一段话介绍你自己吧！" type="textarea"/>
      </a-form-model-item>
    </a-form-model>


    <h6 class="font-semibold m-0">联系信息</h6>
    <hr class="my-25">

    <a-form-model  :label-col="{span:4}" :wrapper-col="{span:5}">
      <a-form-model-item label="真实姓名">
        <a-input placeholder="刘小年"/>
      </a-form-model-item>
      <a-form-model-item label="常用邮箱" v-decorator="[{rules:[{required:true}]}]">
        beyourself@self.com
        <a-icon type="check"/>
        <a href="#" class="mx-5 px-5">
          修改邮箱
        </a>
      </a-form-model-item>
      <a-form-model-item label="手机">
        <a-button>添加</a-button>
      </a-form-model-item>
    </a-form-model>
	</a-card>
	<!-- / Profile Information Card -->

</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
	export default ({
		data() {
			return {
			}
		},
    methods:{
      jump(){
        this.$router.push({name:'setting'})
      },
      //functions used to upload images(handleChange and beforeUpload)
      handleChange(info) {
        if (info.file.status === 'uploading') {
          this.loading = true;
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => {
            this.imageUrl = imageUrl;
            this.loading = false;
          });
        }
      },
      beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          this.$message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          this.$message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
    }
	})

</script>