<template>
    <div class="header-wrapper">
      <header class="header">
        <div class="content-box">
          <div class="avatar">
            <img width="64" height="64" v-bind:src="seller.avatar" alt="{{seller.name}}">
          </div>
          <div class="info">
            <h1 class="title">
              <span class="icon-brand"></span>
              <span class="name">{{seller.name}}</span>
            </h1>
            <div class="description">
              {{seller.description}}/{{seller.deliveryTime}}分钟送达
            </div>
            <div v-if="seller.supports" class="support">
              <span class="icon" :class="classMap[seller.supports[0].type]"></span>
              <span>{{seller.supports[0].description}}</span>
            </div>

            <a href="javascript:void(0);" v-if="seller.supports"
              class="supports-count"
              v-on:click="showDetail">
              {{seller.supports.length}}个
            </a>
          </div>
        </div>
        <div class="bulletin-box">
          <span class="icon-bulletin"></span>
          {{seller.bulletin}}
        </div>
      </header>

      <!-- 详细 -->
      <div class="detail" v-show="detailShow">
        <div class="content">
          <h2 class="title">{{seller.name}}</h2>
          <div class="rating-star">
            <span class="star"></span>
          </div>
          <div class="supports">
            <h3 class="sub-title">优惠信息</h3>
            <ul>
              <li v-for="item in seller.supports">
                <span class="icon" :class="classMap[item.type]"></span>
                {{item.description}}
              </li>
            </ul>
          </div>

          <div class="bulletin">
            <h3 class="sub-title">商家公告</h3>
            <p class="text">{{seller.bulletin}}</p>
          </div>
        </div>
        <button type="button" v-on:click="hideDetail">&times;</button>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'sellerHeader',
      props: {
        seller: {
          type: Object
        }
      },
      data() {
        return {
          detailShow: false
        }
      },
      created() {
        this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      },
      methods: {
        showDetail() {
          this.detailShow = true
        },
        hideDetail() {
          this.detailShow = false
        }
      }

    }
</script>

<style lang="scss">

</style>
