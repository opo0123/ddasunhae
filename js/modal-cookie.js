// 모달창 쿠키 적용
$jq1(function () {
//   console.log("modal-cookie 실행");
//   console.log("쿠키값:", $jq1.cookie("popup"));
  let chk = $jq1("#chk");
  // console.log(chk);

  if ($jq1.cookie("popup") !== "none") {
    $jq1(".modal-wrap").fadeIn("fast");
  }

  $jq1(".closeBtn").click(function () {
    // console.log("click"); // 클릭 확인용

    // 체크박스에 체크가 되면, popup의 값을 3일간 none으로 설정
    if (chk.is(":checked")) {
      $jq1.cookie("popup", "none", { expires: 3, path: "/" });
    }

    // 닫기를 누르면 빠르게 사라짐
    $jq1(".modal-wrap").fadeOut("fast");
  });
});
