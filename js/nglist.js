/**
 * Created by senyi on 2016/3/29.
 */
window.onload =function(){
//    var plist = document.getElementById("pagelist");
//    var li = document.createElement("li");
//    plist.getElementsByTagName("ul")[0].appendChild(li);
}
document.onscroll =function(){
    var navi=document.getElementById('nav');
    var list=document.getElementById('llist');
    if(document.body.scrollTop>150){
        navi.className ='lsynav2 lsynav';
        list.className ='lsynav-h lsynav-h2';
    }else{
        navi.className ='lsynav';
        list.className ='lsynav-h';
    }

}
var app = angular.module('lsyApp',['ngAnimate']);
app.controller('ltop',function($scope){
    $scope.wx=true;
})
app.controller('lnav1',function($scope){
    $scope.count =0;
    $scope.msglist=true;
    $scope.msgtoggle=function(){
        $scope.msglist=!$scope.msglist;
    }
    $scope.choose=function(count,value){
        if(count==value)
        {
            return true;
        }else return false;
    }
    $scope.goto=function(count){
        if(count==0)return;
        //  alert( document.body.scrollTop);
        var body= document.body;
        //   var top=  angular.element(body).animate({ scrollTop: 550 }, 100);
//            $animate.enter(document.body).then(function() {
//                $scope.scrollTop = 550;
//            });
        // alert(top);
        var top = 550+(count-1)*430;
        body.scrollTop=550+(count-1)*430;
    }
});
app.controller('lalldate',function($scope){
    $scope.no=1;
    $scope.gw=true;
    $scope.fj=true;
    $scope.xs=true;
    $scope.tbcount=1;
    $scope.jmcount = 1;
    $scope.ydhcount = 1;
    $scope.ydhdisplay = true;
    $scope.mgjcount = 1;
    $scope.mgjdisplay = true;
    $scope.ymxcount = 1;

    $scope.delcount = 1;
    $scope.filmcount = 1;
    $scope.ktvcount = 1;
    $scope.hotelcount = 1;
    $scope.salecount = 1;

    $scope.qdcount = 1;
    $scope.zhcount = 1;
    $scope.csjcount = 1;
    $scope.haocount = 1;

    $scope.pages=[1,2];
    $scope.npage=1;
    $scope.foc=0;
    $scope.url='';
//    $scope.url='pages/taobao.html';
    $scope.loadPages=function(){
//        var plist = document.getElementById("pagelist");
//        var n = document.getElementsByClassName("tejia").length;
//        alert(n);
//        for(i=0;i<n;i++){
//        var li = document.createElement("li");
//            li.innerHTML=i+1;
//            plist.getElementsByTagName("ul")[0].appendChild(li);
//        }
    }
    $scope.change = function(value,judge){
        if(value==judge){
                return false;
        }
        else{return true;}
    };
    $scope.charge = function(value,judge,n,pag){
        if(value==judge){
            if(n==pag) {
                return false;
            }else {
                return true;
            }
        }
        else{return true;}
    };
    $scope.choose=function(count,value){
        if(count==value)
        {
            return true;
        }else return false;
    }
    $scope.totop=function(count){
        var body= document.body;
        body.scrollTop=100;
    }
});