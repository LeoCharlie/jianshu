<template>
    <div>
        <div id="comment-list" class="comment-list">
            <!--提交的留言表单-->
            <form class="new-comment">
                <nuxt-link to="/u" class="avatar">
                    <img src="../assets/img/default-avatar.jpg" alt="">
                </nuxt-link>
                <textarea placeholder="写下你的评论..." @focus="send_one=true" v-model="value"></textarea>
                <transition :duration="200" name="fade">
                    <div class="write-function-block" v-if="send_one">
                        <div class="emoji-modal-wrap">
                            <a href="javascript:void(0)" class="emoji" @click="showEmoji=!showEmoji">
                                <i class="fa fa-smile-o"></i>
                            </a>
                            <transition :duration="200" name="fade">
                                <div class="emoji-modal arrow-up" v-if="showEmoji">
                                    <vue-emoji @select="selectEmoji"></vue-emoji>
                                </div>
                            </transition>
                        </div>
                        <div class="hint">
                            Ctrl+Enter 发表
                        </div>
                        <a href="javascript:void(0)" class="btn btn-send" @click="sendData">发送</a>
                        <a href="javascript:void(0)" class="cancel" @click="send_one=false">取消</a>
                    </div>
                </transition>
            </form>
            <!--留言的列表-->
            <div id="normal-comment-list" class="normal-comment-list">
                <!--留言的排序-->
                <div class="top-title">
                    <span>25条评论</span>
                    <a class="author-only" href="javascript:void(0)">
                        只看作者
                    </a>
                    <div class="pull-right">
                        <a class="active" href="javascript:void(0)">
                            按喜欢排序
                        </a>
                        <a href="javascript:void(0)">
                            按时间正序
                        </a>
                        <a href="javascript:void(0)">
                            按时间倒序
                        </a>
                    </div>
                </div>
                <!--留言的正文-->
                <div class="comment-placeholder" style="display:none">
                    <div class="author">
                        <div class="avatar"></div>
                        <div class="info">
                            <div class="name"></div>
                            <div class="meta"></div>
                        </div>
                    </div>
                    <div class="title"></div>
                    <div class="title animated-delay"></div>
                    <div class="tool-group">
                        <i class="fa fa-thumbs-up"></i>
                        <div class="zan"></div>
                        <i class="fa fa-comment"></i>
                        <div class="zan"></div>
                    </div>
                </div>
                <div :id="'comment-'+comment.id" v-for="(comment,index) in comments" class="comment">
                    <div class="comment-content">
                        <div class="author">
                            <nuxt-link class="avatar" to="/u/123">
                                <img :src="comment.user.avatar">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link class="name" to="/u/123">
                                    {{comment.user.nick_name}}
                                </nuxt-link>
                                <div class="meta">
                                    <span>
                                        {{comment.floor}}楼·
                                        {{comment.create_at | formatDate}}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="comment-wrap">
                            <p>
                                {{comment.compiled_content}}
                            </p>
                            <div class="tool-group">
                                <a href="javascript:void(0)">
                                    <i class="fa fa-thumbs-o-up"></i>
                                    <span>{{comment.likes_count}}</span>
                                </a>
                                <a href="javascript:void(0)">
                                    <i class="fa fa-comment-o"></i>
                                    <span>回复</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="sub-comment-list" v-if="comment.children.length != 0">
                        <div v-for="(subComment,index) in comment.children"
                             :id="'comment-' + subComment.id"
                             class="sub-comment">
                            <p>
                                <nuxt-link to="/u">
                                    {{subComment.user.nick_name}}
                                </nuxt-link>
                                <span>
                                    :{{subComment.compiled_content}}
                                </span>
                            </p>
                            <div class="sub-tool-group">
                                <span>
                                    {{subComment.create_at | formatDate}}
                                </span>
                                <a href="javascript:void(0)">
                                    <i class="fa fa-comment-o"></i>
                                    <span>回复</span>
                                </a>
                            </div>
                        </div>
                        <div class="more-comment">
                            <a href="javascript:void(0)" class="add-comment-btn">
                                <i class="fa fa-pencil"></i>
                                <span>添加新评论</span>
                            </a>
                            <span class="line-warp">
                                    还有2条评论，
                                    <a href="javascript:void(0)">展开查看</a>
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vueEmoji from '~/components/vueEmoji'
    export  default {
        name:"myComment",
        data(){
            return{
                send_one:false,
                showEmoji:false,
                value:'',
                comments:[
                    {
                        id:19935725,
                        floor:2,
                        liked:true,
                        likes_count:20,
                        note_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:'/default-avatar.jpg',
                            id:6780849,
                            is_author:false,
                            nick_name:'七岁就很拽',
                            badge:null,

                        },
                        create_at:'2018-01-25T09:38:14.000+08:00',
                        children_count:4,
                        compiled_content:'今年25岁的我，年纪轻轻月薪就已经达到2800了，加上提成满勤再加上我天生的睿智头脑，平常帮客人拿下拖鞋点下烟得点小费可以拿到3100。觉得自己这几年过得也不容易，现在这么有钱，都不知道怎么花了，开始花钱大手大脚了，以前网吧包夜都是喝自来水，现在敢喝红茶了，还是一晚上买两瓶，甚至打电话出去叫炒河粉而且还要加个鸡蛋，我觉得现在有点迷失自我，有什么办法？希望能回到初心！',
                        children:[
                            {
                                id:20116365,
                                user_id:2604707,
                                user:{
                                    id:2604707,
                                    nick_name:'Bowman_'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T11:23:03.000+08:00',
                                compiled_content:'兄die,我也和你有着一样的困惑，甚至一度迷失自我...'
                            },
                            {
                                id:20122216,
                                user_id:9933465,
                                user:{
                                    id:9933465,
                                    nick_name:'美女荷官'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T14:25:32.000+08:00',
                                compiled_content:'是你李大钊飘了,还是我陈独秀拿不动刀了'
                            },
                            {
                                id:20122226,
                                user_id:9964877,
                                user:{
                                    id:9964877,
                                    nick_name:'保坤文化传媒'
                                },
                                parent_id:19935725,                                         create_at:'2018-01-30T14:25:49.000+08:00',
                                compiled_content:'哈哈。。'
                            },
                        ]
                    },
                    {
                        id:19935796,
                        floor:3,
                        liked:false,
                        likes_count:30,
                        create_at: "2018-01-25T09:40:18.000+08:00",
                        note_id:23054702,
                        user_id:6780849,
                        user:{
                            avatar:'/default-avatar.jpg',
                            id:6780849,
                            is_author:false,
                            nick_name:'七岁就很拽',
                            badge:null,

                        },
                        compiled_content:'作为一名混凝土方块移动工程师，我一直以3000的月薪骄傲，甚至一度迷失自我。。。看了楼主这篇文章，我找回了初心',
                        children_count:3,
                        children:[
                            {
                                id:19949215,
                                parent_id:19935796,
                                user_id:5954136,
                                user:{
                                    id:5954136,
                                    nick_name:'与笑颜开'
                                },
                                create_at:'2018-01-25T16:55:40.000+08:00',
                                compiled_content:'混凝土方块移动工程师是啥子工作，我咋没听过？我也做过混凝土这行'
                            },
                            {
                                id:20062029,
                                parent_id:19935796,
                                user_id:8914781,
                                user:{
                                    id:8914781,
                                    nickname:'向天再借5厘米'
                                },
                                create_at:'2018-01-28T21:06:14.000+08:00',
                                compiled_content:'<a href="/users/88ad9c9678a6" class="maleskine-author" target="_blank" data-user-slug="88ad9c9678a6">@与笑颜开</a> 搬砖'
                            },
                            {
                                id:20122231,
                                parent_id:19935796,
                                user_id:9964877,
                                user:{
                                    id:9964877,
                                    nickname:'保坤文化传媒'
                                },
                                create_at:'2018-01-25T16:55:40.000+08:00',
                                compiled_content:'好有意思。'
                            },
                        ]
                    },
                    {
                        children: [],
                        children_count:0,
                        compiled_content: "楼上评论的都是大佬啊",
                        create_at: "2018-01-29T11:26:53.000+08:00",
                        floor:4,
                        id:20080144,
                        liked:false,
                        likes_count:2,
                        note_id: 23054702,
                        user:
                            {
                                id: 3160769,
                                nick_name: "yuebiubiu",
                                is_author:false,
                                avatar:'/default-avatar.jpg'
                            },
                        user_id:3160769
                    }
                ]
            }
        },
        methods:{
          selectEmoji:function (code) {
              this.showEmoji = false;
              this.value += code;
          },
          sendData:function () {
            console.log('发送value值给后端')
          }
        },
        components:{
            vueEmoji
        }
    }

</script>
<style>
    .fade-enter-active, .fade-leave-active{
        opacity: 1;
        transition: .3s;
        -webkit-transition: .3s
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
        transform: translate3d(0,-5%,0);
        -webkit-transform: translate3d(0,-5%,0);
        transition: .3s;
        -webkit-transition: .3s
    }
   .note .post .comment-list{
        padding-top: 20px;
        margin-bottom: 200px; /*注意要删*/
   }
   .note .post .comment-list .new-comment{
        position: relative;
        margin-left: 48px;
        margin-bottom: 20px;
   }
   .note .post .comment-list .avatar{
       width: 38px;
       height: 38px;
       display: inline-block;
       margin-right: 5px;
   }
   .note .post .comment-list .new-comment .avatar{
       position: absolute;
       left: -48px;
   }
   .note .post .comment-list .new-comment textarea{
       padding: 10px 15px;
       width: 100%;
       height: 80px;
       font-size: 13px;
       border: 1px solid #dcdcdc;
       border-radius: 4px;
       background-color: hsla(0,0%,71%,.1);
       display: inline-block;
       outline-style: none;
       resize: none;
       vertical-align: top;
   }
   .note .post .comment-list .new-comment .write-function-block{
       height: 50px;
   }
   .note .post .comment-list .new-comment .emoji-modal-wrap{
       position:relative;
   }
   .note .post .comment-list .new-comment .emoji{
       float: left;
       margin-top: 14px;
   }
   .note .post .comment-list .new-comment .emoji i{
       color: #969696;
       font-size: 25px;
   }
   .note .post .comment-list .new-comment .emoji i:hover{
       color: #2f2f2f;
   }
   .note .post .comment-list .new-comment .hint{
       float: left;
       margin: 20px 0 5px 20px;
       font-size: 13px;
       color: #969696;
   }
   .note .post .comment-list .new-comment .btn-send{
       float: right;
       width: 78px;
       margin: 10px;
       padding: 8px 18px;
       font-size: 16px;
       border: none;
       border-radius: 20px;
       color: #fff!important;
       background-color: #42c02e;
       outline-style: none;
       display: block;
   }
   .note .post .comment-list .new-comment .btn-send:hover {
       background:#3db922;
   }
   .note .post .comment-list .new-comment .cancel{
       float: right;
       margin: 18px 30px 0 0;
       font-size: 16px;
       color: #969696!important;
   }
    .note .post .comment-list .new-comment .emoji-modal-wrap .emoji-modal {
        position:absolute;
        top:50px;
        left:-48px;
        width:400px;
        height:206px;
        border:1px solid #d9d9d9;
        border-radius:4px;
        box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
        z-index:10001;
        padding: 10px;
        background-color: #fff;
    }
    .arrow-up:after {
        content:'';
        display:inline-block;
        position:absolute;
        left:53px;
        top:-1px;
        width:10px;
        height:10px;
        border-left: 1px solid #d9d9d9;
        border-top: 1px solid #d9d9d9;
        background:#fff;
        transform: translate3d(0,-50%,0) rotate(45deg);
    }
    .note .post .comment-list .normal-comment-list {
        margin-top:30px;
    }
    .note .post .comment-list .top-title {
        padding-bottom:20px;
        border-bottom:1px solid #f0f0f0;
    }
    .note .post .comment-list .top-title span {
        font-size:17px;
        font-weight:700;
    }
    .note .post .comment-list .top-title .author-only {
        font-size:12px;
        padding:4px 8px;
        border:1px solid #e1e1e1;
        border-radius:12px;
        color:#969696!important;
        margin-left:10px;
    }
    .note .post .comment-list .top-title .pull-right a {
        margin-left:10px;
        font-size:12px;
        color:#969696!important;
    }
    .note .post .comment-list .top-title .pull-right a.active {
        color:#2f2f2f!important;
    }
    .note .post .comment-list .comment {
        padding:20px 0 30px 0;
        border-bottom:1px solid #f0f0f0;
    }
    .note .post .comment-list .info {
        display:inline-block;
        vertical-align: middle;
    }
    .note .post .comment-list .info .name {
        font-size:15px;
    }
    .note .post .comment-list .info .meta {
        font-size:12px;
        color:#969696;
    }
    .note .post .comment-list .comment .author{
        margin-bottom: 15px;
    }
    .note .post .comment-list .comment p{
        font-size: 16px;
        margin: 10px 0;
        line-height: 1.5;
        word-break: break-word!important;
    }
    .note .post .comment-list .comment .tool-group a{
        margin-right: 10px;
        font-size: 0;
        color: #969696!important;
        display: inline-block;
    }
    .note .post .comment-list .comment .tool-group a i{
        margin-right: 5px;
        font-size: 18px;
        vertical-align: middle;
    }
    .note .post .comment-list .comment .tool-group a span{
        font-size: 14px;
        vertical-align: middle;
    }
    .note .post .comment-list .sub-comment-list{
        margin-top: 20px;
        padding: 5px 0 5px 20px;
        border-left: 2px solid #d9d9d9;
    }
    .note .post .comment-list .sub-comment {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px dashed #f0f0f0;
    }
    .note .post .comment-list .comment .sub-comment  p {
        word-break: break-word!important;
        margin: 0 0 5px;
        font-size: 14px;
        line-height: 1.5;
    }
    .note .post .comment-list .comment .sub-comment p a{
        color: #3194d0!important;
    }
    .note .post .comment-list .comment .sub-tool-group {
        font-size: 12px;
        color: #969696;
    }
    .note .post .comment-list .comment .sub-tool-group a {
        margin-left: 10px;
    }
    .note .post .comment-list .comment .sub-tool-group a i {
        margin-right: 5px;
        font-size: 14px;
    }
    .note .post .comment-list .comment .sub-comment-list .more-comment {
        font-size: 14px;
        color: #969696!important;
    }
    .note .post .comment-list .sub-comment-list .add-comment-btn i {
        margin-right: 5px;
    }
    .note .post .comment-list .sub-comment-list .line-warp {
        margin-left: 10px;
        padding-left: 10px;
        border-left: 1px solid #d9d9d9;
    }
    .note .post .comment-list .sub-comment-list .line-warp{
        color: #3194d0!important;
    }
</style>
