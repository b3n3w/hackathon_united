<template>
  <f7-list-item
        :subtitle="author"
        :text="text">
    <div slot="title"><f7-icon class="hs-review-star" v-for="index in parseInt(rating)" :key="index" f7="star_fill" color="yellow"></f7-icon></div>
  </f7-list-item>
</template>
<script>
export default {
  props: {
    rating: Number,
    author: String,
    text: String
  }
};
</script>
<style lang="less" scoped>
.hs-review-star{
  font-size: 18px;
}
</style>