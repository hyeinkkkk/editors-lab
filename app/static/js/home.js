app.controller('HomeController', function($scope,$http,$location)
{
    console.log("ssss");

    $scope.assemblyList = ["문재인", "안철수", "심상정","유승민"];
    $scope.administrator = ["이재명","안희정","홍준표"];

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
    ]
//    data = [
//        {
//            "name": "문재인",
//            "category":
//        }
//    ];

});
