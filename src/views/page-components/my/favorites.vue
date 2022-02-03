<template>
    <div>

  <a-table :columns="columns" :data-source="data">
    <span slot="action">
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>


    </div>
</template>


<script>

const columns = [
  {
    dataIndex: 'name',
    title: '标题',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'title' },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: '操作',
    key: 'action',
    scopedSlots: { customRender: 'action' },
  },
];

const data = [
  {
    key: '1',
    name: '标题1',
    status: '过期',
    date: '2021-01-02',
  },
  {
    key: '2',
    name: '标题2',
    status: '未知',
    date: '2021-01-02',
  },
  {
    key: '3',
    name: '标题3',
    status: '未过期',
    date: '2021-01-02',
  },
];

export default {
  name: "favorite",
  data() {
      return {
        data,
        columns,
      };
    },
  };

</script>

<style scoped>

</style>