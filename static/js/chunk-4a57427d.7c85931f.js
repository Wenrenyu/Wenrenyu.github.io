(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a57427d"],{"0d7c":function(e,t,a){},1643:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.httpsUrl,data:e.params,"show-file-list":!1,"before-upload":e.upload,"on-success":e.uploadSuccess,"on-error":e.uploadError,"on-change":e.uploadChange,"auto-upload":!1}},[e.imgsrc?a("img",{attrs:{src:e.imgsrc,height:"200",width:"200"}}):e.value?a("img",{attrs:{src:e.value,height:"200",width:"200"}}):a("i",{staticClass:"el-icon-plus"})])},o=[],r=a("1da1"),s=(a("96cf"),a("fb6a"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("62e4")),n={props:["value","addoff"],data:function(){return{fileList:[],httpsUrl:"",params:{},imgsrc:"",reponse:""}},mounted:function(){console.log(this.imgsrc,this.addoff)},methods:{upload:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,o,r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(s["u"])();case 2:i=a.sent,t.httpsUrl=i.host,o=e.name.slice(e.name.lastIndexOf(".")),r=Date.now()+o,n=i.dir+"myVue/"+r,t.params={key:n,ossAccessKeyId:i.accessid,policy:i.policy,Signature:i.signature,callback:i.callback};case 8:case"end":return a.stop()}}),a)})))()},uploadError:function(e,t,a){this.$message.error("上传失败"+e)},uploadSuccess:function(e,t,a){console.log("上传成功触发",this.params.key,e),this.$emit("input",this.params.key),this.$message.success("上传成功")},uploadChange:function(e,t){var a=e.raw.type;if("image/png"!==a&&"image/jpeg"!==a)return this.warning("请上传图片格式");this.imgsrc=URL.createObjectURL(e.raw),2===t.length&&t.shift(),console.log("虚假的上传",e,t,this.params.key)},submitUpload:function(){this.$refs.upload.submit()}}},l=n,c=a("2877"),d=Object(c["a"])(l,i,o,!1,null,null,null);t["a"]=d.exports},7732:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",[a("div",{staticClass:"container"},[a("div",{staticClass:"search-title"},[e._v("快速查找")]),a("div",{staticClass:"search-box"},[a("div",[a("span",[e._v("选择分类：")]),a("el-cascader",{attrs:{options:e.categoryLists,props:e.propss,clearable:""},on:{change:e.handleChange},model:{value:e.valueList,callback:function(t){e.valueList=t},expression:"valueList"}})],1),a("div",[a("span",[e._v("选择分类：")]),a("el-input",{staticClass:"Sinput",attrs:{type:"input",placeholder:"输入标题查询"},model:{value:e.searchInfo.title,callback:function(t){e.$set(e.searchInfo,"title",t)},expression:"searchInfo.title"}})],1),a("div",[a("span",[e._v("是否上架：")]),a("el-radio-group",{staticStyle:{"margin-right":"20px"},model:{value:e.searchInfo.is_on,callback:function(t){e.$set(e.searchInfo,"is_on",t)},expression:"searchInfo.is_on"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("上架")]),a("el-radio-button",{attrs:{label:"0"}},[e._v("下架")])],1)],1),a("div",[a("span",[e._v("是否推荐：")]),a("el-radio-group",{staticStyle:{"margin-right":"20px"},model:{value:e.searchInfo.is_recommend,callback:function(t){e.$set(e.searchInfo,"is_recommend",t)},expression:"searchInfo.is_recommend"}},[a("el-radio-button",{attrs:{label:"1"}},[e._v("推荐")]),a("el-radio-button",{attrs:{label:"0"}},[e._v("不推荐")])],1)],1)]),a("div",{staticStyle:{margin:"20px 20px 0 0",display:"flex","justify-content":"flex-end"}},[a("el-button",{attrs:{type:"primary"},on:{click:e._search}},[e._v("查找商品")]),a("el-button",{attrs:{type:"danger"},on:{click:e._searchrest}},[e._v("重置查找")])],1)]),a("div",{staticClass:"title-box"},[a("div",{staticClass:"title"},[e._v("商品列表")]),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:e.onAdd}},[e._v("添加商品")])],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[a("el-table-column",{attrs:{prop:"category_id",label:"总分类",width:"70"}}),a("el-table-column",{attrs:{prop:"category.name",label:"分类",width:"120"}}),a("el-table-column",{attrs:{prop:"title",label:"标题",width:"180"}}),a("el-table-column",{attrs:{align:"center",prop:"cover",label:"封面"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.cover_url,width:"50",height:"50"}})]}}])}),a("el-table-column",{attrs:{prop:"price",label:"价格"}}),a("el-table-column",{attrs:{prop:"stock",label:"库存"}}),a("el-table-column",{attrs:{prop:"sales",label:"销量"}}),a("el-table-column",{attrs:{prop:"is_on",label:"上架",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.is_on?"已上架":"未上架")+" "),a("el-switch",{attrs:{"active-color":"#ff4949","inactive-color":"#13ce66","active-value":1,"inactive-value":0},on:{change:function(a){return e.putOff(t.row.id)}},model:{value:t.row.is_on,callback:function(a){e.$set(t.row,"is_on",a)},expression:"scope.row.is_on"}})]}}])}),a("el-table-column",{attrs:{prop:"is_recommend",label:"推荐",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.is_recommend?"推荐":"未推荐")+" "),a("el-switch",{attrs:{"active-color":"#ff4949","inactive-color":"#13ce66","active-value":1,"inactive-value":0},on:{change:function(a){return e.putRecommendOff(t.row.id)}},model:{value:t.row.is_recommend,callback:function(a){e.$set(t.row,"is_recommend",a)},expression:"scope.row.is_recommend"}})]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",width:"180"}}),a("el-table-column",{attrs:{prop:"updated_at",label:"修改时间",width:"180"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"info"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("修改")])]}}])})],1),a("div",{staticClass:"block",staticStyle:{margin:"20px",width:"100%","text-align":"center"}},[a("el-pagination",{attrs:{background:"","current-page":e.page,"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e.eidtShow?a("edit",{attrs:{"is-show":e.eidtShow,list:e.eidtData,"category-list":e.categoryLists},on:{onClose:e.eidtClose,onLoad:e.onLoad}}):e._e(),e.addShow?a("add2",{attrs:{"is-show":e.addShow},on:{onClose:e.addClose,onLoad:e.onLoad}}):e._e()],1)},o=[],r=a("1da1"),s=(a("96cf"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"商品编辑",visible:e.dialogVisible,width:"800px","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.dialogData,"label-width":"80px",rules:e.rules}},[a("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[a("el-cascader",{attrs:{options:e.categoryLists,props:e.propss},on:{change:e.handleChange},model:{value:e.dialogData.category_id,callback:function(t){e.$set(e.dialogData,"category_id",t)},expression:"dialogData.category_id"}})],1),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{type:"text"},model:{value:e.dialogData.title,callback:function(t){e.$set(e.dialogData,"title",t)},expression:"dialogData.title"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{type:"text"},model:{value:e.dialogData.description,callback:function(t){e.$set(e.dialogData,"description",t)},expression:"dialogData.description"}})],1),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{attrs:{type:"text"},model:{value:e.dialogData.price,callback:function(t){e.$set(e.dialogData,"price",t)},expression:"dialogData.price"}})],1),a("el-form-item",{attrs:{label:"库存",prop:"stock"}},[a("el-input",{attrs:{type:"text"},model:{value:e.dialogData.stock,callback:function(t){e.$set(e.dialogData,"stock",t)},expression:"dialogData.stock"}})],1),a("el-form-item",{attrs:{prop:"cover",label:"上传图片"}},[a("addUpdate",{ref:"upDate",model:{value:e.dialogData.cover_url,callback:function(t){e.$set(e.dialogData,"cover_url",t)},expression:"dialogData.cover_url"}})],1),a("el-form-item",{attrs:{prop:"details",label:"上传图片"}},[a("wangEdit",{model:{value:e.dialogData.details,callback:function(t){e.$set(e.dialogData,"details",t)},expression:"dialogData.details"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.handleClose}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleConfirm("form")}}},[e._v("确 定")])],1)],1)}),n=[],l=(a("a9e3"),a("a4d3"),a("e01a"),a("62e4")),c=a("1643"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{attrs:{id:"demo1"}}),a("el-upload",{ref:"uploadBtn",staticClass:"uploadBtn",attrs:{action:e.editorUrl,data:e.params,"before-upload":e.editorUpload,"on-success":e.uploadSuccess,"on-error":e.uploadError,"show-file-list":!1}},[e._v(" 上传图片 "),a("i",{staticClass:"el-icon-plus"})])],1)},u=[],p=(a("fb6a"),a("b0c0"),a("6fad")),g=a.n(p),h={props:["value"],data:function(){return{editor:null,editorData:"",editorUrl:"",params:{}}},watch:{value:function(){this.editorData=this.value}},mounted:function(){var e=this,t=new g.a("#demo1");t.config.onchange=function(t){e.editorData=t,e.$emit("input",t)},t.create(),this.editor=t,this.editor.txt.append(this.value)},beforeDestroy:function(){this.editor.destroy(),this.editor=null},methods:{editorUpload:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,o,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(l["u"])();case 2:i=a.sent,t.editorUrl=i.host,o=e.name.slice(e.name.lastIndexOf(".")),r=Date.now()+o,s=i.dir+"myVue/"+r,t.params={key:s,ossAccessKeyId:i.accessid,policy:i.policy,Signature:i.signature,callback:i.callback};case 8:case"end":return a.stop()}}),a)})))()},uploadError:function(e,t){this.$message.error("上传失败")},uploadSuccess:function(e,t,a){this.$message.success("上传成功");var i=this.editorUrl+this.params.key;this.editor.txt.append('<img src="'.concat(i,'" />')),this.editorData='<img src="'.concat(i,'" />')}}},m=h,f=(a("a158"),a("2877")),b=Object(f["a"])(m,d,u,!1,null,null,null),v=b.exports,y={components:{addUpdate:c["a"],wangEdit:v},props:{isShow:{type:Boolean,default:!1},list:{type:Object,required:!0},categoryList:{type:Array,required:!0}},data:function(){return{dialogData:this.list,dialogVisible:this.isShow,newsData:{},categoryLists:this.categoryList,propss:{value:"id",label:"name"},rules:{title:[{required:!0,message:"请输入标题名称",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],price:[{required:!0,message:"请输入价格",trigger:"blur"},{type:"number",message:"请输入正确数据",trigger:"blur",transform:function(e){return Number(e)}}],stock:[{required:!0,message:"请输入库存",trigger:"blur"},{type:"number",message:"请输入正确数据",trigger:"blur",transform:function(e){return Number(e)}}],category_id:[{required:!0,message:"请选择分类",trigger:"blur"}],cover:[{required:!0,message:"您没有上传图片",trigger:"blur"}],details:[{required:!0,message:"您没有编写商品详情",trigger:"blur"}]}}},watch:{"dialogData.cover_url":function(){this.handleSend(),console.log("有变化了, 发送请求")}},mounted:function(){this.getCategoryList(),console.log(this.dialogData)},methods:{getCategoryList:function(){var e=this;Object(l["l"])().then((function(t){e.categoryLists=t}))},handleClose:function(){this.dialogVisible=!1,this.$emit("onClose",this.dialogVisible)},handleConfirm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;""===t.$refs.upDate.imgsrc?t.handleSend():t.$refs.upDate.submitUpload()}))},handleChange:function(e){var t=e.length-1;this.dialogData.category_id=e[t]},handleSend:function(){var e=this,t={category_id:this.dialogData.category_id,title:this.dialogData.title,description:this.dialogData.description,price:this.dialogData.price,stock:this.dialogData.stock,cover:this.dialogData.cover_url,details:this.dialogData.details},a=this.dialogData.id;Object(l["o"])(a,t).then((function(){e.success("修改成功"),e.handleClose(),e.$emit("onLoad")}))}}},_=y,w=(a("bcef"),Object(f["a"])(_,s,n,!1,null,null,null)),k=w.exports,D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{title:"添加商品",visible:e.dialogVisible,width:"750px","before-close":e.handleClose,"element-loading-text":"创建中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.5)"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.data,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"分类",prop:"category_id"}},[a("el-cascader",{attrs:{options:e.categoryLists,props:e.propss,clearable:""},on:{change:e.handleChange},model:{value:e.data.category_id,callback:function(t){e.$set(e.data,"category_id",t)},expression:"data.category_id"}})],1),a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{model:{value:e.data.title,callback:function(t){e.$set(e.data,"title",t)},expression:"data.title"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{model:{value:e.data.description,callback:function(t){e.$set(e.data,"description",t)},expression:"data.description"}})],1),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{model:{value:e.data.price,callback:function(t){e.$set(e.data,"price",e._n(t))},expression:"data.price"}})],1),a("el-form-item",{attrs:{label:"库存",prop:"stock"}},[a("el-input",{model:{value:e.data.stock,callback:function(t){e.$set(e.data,"stock",e._n(t))},expression:"data.stock"}})],1),a("el-form-item",{attrs:{prop:"cover",label:"上传图片"}},[a("addUpdate",{ref:"upDate",model:{value:e.data.cover,callback:function(t){e.$set(e.data,"cover",t)},expression:"data.cover"}})],1),a("el-form-item",{attrs:{prop:"details",label:"商品详情"}},[a("wangEdit",{model:{value:e.data.details,callback:function(t){e.$set(e.data,"details",t)},expression:"data.details"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即创建")]),a("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},x=[],C={components:{wangEdit:v,addUpdate:c["a"]},props:{isShow:{type:Boolean,default:!1}},data:function(){return{dialogVisible:this.isShow,data:{category_id:"",title:"",description:"",price:150,stock:233,cover:"",pics:[],details:""},rules:{title:[{required:!0,message:"请输入标题名称",trigger:"blur"},{min:3,max:6,message:"长度在 3 到 5 个字符",trigger:"blur"}],description:[{required:!0,message:"请输入描述",trigger:"blur"}],price:[{required:!0,type:"number",message:"请输入价格",trigger:"blur"},{type:"number",message:"请输入正确数据",trigger:"blur",transform:function(e){return Number(e)}}],stock:[{required:!0,type:"number",message:"请输入库存",trigger:"blur"},{type:"number",message:"请输入正确数据",trigger:"blur",transform:function(e){return Number(e)}}],category_id:[{required:!0,message:"请选择分类",trigger:"blur"}],cover:[{required:!0,message:"您没有上传图片",trigger:"blur"}],details:[{required:!0,message:"您没有编写商品详情",trigger:"blur"}]},categoryLists:[],propss:{value:"id",label:"name"},loading:!1,imgEnd:!1}},watch:{"data.cover":function(e,t){""!==t&&this.hanldeSend()}},mounted:function(){this.getCategoryList()},methods:{handleClose:function(){this.dialogVisible=!1,this.$emit("onClose",this.dialogVisible)},getCategoryList:function(){var e=this;Object(l["l"])().then((function(t){e.categoryLists=t}))},handleChange:function(e){console.log(e)},submitForm:function(e){var t=this;""===this.data.cover&&(this.data.cover=this.$refs.upDate.imgsrc),this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.data.category_id=t.data.category_id[1],t.$refs.upDate.submitUpload(),console.log("成功")}))},hanldeSend:function(){var e=this;Object(l["p"])(this.data).then((function(){e.success("添加成功"),e.handleClose(),e.$emit("onLoad")}))},hanldeSends:function(){var e=this,t={category_id:166,title:"《区块链三十》",description:"前沿 / 《区块链》",price:2,stock:38752,cover:"https://oss.shop.eduwork.cn/myVue/1652336807963.png",pics:[],details:'<img src="https://laravel-book-shop.oss-cn-beijing.aliyuncs.com/myVue/1652336803069.jpg" title="" style=""/>'};Object(l["p"])(t).then((function(){e.success("添加成功"),e.handleClose(),e.$emit("onLoad")}))}}},$=C,S=(a("bbd9"),Object(f["a"])($,D,x,!1,null,null,null)),L=S.exports,O={name:"Goods",components:{edit:k,add2:L},data:function(){return{searchInfo:{current:1,category_id:"",title:"",is_on:"",is_recommend:""},valueList:[],categoryLists:[],propss:{value:"id",label:"name"},tableData:[],page:1,total:0,eidtShow:!1,eidtData:{},addShow:!1}},mounted:function(){this.getData(),this.getCategoryList()},methods:{clickitem:function(e){console.log(e,this.radio2),e===this.radio2?this.radio2="":this.radio2=e},getData:function(){var e=this,t=this.searchInfo,a=t.current,i=t.category_id,o=t.title,r=t.is_on,s=t.is_recommend,n={current:a,category_id:i,title:o};""!==r&&(n.is_on=r),""!==s&&(n.is_recommend=s),Object(l["q"])(n).then((function(t){e.tableData=t.data,e.total=t.meta.pagination.total})),console.log(n)},getCategoryList:function(){var e=this;Object(l["l"])().then((function(t){e.categoryLists=t}))},_search:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$set(e.searchInfo,"current",1),t.next=3,e.getData();case 3:e.page=1,e.success("成功");case 5:case"end":return t.stop()}}),t)})))()},onAdd:function(){this.addShow=!0},putOff:function(e){var t=this;Object(l["b"])(e).then((function(e){t.success("修改成功")}))},putRecommendOff:function(e){var t=this;Object(l["a"])(e).then((function(e){t.success("修改成功")}))},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.searchInfo.current=e,this.getData(),console.log(this.page)},handleEdit:function(e,t){this.eidtShow=!0,this.eidtData=JSON.parse(JSON.stringify(t)),console.log(this.eidtData)},eidtClose:function(e){this.eidtShow=e},addClose:function(e){this.addShow=e},handleChange:function(e){this.searchInfo.category_id=e[1],console.log(e)},_searchrest:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.searchInfo={current:1,title:"",category_id:""},e.page=1,t.next=4,e.getData();case 4:e.success("成功");case 5:case"end":return t.stop()}}),t)})))()},onLoad:function(){this.$set(this.searchInfo,"current",1),this.page=1,this.getData(),this.getCategoryList()}}},j=O,I=(a("f6ef"),Object(f["a"])(j,i,o,!1,null,"3ad79422",null));t["default"]=I.exports},a158:function(e,t,a){"use strict";a("c130")},bb71:function(e,t,a){},bbd9:function(e,t,a){"use strict";a("0d7c")},bcef:function(e,t,a){"use strict";a("bb71")},c130:function(e,t,a){},f6ef:function(e,t,a){"use strict";a("fe8b")},fe8b:function(e,t,a){}}]);