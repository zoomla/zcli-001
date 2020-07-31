<template id="myContent">
<div class=" item">
<div class="class_banner">
<h1>内容页，也要显示栏目名称:{{this.node.NodeName}}</h1>
</div>

<!-- +model.node.NodeID -->

<b-breadcrumb :items="breadcrumb" class="container-xl ibread"></b-breadcrumb>



<b-container fluid="xl" class="item_title">
	<h1>{{conMod.title}}</h1>
	<abbr>
	<span id="CreateTime">关键字：{{conMod.tagkey}} 发表：{{conMod.createTime.split('T')[0]}}</span> <span id="Hits">浏览数：{{conMod.hits}}</span>
	</abbr>
</b-container>

<div class="container-xl myContent" v-html="conMod.content" v-highlight></div>


<footer>
  <div class="bv-section bv-gray" data-v-555a030c=""></div>
    <div class="footer_con">
      <b-container fluid="xl">
        <div class="row">
          <div class="col-md-6 offset-md-3 footer_con_list">
            <ul>
              <li><strong>开始</strong></li>
              <li v-for="newsNodes in newsNode" :key="newsNodes.GeneralID"><a :href="'#/Item/'+newsNodes.GeneralID" class="">{{newsNodes.Title}}</a></li>
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
              <li><strong>文摘</strong></li>
              <li v-for="parentlist2s in parentlist2" :key="parentlist2s.NodeID"><a :href="'#/Item/'+parentlist2s.NodeID" class="">{{parentlist2s.NodeName}}</a></li>
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

</div>
</template>
<script>
import hljs from 'highlight.js'
import Vue from 'vue'
import 'highlight.js/styles/tomorrow-night-blue.css'
import 'highlightjs-line-numbers.js'
 
 
const highlightCode = () => {
  const preEl = document.querySelectorAll('pre')
  
  preEl.forEach((el) => {
    hljs.highlightBlock(el);
  });
}

Vue.directive("highlight", function(el) {
    let blocks = el.querySelectorAll('pre code');
     Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});


 //Markdown编辑器之行号与加色显示
 /*
 npm install --save vue-hljs-with-line-number

// lineNumbersBlock 不会引用，无法产生行号
文档：
https://www.jianshu.com/p/6ee5d9005d7f
https://github.com/wcoder/highlightjs-line-numbers.js/
https://blog.csdn.net/xs18952904/article/details/104244688
https://xuexb.com/post/highlight-showline.html
https://www.npmjs.com/package/vue-hljs-with-line-number

https://rkroom.com/post/nuxt-vue-layout-style
*/

export default {
name: 'myContent',
 data(){
	var ref = this;
  var model = {conMod: {createTime:""}, node:{},breadcrumb:[],newsNode:[],parentlist2:[]};
  var id = ref.$route.params.id,newnid=22,pid=1;
	const that = this
	this.jsp("content_get",{"id":id}).then((ret)=>{
    model.conMod=JSON.parse(ret.result)[0];
    that.$nextTick(function(){
				that.initData();
			})
    window.console.log(model.conMod);
		//document.title=model.conMod.title; //传递标题的方法
    this.jsp("node_get",{"id":model.conMod.nodeId}).then((ret)=>{model.node=JSON.parse(ret.result);
    window.console.log(model.node);
    model.breadcrumb = [
			{
				text: '首页',
				href: '/'
			},
			{
				text: model.node.NodeName,
				href: '#/class/'+model.node.NodeID
			},
			{
				text: model.conMod.title,
				active: true
			}
			];
    
    })
    
  });
		//调用接口获取数据
		ref.jsp("node_list",{"pid":pid}).then((ret)=>{				
			model.parentlist2=JSON.parse(ret.result);
    });
    // 调用数据接口输出面包屑导航
		ref.jsp("content_list",{"nid":newnid}).then((ret)=>{				
			model.newsNode=JSON.parse(ret.result);
		//输出数据方法
			window.console.log(model.content_list);
			
		});    
	return model;
},

metaInfo () {
  return {
	title: this.conMod.title,
	meta: [
      { vmid: 'description', name: 'description', content: this.conMod.title },
	//  { vmid: 'keywords', name: 'keywords', content: this.conMod.title }
	]
  }
},
created () {
	this.initData()
},
methods: {
	initData(){
		const preDoms = document.querySelectorAll('pre');
      preDoms.forEach(function(preDom,k){
          const lenght = preDom.innerText.split('\n').length
          console.log(lenght)
          let html = ''
          for(var i = 0 ;i<lenght;i++){
            html+= `<span>`+(i+1)+`</span>`;
          }
          var linenumber=document.createElement("div");
          linenumber.className = 'line-number'
          linenumber.innerHTML=html
          preDom.appendChild(linenumber)
      })
	}
	// navToList: function () { this.$route.push("/list/" + this.conMod..ModelID); }
	
},
mounted() {
        highlightCode()
    },
updated () {
	highlightCode()
	},


// 下面两段为body绑定content_bg的className
beforeCreate:function() {
    document.getElementsByTagName("body")[0].className="content_bg";
},
beforeDestroy:function() {
    document.body.removeAttribute("class","content_bg");
},
}
</script>
