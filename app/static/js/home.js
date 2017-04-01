app.controller('HomeController', function($scope,$http,$location,$mdDialog)
{
    $scope.currentPage = "국회의원";
    var assemblyTotalList;

    $scope.administrators = [
        {
          "name": "이재명",
          "photo": "lee.png",
          "data": [
            {
              "title": "세월호 진상규명",
              "description": "세월호 진상규명세월호 진상규명세월호 진상규명",
              "category": "복지"
            },
            {
              "title": "북한의 제4차 핵실험 규탄 결의안",
              "description": "북한의 제4차 핵실험 규탄 결의안북한의 제4차 핵실험 규탄 결의안",
              "category": "안보"
            },
            {
              "title": "일본군 ‘위안부’ 피해자 문제 합의",
              "description": "일본군 ‘위안부’ 피해자 문제 합의 일본군 ‘위안부’ 피해자 문제 합의",
              "category": "역사"
            }
          ]
        },
        {
          "name": "안희정",
          "photo": "ahn1.png",
          "data": [
            {
              "title": "세월호 진상규명",
              "description": "세월호 진상규명세월호 진상규명세월호 진상규명",
              "category": "복지"
            },
            {
              "title": "북한의 제4차 핵실험 규탄 결의안",
              "description": "북한의 제4차 핵실험 규탄 결의안북한의 제4차 핵실험 규탄 결의안",
              "category": "안보"
            },
            {
              "title": "일본군 ‘위안부’ 피해자 문제 합의",
              "description": "일본군 ‘위안부’ 피해자 문제 합의 일본군 ‘위안부’ 피해자 문제 합의",
              "category": "역사"
            }
          ]
        },
        {
          "name": "홍준표",
          "photo": "hong.png",
          "data": [

          ]
        }];

    $scope.categories={
        "민생": { color: "#45948B", img: "life.png"},
        "안보":{ color: "#233A68", img: "security.png"},
        "정치":{ color:"#939598", img: "politics.png"},
        "경제":{ color:"#2A5E71", img: "economy.png"},
        "복지":{ color: "#63C3B5", img: "welfare.png"},
        "기타":{ color: "#C4C3C3", img: "etc.png"},
        "역사":{ color: "#34588D", img: "history.png"},
        "외교": { color: "#1174B7", img: "diplomacy.png"},
        "사회": {color:"#3A778F", img:"society.png"}
    }
    $scope.filters = {};


    $http.get("/test")
    .success(function(data,status,headers,config){

        console.log("data??? list ?? ",data);
        assemblyTotalList = data;
        $scope.assemblyList = data;
    })
    .error(function(data, status, headers, config){});

    $scope.changePage = function(page){
        $scope.currentPage = page;
    }

    $scope.changeBackground = function(){
        console.log("dkjfkd");
    }

    $scope.openDialog = function(ev, assemblyName, item){
        $http.get("/person?name="+assemblyName+"&keyword="+item.keyword)
        .success(function(data,status,headers,config){

            $mdDialog.show({
              locals:{ newsData : data},
              controller: DialogController,
              templateUrl: '../static/html/dialog.html',
              parent: angular.element(document.body),
              targetEvent: ev,
              clickOutsideToClose:true
            })
            .then(function(answer) {
              $scope.status = 'You said the information was "' + answer + '".';
            }, function() {
              $scope.status = 'You cancelled the dialog.';
            });
        })
        .error(function(data, status, headers, config){});

    }


    function DialogController($scope, $mdDialog,newsData) {
        console.log("newsData ",newsData);
        $scope.newsData = newsData;
        $scope.hide = function() {
          $mdDialog.hide();
        };

        $scope.cancel = function() {
          $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
//          $mdDialog.hide(answer);
            $mdDialog.hide();
        };
      }

});
