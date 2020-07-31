<template>
<div class="home">
  <div class="iHero">
  <div class="container-xl">
  <!-- <i class="zi zi_tmPowerShell zi_load2"></i> -->
  <h1>面向PowerShell开发的中文社区</h1>
  <b-link  to="/about" class="btn btn-dark">卡死你3000源码库</b-link> 
  <b-button  to="/about" variant="outline-dark">动妖智Shell大师</b-button>
  </div>
  </div>
  <!-- iHero end -->
  
<b-container fluid="xl" class="">
  <div class="iwell">
  <b-row>
  <b-col md="6" class="iwell_l" >
    <h2>基于PowerShell智能操控</h2>
    <p>发挥自动线程优势-并可跨平台发挥潜办计算AI</p>
  </b-col>
  <b-col md="3">
    <i class="zi zi_Chinesecalendar"></i>
    <strong>面向企业</strong>
    <p>可以高效管理</p>
     <b-button  to="/about" variant="dark" size="lg">智动妖Shell大师</b-button>
  </b-col>
  <b-col md="3">
    <i class="zi zi_Chinesecalendar"></i>
    <strong>面向生产</strong>
    <p>集成在Zoomla!逐浪CMS之中</p>
     <b-button  to="/about" variant="outline-dark" size="lg">获取官方支持</b-button>    
  </b-col>
  </b-row>
  </div>
</b-container>

  
<b-container fluid="xl" class="inews">
  <!-- <h3>技术文摘</h3> -->
  <b-row>
    <b-col md="4" class="" v-for="node in nodelist" :key="node.NodeID">
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i>{{node.NodeName}}<a :href="node.NodeID">更多+</a></div>
    <ul>
      <li v-for="content in node.commonlist" :key="content.GeneralID"><a href="">{{content.Title}}</a></li>
    </ul>
    </div>
  </b-col>
  <!-- <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col>
  <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col>
  <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col>
  <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col>
  <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col>
  <b-col md="4" class="" >
    <div class="inews_box">
    <div class="inews_box_title"><i class="zi zi_fly"></i> 入门教程<a href="">更多+</a></div>
    <ul>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
      <li><a href="">中华人民共和国中华人民共和国中华人民共和国</a></li>
    </ul>
    </div>
  </b-col> -->
  </b-row>
</b-container>
<!-- inews end -->

<b-container fluid="xl" class="ishow">
  <ul class="row">
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_www" zico="网络"></i></div>
      <div class="ishow_box_title">
       <span>有网络即可安装</span>
       <p>支持ADSL宽带安装，支持光纤、小区宽带安装，支持在wifi网络</p>
      </div>
    </div>
    </li>
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_www" zico="网络"></i></div>
      <div class="ishow_box_title">
       <span>有网络即可安装</span>
       <p>支持ADSL宽带安装，支持光纤、小区宽带安装，支持在wifi网络</p>
      </div>
    </div>
    </li>
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_www" zico="网络"></i></div>
      <div class="ishow_box_title">
       <span>有网络即可安装</span>
       <p>支持ADSL宽带安装，支持光纤、小区宽带安装，支持在</p>
      </div>
    </div>
    </li>
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_rocket"></i></div>
      <div class="ishow_box_title">
       <span>多地快速上线</span>
       <p>支持ADSL宽带安装，支持光纤、小区宽带安装，支持在wifi网络</p>
      </div>
    </div>
    </li>
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_digg"></i></div>
      <div class="ishow_box_title">
       <span>内部通话免费</span>
       <p>支持ADSL宽带安装，支持光纤、小ifi网络下安装小ifi网小</p>
      </div>
    </div>
    </li>
    <li class="col-md-2 col-6">
    <div class="ishow_box">
      <div class="ishow_box_i"><i class="zi zi_curve"></i></div>
      <div class="ishow_box_title">
       <span>即开即用</span>
       <p>支持ADSL宽带安装，支持光纤、小区宽带安装，支持在wifi网络</p>
      </div>
    </div>
    </li>
  </ul>
</b-container>
<!-- ishow ned    -->

<div class="iscroll">
  <b-container fluid="xl">

<!-- 
    <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="(item,index) in carouselArr" :key="index">
                <img :src="item"/>
            </swiper-slide> -->
            <!-- 分页器 -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div>    -->
             <!-- 左右箭头 --> 
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper> -->


   
    <div class="iscroll_show">
    test
    <ul class="list-unstyled mt-5">
			<!-- <li v-for="node in nodes[0].contents" :key="node.GeneralID"><a href="javascript:;" @click="navTo(node)">{{node.Title}}</a></li> -->
			</ul>
    </div>
  </b-container>
</div>
<!-- iscroll end  -->

<b-container fluid="xl" class="yuju">
  <ul class="row">
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>基础入门</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_bell"></i>
    <strong>cmdlet命令</strong>
    <p>PowerShell功能特点Powe功能驱动器与文件</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>变量</strong>
    <p>PowerShell变量PowerShell变量PowerShell变量PowerShell变量PowerShell变量</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_flag"></i>
    <strong>运算符</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_noSee"></i>
    <strong>条件语句</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>循环语句</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>管理示例</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_balancescale"></i>
    <strong>管理计算机</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_adjust"></i>
    <strong>管理进程与服务</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>使用输出</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>驱动器与文件</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
    <li class="col-md-3">
    <i class="zi zi_handRight"></i>
    <strong>驱动器与文件</strong>
    <p>PowerShell功能特点Powe功能特点PowerShellll功能特点l功能特点</p>
    </li>
  </ul>
</b-container>
<!--  yuju end  -->


<b-container fluid="xl" class="xiazai">
  <h1>一个客户端就能满足你所有需求</h1>
 <b-button variant="outline-danger" class="xiazai_but">下载智动妖SHELL大师 →</b-button>
</b-container>
<!--  xiazai end  -->

<b-container fluid="xl">
  <div class="row">
    <div class="col-md-10 offset-md-1 advisory">
      <p>16年深耕做中国最好的基础软件研发企业<!--<b-button size="lg" class="advisory_but">立即咨询</b-button>-->
      <a href="" class="advisory_a">立即咨询</a>
      </p>
    </div>
  </div>
</b-container>

<footer>
  <div class="bv-section bv-gray" data-v-555a030c=""></div>
    <div class="footer2">
      <b-container fluid="xl">
        <div class="row">
          <div class="col-md-6 offset-md-3 footer2_ul">
            <ul>
              <li><strong>开始</strong></li>
              <li><a href="#">关于项目</a></li>
              <li><a href="#">产品理念</a></li>
              <li><a href="#">有何不同</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
            </ul>
            <ul>
              <li><strong>使用</strong></li>
              <li><a href="#">CDN使用</a></li>
              <li><a href="#">下载本地目录</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
            </ul>
            <ul>
              <li><strong>支持</strong></li>
              <li><a href="#">商业订购</a></li>
              <li><a href="#">申请新图标</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
            </ul>
            <ul>
              <li><strong>其他</strong></li>
              <li><a href="#">逐浪字库</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">Bootstrap中国站</a></li>
              <li><a href="#">扩展资源</a></li>
              <li><a href="#">扩展资源</a></li>
            </ul>
          </div>
        </div>
      </b-container>
    </div>
    <b-container fluid="xl" class="Copyright">
      <p>Copyright &copy; 2020 Zoomla!CMS. All Rights Reserved 版 权所有<br/>
      <a href="http://www.z01.com" target="_blank">基于Zoomla!逐浪CMS&reg; Cli studio构建</a> <a href="http://www.73ic.com" target="_blank">73ic去上</a> 提供云计算服务 <a href="/Item/1353.aspx">[版权申明]</a><br><a href="https://opensource.org/licenses/MIT" target="_blank">遵循 MIT 开源协议</a></P>
    </b-container>
</footer>


  <!-- <div class="bgbox">
   <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
      <div class="container-xl container">
          <div class="row">
              <h3>基于PowerShell智能管理的精品中文项目-案例和应用 </h3>
          </div>
          <div class="row box">
              <div class="col-md-4 col-xs-12">1</div>
              <div class="col-md-4 col-xs-12">2</div>
              <div class="col-md-4 col-xs-12">3</div>
              <div class="col-md-4 col-xs-12">4</div>
              <div class="col-md-4 col-xs-12">5 <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br> </div>
              <div class="col-md-4 col-xs-12">6</div>
          </div>
      </div>
  </div>

<footer>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi illo eveniet, temporibus beatae nesciunt ad. Sunt expedita ratione soluta non, id illum minus corporis consequatur accusamus placeat? Qui, excepturi perferendis?


</footer>
-->

<div class="container-xl bg-info">
  <p>  滑动门是3号节点下的：</p>
<pre>select * from zl_commonmodel where nodeid=[nodeid]</pre>
    <swiper :options="swiperOption">
            <swiper-slide class="swiper-slide" v-for="swiper in homeswiper" :key="swiper.GeneralID">
              <img :src="swiper.TopImg"  />
              {{swiper.Title}}
            </swiper-slide>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>   
             <!-- 左右箭头 --> 
            <div class="swiper-button-prev" slot="button-prev"></div> 
            <div class="swiper-button-next" slot="button-next"></div> 
        </swiper>
</div>

<div class="container-xl mt-5">
<p>工具节点下的文章列表</p>
<pre>select * from zl_commonmodel where nodeid=[nodeid]</pre>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ea similique illo neque iusto ipsam suscipit dolor inventore fugiat, reiciendis accusantium cumque earum, officiis velit maiores error, quod hic ex!
</div>

<div class="container-xl mt-5">
<p>调随机一个节点下的子节点列表和节点名以及节点图片</p>
<pre>select * from zl_node where ParentID=[ParentID]</pre>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ea similique illo neque iusto ipsam suscipit dolor inventore fugiat, reiciendis accusantium cumque earum, officiis velit maiores error, quod hic ex!
</div>


<div class="container-xl mt-5">
<p>指定节点+绑定模型的pics，即副表联查，节点条件 newsNode</p>
<pre>select * from ZL_CommonModel LEFT JOIN ZL_C_Article ON ZL_CommonModel.ItemID=ZL_C_Article.ID where NodeID=[NodeID]</pre>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ea similique illo neque iusto ipsam suscipit dolor inventore fugiat, reiciendis accusantium cumque earum, officiis velit maiores error, quod hic ex!
</div>


<div class="container-xl mt-5">
<p>指定节点+绑定模型的pics，即副表联查，模型ID条件 newsMode</p>
<pre>select * from ZL_CommonModel LEFT JOIN ZL_C_Article ON ZL_CommonModel.ItemID=ZL_C_Article.ID where ModelID=[ModeLID]</pre>
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ea similique illo neque iusto ipsam suscipit dolor inventore fugiat, reiciendis accusantium cumque earum, officiis velit maiores error, quod hic ex!
</div>


<div style="margin-top:1rem">23</div>
</div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default{
  name: 'Home',
		data:function(){
      var model={nodelist:[],swiperOption:{},homeswiper:[],toollist:[],parentlist:[],newsNode:[],newsMode:[]};
			var pid=9,snid=3,tnid=2,ppid=9,newnid=9,newmid=2;
			this.jsp("ps_index",{"pid":pid,"snid":snid,"tnid":tnid,"ppid":ppid,"newnid":newnid,"newmid":newmid}).then((ret)=>{
        var result = JSON.parse(ret.result);
        model.nodelist=result.nodelist;
        model.nodelist.forEach(element => {
        element.commonlist = JSON.parse(element.commonlist);
        });
        model.homeswiper=result.homeswiper;
        model.toollist=result.toollist;
        model.parentlist=result.parentlist;
        model.newsNode=result.newsNode;
        model.newsMode=result.newsMode;

        window.console.log(model);
    });
    model.swiperOption={
                    //显示分页
                    pagination: {
                      el: '.swiper-pagination'
                    },
                    //设置点击箭头
                    navigation: {
                      nextEl: '.swiper-button-next', 
                      prevEl: '.swiper-button-prev'
                    },
                    //自动轮播
                    autoplay: {
                      delay: 2000,
                      //当用户滑动图片后继续自动轮播
                      disableOnInteraction: false,
                    },
                    slidesPerView: 1,
                    //开启循环模式
                    loop: true
                };
			return model;
    },
		methods:{
			navTo:function(node){
				this.$router.push("/NodeContent/"+node.NodeID);
			}
		}		
  }
// export default {
//   name: 'Home',
//   components: {
//     // HelloWorld
//   }
// }
</script>
