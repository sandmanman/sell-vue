<template>
<div>

	<seller-header v-bind:seller="seller"></seller-header>

	<div class="tab-menu border-1px">
		<a v-link="{path: '/goods'}" class="tab-menu-item">商品</a>
		<a v-link="{path: '/ratings'}" class="tab-menu-item">评价</a>
		<a v-link="{path: '/seller'}" class="tab-menu-item">商家</a>
	</div>

	<router-view></router-view>

</div>
</template>

<script>
import sellerHeader from 'components/header/header.vue';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {

      }
    }
  },
	components: {
		sellerHeader: sellerHeader
	},
  created() {
    // GET /someUrl
    this.$http.get('/api/seller').then(response => {

      response = response.body;
      if (response.errno === ERR_OK) {
        this.seller = response.data;
        console.log(this.seller);
      }

    }, response => {
      // error callback
    });
  }

}
</script>

<style lang="scss">
.tab-menu {
    display: flex;

    height: 1.0666666666666667rem;

    line-height: 1.0666666666666667rem;

    .tab-menu-item {
        flex: 1;

        color: rgb(77,85,93);
        font-size: 18px;
        text-align: center;
        text-decoration: none;

        &.active {
            color: rgb(240,20,20);
        }
    }
}
</style>
