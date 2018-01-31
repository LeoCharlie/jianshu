<template>
    <div>
        <my-header></my-header>
        <div class="index my-container">
            <div class="row">
                <!--左侧布局-->
                <div class="col-8 main">
                    <!--banner-->
                    <div v-swiper:mySwiper="swiperOption" class="banner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="banner in banners">
                                <img :src="banner">
                            </div>
                        </div>
                        <div class="swiper-pagination swiper-pagination-white"></div>
                        <div class="swiper-button-prev swiper-button-white"></div>
                        <div class="swiper-button-next swiper-button-white"></div>
                    </div>
                    <!--推荐专题-->
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection1.jpg" alt="">
                            <span>文学</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection2.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection3.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection4.jpg" alt="">
                            <span>人文社科</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection5.jpg" alt="">
                            <span>故事</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection6.png" alt="">
                            <span>旅行·在路上</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123">
                            <img src="../assets/img/collection7.jpg" alt="">
                            <span>@IT·互联网</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="more-hot-collection">
                            更多热门专题
                            <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                    </div>
                    <div class="split-line"></div>
                    <!--文章列表-->
                    <div id="list-container">
                        <ul class="note-list">
                            <li class="have-img">
                                <nuxt-link to="/p/123" class="wrap-img">
                                    <img src="../assets/img/note1.jpg" alt="">
                                </nuxt-link>
                                <div class="content">
                                    <div class="author">
                                    <nuxt-link to="/p/123" class="avatar">
                                        <img src="../assets/img/default-avatar.jpg" alt="">
                                    </nuxt-link>
                                    <div class="info">
                                        <nuxt-link to="/p" class="nickname">
                                            萌薇
                                        </nuxt-link>
                                        <span class="time">8小时前</span>
                                    </div>
                                </div>
                                    <nuxt-link to="/p" class="title">
                                        如何把书中的知识转化为能力?这是我见过最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                        于是市场上出现很多读书方法，比如速度、多读、慢读、列读……
                                        不管你采用哪一种读书方法，
                                        最终都要回归到“行动”二字上，正如陆...
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/collection/123" class="collection-tag">
                                            短片小说
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-eye">
                                                579
                                            </i>
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>
                                            546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/p/123" class="avatar">
                                            <img src="../assets/img/default-avatar.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/p" class="nickname">
                                                萌薇
                                            </nuxt-link>
                                            <span class="time">8小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p" class="title">
                                        如何把书中的知识转化为能力?这是我见过最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                        于是市场上出现很多读书方法，比如速度、多读、慢读、列读……
                                        不管你采用哪一种读书方法，
                                        最终都要回归到“行动”二字上，正如陆...
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/collection/123" class="collection-tag">
                                            短片小说
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-eye">
                                                579
                                            </i>
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>
                                            546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/p/123" class="avatar">
                                            <img src="../assets/img/default-avatar.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/p" class="nickname">
                                                萌薇
                                            </nuxt-link>
                                            <span class="time">8小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p" class="title">
                                        如何把书中的知识转化为能力?这是我见过最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                        于是市场上出现很多读书方法，比如速度、多读、慢读、列读……
                                        不管你采用哪一种读书方法，
                                        最终都要回归到“行动”二字上，正如陆...
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/collection/123" class="collection-tag">
                                            短片小说
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-eye">
                                                579
                                            </i>
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>
                                            546
                                        </span>
                                    </div>
                                </div>
                            </li>
                            <li class="have-img">
                                <nuxt-link to="/p/123" class="wrap-img">
                                    <img src="../assets/img/note1.jpg" alt="">
                                </nuxt-link>
                                <div class="content">
                                    <div class="author">
                                        <nuxt-link to="/p/123" class="avatar">
                                            <img src="../assets/img/default-avatar.jpg" alt="">
                                        </nuxt-link>
                                        <div class="info">
                                            <nuxt-link to="/p" class="nickname">
                                                萌薇
                                            </nuxt-link>
                                            <span class="time">8小时前</span>
                                        </div>
                                    </div>
                                    <nuxt-link to="/p" class="title">
                                        如何把书中的知识转化为能力?这是我见过最好的回答
                                    </nuxt-link>
                                    <p class="abstract">
                                        随着知识经济的兴起，读书的重要性得到了大家的普遍认同，
                                        于是市场上出现很多读书方法，比如速度、多读、慢读、列读……
                                        不管你采用哪一种读书方法，
                                        最终都要回归到“行动”二字上，正如陆...
                                    </p>
                                    <div class="meta">
                                        <nuxt-link to="/collection/123" class="collection-tag">
                                            短片小说
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-eye">
                                                579
                                            </i>
                                        </nuxt-link>
                                        <nuxt-link to="/p" class="tag">
                                            <i class="fa fa-comment"></i>
                                            200
                                        </nuxt-link>
                                        <span>
                                            <i class="fa fa-heart"></i>
                                            546
                                        </span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!--阅读更多-->
                    <nuxt-link to="/" class="load-more">
                        阅读更多
                    </nuxt-link>
                </div>
                <!--右侧布局-->
                <div class="col-4 aside">
                    <!--分类条-->
                    <div class="board">
                        <nuxt-link to="/">
                            <img src="../assets/img/line1.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/line2.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/line3.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/line4.png" alt="">
                        </nuxt-link>
                        <nuxt-link to="/">
                            <img src="../assets/img/line5.png" alt="">
                        </nuxt-link>
                    </div>
                    <!--推荐作者-->
                    <div class="recommend-author">
                        <!--二维码-->
                        <nuxt-link to="/u" class="download">
                            <img src="../assets/img/mywei.png" alt="">
                            <div class="info">
                                <div class="title">
                                    咨询与打赏
                                    <i class="fa fa-angle-right"></i>
                                </div>
                                <div class="description">
                                    作者微信:lct171314
                                </div>
                            </div>
                        </nuxt-link>
                        <div class="title">
                            <span>推荐作者</span>
                            <a href="javascript:void(0)" class="page-change" @click="rotate">
                                <i ref="refresh" class="fa fa-refresh"></i>
                                <!--选取dom元素  加ref-->
                                换一批
                            </a>
                        </div>
                        <ul class="list">
                            <li>
                                <nuxt-link to="/" class="avatar">
                                    <img src="../assets/img/default-avatar.jpg" alt="">
                                </nuxt-link>
                                <nuxt-link to="/" class="follow">
                                    <i class="fa fa-plus"></i>
                                    关注
                                </nuxt-link>
                                <nuxt-link to="/" class="name">
                                    战小狼
                                </nuxt-link>
                                <p>
                                    写了152.9k字·7.2k喜欢
                                </p>
                            </li>
                        </ul>
                        <nuxt-link to="/" class="find-more">
                            查看全部
                            <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <footer class="my-container">
            <div class="row">
                <div class="col-xs-17 main">
                    <nuxt-link to="/footer">
                        作者：刘昶廷
                    </nuxt-link>
                    <em>&emsp;·&emsp;</em>
                    <nuxt-link to="/footer">
                        开始时间：2018-01-20
                    </nuxt-link>
                    <em>&emsp;·&emsp;</em>
                    <nuxt-link to="/footer">
                        院校：中北大学软件学院
                    </nuxt-link>
                    <div class="icp">
                        @刘昶廷·于2018年6月30日毕业于中北大学软件学院
                        联系电话：15735655136·QQ：752394145·微信：lct171314
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import myHeader from '../components/myHeader'
    export default {
        components:{
            myHeader
        },
        data(){
            return{
                banners:[
                    '/banner1.jpg',
                    '/banner2.jpg',
                    '/banner3.jpg',
                    '/banner4.jpg',
                ],
                swiperOption: {
                    autoplay:{
                        delay:3000, //切换时间
                        stopOnLastSlide:false, //是否停在最后一张
                        disableOnInteraction: false //用户点击后禁止轮播
                    },
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                deg:360
            }
        },
        methods:{
            rotate:function() {
                this.deg = this.deg +360
                this.$refs.refresh.style.transform=`rotate(${this.deg}deg)`
            }
        }
    }
</script>

