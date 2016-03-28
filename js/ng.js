/**
 * Created by senyi on 2016/3/23.
 */
document.onscroll =function(){
    var navi=document.getElementById('nav');
    var navs=document.getElementsByName('lsynav-s');
    if(document.body.scrollTop>150){
        navi.className ='lsynav2 lsynav';
    }else{
        navi.className ='lsynav';
    }
}
var app = angular.module('lsyApp',['ngAnimate']);
app.controller('lmodel1',function($scope){
    $scope.tbcount = 1;
    $scope.jmcount = 1;
    $scope.ydhcount = 1;
    $scope.ydhdisplay = true;
    $scope.mgjcount = 1;
    $scope.mgjdisplay = true;
    $scope.ymxcount = 1;
    $scope.delurl = 'www.meituan.com';
    $scope.change = function(value,judge){
        if(value==1){ $scope.delurl = 'www.meituan.com';}
        if(value==2){ $scope.delurl = 'https://www.dianping.com/';}
        if(value==3){ $scope.delurl = '百度糯米';}
        if(value==judge)return false;
        else{return true;}
    };
});
app.controller('lmodel2',function($scope){
    $scope.delcount = 1;
    $scope.filmcount = 1;
    $scope.ktvcount = 1;
    $scope.hotelcount = 1;
    $scope.salecount = 1;
    $scope.change = function(value,judge){
        if(value==1){ $scope.delurl = 'www.meituan.com';}
        if(value==2){ $scope.delurl = 'https://www.dianping.com/';}
        if(value==3){ $scope.delurl = '百度糯米';}
        if(value==judge)return false;
        else{return true;}
    };
});
app.controller('ltop',function($scope){
    $scope.wx=true;
})
app.controller('lpic',function($scope, $interval){
    $scope.number = 1;
    $scope.ptype = 1;
    $scope.qdn=1;
    $scope.zhn=1;
    $scope.csn=1;
    $scope.haon=1;
    $scope.toZero = function(){
        if($scope.qdn==5)$scope.qdn=1;
        if($scope.zhn==5)$scope.zhn=1;
        if($scope.csn==5)$scope.csn=1;
        if($scope.haon==5)$scope.haon=1;
    };
    $scope.change = function(value,judge){
        if(value==judge)return false;
        else{return true;}
    };
    $scope.judgement=function(count,value){
        if(count==value)
        {
            return true;
        }else return false;
    };
    $interval(function () {
        $scope.number ;
    }, 5000);
});
app.controller('lnav1',function($scope){
    $scope.count =1;
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
app.controller('lnav2',function($scope){
    $scope.count =2;
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
app.controller('lnav3',function($scope){
    $scope.count =3;
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
        var top = 550+(count-1)*530;
        body.scrollTop=550+(count-1)*530;
    }
});