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
                value:''
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
</style>