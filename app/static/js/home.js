app.controller('HomeController', function($scope,$http,$location,$mdDialog)
{
    $scope.filterCategory = "";

    var assemblyTotalList;

    $scope.assemblyList = ["문재인", "안철수", "심상정","유승민"];
    $scope.administrator = ["이재명","안희정","홍준표"];
    $scope.categories={
        "민생": { color: "#09400D", img: "life.png"},
        "안보":{ color: "#3B214C", img: "security.png"},
        "정치":{ color:"#53585F", img: "politics.png"},
        "경제":{ color:"#022550", img: "economy.png"},
        "복지":{ color: "#A27429", img: "welfare.png"},
        "기타":{ color: "#DCDEE0", img: "etc.png"},
        "역사":{ color: "#5E2B13", img: "history.png"},
        "외교": { color: "#1967BD", img: "diplomacy.png"}
    }
    $scope.filters = {};

//    $scope.color={
//        "민생": "#09400D",
//        "안보":"#3B214C",
//        "정치":"#53585F",
//        "경제":"#022550",
//        "복지":"#A27429",
//        "기타":"#DCDEE0",
//        "역사":"#5E2B13",
//        "외교": "#1967BD"
//    }

    $scope.assemblyList = [
        {
          "name": "문재인",
          "photo": "moon.png",
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
          "name": "안철수",
          "photo": "ahn2.png",
          "data": [
            {
              "title": "박근혜 정부의 최순실 등 민간인에 의한 국정농단 의혹 사건 규명을 위한 특별검사의 임명 등에 관한 법률안",
              "description": "박근혜 정부의 최순실 등 민간인에 의한 국정농단 의혹 사건 규명을 위한 특별검사의 임명 등에 관한 법률안",
              "category": "민생"
            },
            {
              "title": "일본군 ‘위안부’ 피해자 문제 합의",
              "description": "일본군 ‘위안부’ 피해자 문제 합의일본군 ‘위안부’ 피해자 문제 합의",
              "category": "역사"
            },
            {
              "title": "민법 일부 개정 볍률안",
              "description": "민법 일부 개정 볍률안민법 일부 개정 볍률안민법 일부 개정 볍률안민법 일부 개정 볍률안",
              "category": "민생"
            }
          ]
        },
        {
          "name": "심상정",
          "photo": "sim.png",
          "data": [
            {
              "title": "세월호 진상규명",
              "description": "세월호 진상규명세월호 진상규명세월호 진상규명세월호 진상규명세월호 진상규명",
              "category": "민생"
            },
            {
              "title": "일본군 ‘위안부’ 피해자 문제 합의",
              "description": "일본군 ‘위안부’ 피해자 문제 합의일본군 ‘위안부’ 피해자 문제 합의",
              "category": "역사"
            },
            {
              "title": "북한국의 비무장지대 지뢰도발 행위",
              "description": "북한국의 비무장지대 지뢰도발 행위북한국의 비무장지대 지뢰도발 행위북한국의 비무장지대 지뢰도발 행위 ",
              "category": "안보"
            }
          ]
        }
    ];

    $http.get("/test")
    .success(function(data,status,headers,config){

        console.log("data??? list ?? ",data);
        assemblyTotalList = data;
        $scope.assemblyList = data;
    })
    .error(function(data, status, headers, config){});

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

//    var expectCategories = function(expectedNames, key) {
//      element.all(by.repeater(key + ' in assembly.data').column(key + '.category')).then(function(arr) {
//        arr.forEach(function(wd, i) {
//          expect(wd.getText()).toMatch(expectedNames[i]);
//        });
//      });
//    };

//    $scope.reloadData = function(categoryName){
//        console.log("ssss ", categoryName);
//        angular.forEach (assemblyTotalList, function(assembly) {
//            console.log("assembly ",assembly);
//            for(news in assembly.data){
//
//            }
//        });
//
//    }

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
