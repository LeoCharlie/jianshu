<template>
    <div>
        <my-header></my-header>
        <div class="note">
            <!--文章区域-->
            <div class="post">
                <!--正文-->
                <div class="article">
                    <h1 class="title">月薪三千，就该去死么</h1>
                    <!--作者-->
                    <div class="author">
                        <nuxt-link to="" class="avatar">
                            <img src="../../assets/img/default-avatar.jpg" alt="">
                        </nuxt-link>
                        <div class="info">
                            <span class="name">测试用户</span>
                            <a href="javascript:void(0)" class="btn btn-success " :class="follow"
                              @click="haveSeen" @mouseenter="mouseenter" @mouseleave="mouseleave">
                                <i ref="icon" class="fa" :class="icon"></i>
                                <span ref="see">关注</span>
                            </a>
                            <div class="meta">
                                <span>2018.01.23 16:09</span>
                                <span>字数 2273</span>
                                <span>阅读 882</span>
                                <span>评论 7</span>
                                <span>喜欢 34</span>
                            </div>
                        </div>
                    </div>
                    <!--内容-->
                    <div class="show-content">
                        <p>可能是春节快要到了，游子回家的旋律吹响，一年一度的“比头疼大赛”又要拉开大幕。比什么？比工作，比资产，比儿女，比婚姻。
                            都市人携带着远方不为所知的辛苦，在同学相聚时，多了些虚伪；在朋友重逢时，少了些真诚。</p>
                        <p>家乡是个让人又爱又恨的地方。有时，常看见有人自嘲：在外大老板，回乡二胖子；在外大哥大，
                            回镇三孙子；在外大名媛，回村小豆子；在外喜当爹，回家好多爹——亲爹不倒，干爹飘飘。</p>
                    </div>
                    <!--小脚-->
                    <div class="show-foot">
                        <nuxt-link class="notebook" to="/nb/123">
                            <i class="fa fa-book"></i>
                            <span>得及-魏宏志</span>
                        </nuxt-link>
                        <div class="copyright" data-toggle="tooltip" data-html="true" data-original-title="转载请联系作者获得授权，并标注“简书作者”。">
                            © 著作权归作者所有
                        </div>
                        <!--<div class="modal-wrap" data-report-note="">-->
                            <!--<a id="report-modal">举报文章</a>-->
                        <!--</div>-->
                    </div>
                    <!--下部作者-->
                    <div class="follow-detail">
                        <div class="info">
                            <nuxt-link class="avatar" to="/u/123">
                                <img src="../../assets/img/default-avatar.jpg">
                            </nuxt-link>
                            <a class="btn btn-success" href="javascript:void(0)"
                               :class="follow"
                               @click="haveSeen" @mouseenter="mouseenter" @mouseleave="mouseleave">
                                <i ref="icon2" class="fa" :class="icon"></i>
                                <span ref="see2">关注</span>
                            </a>
                            <nuxt-link class="title" to="/u/123">
                                测试用户
                            </nuxt-link>
                            <i class="fa fa-mars"></i>
                            <p>写了 46873 字，被 26 人关注，获得了 95 个喜欢</p>
                        </div>
                        <div class="signature">
                            为城市里的不安和孤寂发声。
                            微信公众号：得及
                            为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及 为城市里的不安和孤寂发声。
                            微信公众号：得及
                        </div>
                    </div>
                    <!--喜欢和分享-->
                    <div class="meta-bottom">
                        <div class="like">
                            <div class="btn" :class="active">
                                <div class="btn-like">
                                    <a href="javascript:void(0)" @click="changeActive" :class="{color:isColor}">
                                        <i class="fa fa-heart-o"></i>
                                        喜欢
                                    </a>
                                </div>
                                <div class="modal-wrap" :class="{color:isColor}">
                                    <a :class="{color:isColor}">
                                        <span ref="spanNum">55</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="share-group">
                            <a v-b-tooltip.hover.top="'分享到微信'" href="javascript:void(0)" class="share-circle ">
                                <i class="fa fa-weixin weixin"></i>
                            </a>
                            <a v-b-tooltip.hover.top="'分享到微博'" href="javascript:void(0)" class="share-circle">
                                <i class="fa fa-weibo weibo"></i>
                            </a>
                            <a v-b-tooltip.hover.top="'下载长微博图片'" href="javascript:void(0)" class="share-circle">
                                <i class="fa fa-picture-o picture"></i>
                            </a>
                            <a href="javascript:void(0)" class="share-circle more-share active"
                                @focus="onFocus" @blur="onBlur">
                                更多分享
                            </a>
                            <ul class="hiddenMenu" ref="hiddenMenu">
                                <li>
                                    <nuxt-link to="/share">
                                        <i class="fa fa-star qqzone"></i>
                                        <span>分享到QQ空间</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/share">
                                        <i class="fa fa-twitter twitter"></i>
                                        <span>分享到Twitter</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/share">
                                        <i class="fa fa-facebook facebook"></i>
                                        <span>分享到Facebook</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/share">
                                        <i class="fa fa-google-plus google"
                                        style="font-size: 15px"></i>
                                        <span>分享到Google+</span>
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/share">
                                        <i class="fa fa-envira envira"></i>
                                        <span>分享到豆瓣</span>
                                    </nuxt-link>
                                </li>
                            </ul>
                            <div class="hiddenThree" ref="hiddenThree"></div>
                        </div>
                    </div>
                </div>
                <!--回复-->
                <my-comment></my-comment>
            </div>
            <!--悬浮的操作框-->
            <div class="side-bar"></div>
            <!--对应的推荐阅读-->
            <div class="note-bottom"></div>
        </div>
    </div>
</template>

<script>
    import myHeader from '../../components/myHeader'
    import myComment from  '../../components/myComment'
    export default {
        data(){
            return{
                follow:{
                   follow1:true,
                   follow2:false
                },
                icon:{
                   'fa-plus':true,
                   'fa-check':false
                },
                active:{
                    'like-group':true,
                    activeClass:false
                },
                isColor:false
            }
        },
        components:{
            myHeader,
            myComment
        },
        methods:{
            haveSeen:function () {
                let word = this.$refs.see.innerHTML;
                //这里预留关注的ajax操作
                this.follow.follow1 = !this.follow.follow1;
                this.follow.follow2 = !this.follow.follow2;
                this.icon["fa-plus"] = !this.icon["fa-plus"];
                this.icon["fa-close"] = !this.icon["fa-close"];
                this.$refs.see.innerHTML = word == '关注' ? "已关注" : "关注"
                this.$refs.see2.innerHTML = word == '关注' ? "已关注" : "关注"
            },
            mouseenter:function () {
                let word = this.$refs.see.innerHTML
                if (word == "已关注"){
                    this.$refs.icon.className = "fa fa-close"
                    this.$refs.see.innerHTML ="取消关注"
                    this.$refs.icon2.className = "fa fa-close"
                    this.$refs.see2.innerHTML ="取消关注"
                }
            },
            mouseleave:function(){
                let word = this.$refs.see.innerHTML
                if (word == "取消关注"){
                    this.$refs.icon.className = "fa fa-check"
                    this.$refs.see.innerHTML ="已关注"
                    this.$refs.icon2.className = "fa fa-check"
                    this.$refs.see2.innerHTML ="已关注"
                }
            },
            changeActive:function () {
                let num = parseInt(this.$refs.spanNum.innerHTML);
                console.log(num)
                if(this.active["like-group"] ==true){
                    this.active["like-group"] = !this.active["like-group"];
                    this.active.activeClass = !this.active.activeClass;
                    this.isColor = !this.isColor;
                    this.$refs.spanNum.innerHTML = num + 1;
                }
                else{
                    this.active["like-group"] = !this.active["like-group"];
                    this.active.activeClass = !this.active.activeClass;
                    this.isColor = !this.isColor;
                    this.$refs.spanNum.innerHTML = num - 1;
                }
            },
            onFocus:function () {
                this.$refs.hiddenMenu.style.display="block";
                this.$refs.hiddenThree.style.display="block";
            },
            onBlur:function () {
                this.$refs.hiddenMenu.style.display="none";
                this.$refs.hiddenThree.style.display="none";
            }
        }
    }
</script>

<style></style>