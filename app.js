let money = 0;
const royalstyleCost = 2200;

const itemList = ['블링 오션 베어', '블링 오션 마린(남)', '꽃게도 갈게', '블링 베어 버블', '용맹 개복치', '예쁜 미소', '기다란 브라키이이오사우르스', '브라키이이오사우르스 슈트', '높디 높은 나아아무', '높이높이 사다리', '해피 돌핀', '썸머 디노 모자', '썸머 디노 가운', '어둠의 소악마 모자', '어둠의 소악마 전신옷', '어둠의 소악마 장갑', '어둠의 소악마 신발', '어둠의 소악마 무기', '전설의 어인', '풀이 죠습니다', '썸머 피크닉', '화이트 레인보우 레깅스', '[30일] 뽀송송 말풍선반지 교환권', '[30일] 뽀송송 명찰반지 교환권', '별의 기도 반지', '개복치와 바다 여행 라이딩 (영구) 교환권'];

const probability = [31, 32, 32, 30, 25, 15, 15, 25, 30, 50, 40 , 40, 50, 50 ,50, 40, 50, 50, 50, 50, 50, 50,50,50, 20, 25];




let isEmpty = true;

$('.btn_next, .btn_select').click(function () {
    // ui 노출 처리
  $('.btn_next').toggle();
  $('.text_area .text:first-child').hide();

// 랜덤 처리
  let random = Math.floor(Math.random() * 1000) + 1;
  console.log('랜덤숫자' + random);
  let itemIndex = checkProb(random);
  console.log(itemIndex);
  $('.item_name').text(itemList[itemIndex]);

  $('.text_area .text:nth-child(2)').show();


    //사용 금액 표시
    money += royalstyleCost;
    $('.total_money').text(money);
});

$('.btn_royalstyle').click(function() {
  if (isEmpty) {
    $('.layer').show();
    $('.text_area .text:first-child').show();
    $('.btn_next').show();
    $('.text_area .text:nth-child(2)').hide();
    isEmpty = false;
  }
});

$('.btn_close, .btn_ok').click(function () {
    $('.layer').hide();
    isEmpty = true;
});

// todo : ui 구현, 아이템창에 뽑은거 표시, 타이핑효과, 랜덤 함수 개선

function checkProb(num) {
    let sum = 0;
    for (let index in probability) {
        sum += probability[index];
        if (num <= sum) {
            return index;
        }
    }
}