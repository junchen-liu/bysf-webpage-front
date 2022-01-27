<template>
  <!-- Profile Setting Card -->
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
    <a-descriptions title="Oliver Liam" :column="1">
      <a-descriptions-item label="Full Name">
        Sarah Emily Jacob
      </a-descriptions-item>
      <a-descriptions-item label="Mobile">
        (44) 123 1234 123
      </a-descriptions-item>
      <a-descriptions-item label="Email">
        sarahjacob@mail.com
      </a-descriptions-item>
      <a-descriptions-item label="Location">
        USA
      </a-descriptions-item>
      <a-descriptions-item label="Social">
        <a href="#" class="mx-5 px-5">
          <a-icon type="twitter" style="color: #3EA1EC;" />
        </a>
        <a href="#" class="mx-5 px-5">
          <a-icon type="facebook" style="color: #344E86" />
        </a>
        <a href="#" class="mx-5 px-5">
          <a-icon type="instagram" style="color: #E1306C" />
        </a>
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
  <!-- / Profile Setting Card -->
</template>

<script>
export default {
  name: "CardProfileInfoSetting"
}
</script>

<style scoped>

</style>