var vm = new Vue({
  el: "#app",
  data:{
    logs: [ ]
  },
  methods:{
    initial(){
      this.logs=[];
      this.logs=[
  {
    year: 2014,
    content:
    [
      {
        month: 7,
        tag: "咖啡廳副店長的日子",
      }
    ]
   },
   {
    year: 2015,
    content:
    [
      {
       tag: "北醫藝術季參展+擺市集" ,
      }
    ]
   },{
    year: 2016,
    content:[
      {
        tag: "瘋狂補學分+醫院實習吃便當",
      }
    ]
   },{
    year: 2017,
    content:
    [{
      tag:"踏入python與網頁設計坑",
    }
    ]
   },
 ]


    }
  }
  
});