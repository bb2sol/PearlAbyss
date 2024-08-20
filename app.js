let money = 0;
const royalstyleCost = 2200;

const itemCodeList = ['1006591','1050785', '1073990', '1103748', '1703536', '1012835', '1006593', '1054238', '1103749', '1703537', '1103750', '1005001', '1053215', '1004000', '1082560', '1052674', '1072877', '1702471', '1102857', '1702939', '1042242', '1062230', '5680825', '5680824', '1112994', '5681142'];

const itemList = ['블링 오션 베어', '블링 오션 마린(남)', '꽃게도 갈게', '블링 베어 버블', '용맹 개복치', '예쁜 미소', '기다란 브라키이이오사우르스', '브라키이이오사우르스 슈트', '높디 높은 나아아무', '높이높이 사다리', '해피 돌핀', '썸머 디노 모자', '썸머 디노 가운', '어둠의 소악마 모자', '어둠의 소악마 전신옷', '어둠의 소악마 장갑', '어둠의 소악마 신발', '어둠의 소악마 무기', '전설의 어인', '풀이 죠습니다', '썸머 피크닉', '화이트 레인보우 레깅스', '[30일] 뽀송송 말풍선반지 교환권', '[30일] 뽀송송 명찰반지 교환권', '별의 기도 반지', '개복치와 바다 여행 라이딩 (영구) 교환권'];

const probability = [31, 32, 32, 30, 25, 15, 15, 25, 30, 50, 40 , 40, 50, 50 ,50, 40, 50, 50, 50, 50, 50, 50,50,50, 20, 25];

let isEmpty = true;
let dialog = 1;

$('.btn_next, .btn_select').click(() => {
    openRoyalstyle();
});

$('.btn_royalstyle').click(() => {
  if (isEmpty) {
    $('.layer').show();
    $('.text_area .text:first-child').show();
    $('.btn_next').show();
    $('.text_area .text:nth-child(2)').hide();
    isEmpty = false;
  }
});

$('.btn_close').click(() => {
    closeDialog();
});

$('.btn_ok').click(() => {
    if (dialog == 1) openRoyalstyle();
    else closeDialog();
});

function checkProb(num) {
    let sum = 0;
    for (let index in probability) {
        sum += probability[index];

        if (num <= sum) {
            return index;
        }
    }
}

function openRoyalstyle() {
    dialog = 2;

    // ui 노출 처리
    $('.btn_next').toggle();
    $('.text_area .text:first-child').hide();

    // 랜덤 처리
    let random = Math.floor(Math.random() * 1000) + 1;
    let itemIndex = checkProb(random);
    $('.item_name').text(itemList[itemIndex]);

    let img_src = './img/0' + itemCodeList[itemIndex] + '.img.info.icon.png';
    const img = new Image();
    img.src = img_src;
    img.onload = () => {
        $('.item_name').prepend(`<span class="item_img"></span>`);
        $('span.item_img').css('background-image', 'url(\'' + img_src + '\')');
        $('span.item_img').css('width', img.width);
        $('span.item_img').css('height', img.height);    
    }
    
    $('.text_area .text:nth-child(2)').show();

    //사용 금액 표시
    money += royalstyleCost;
    $('.total_money').text(money);
}

function closeDialog() {
    $('.layer').hide();
    isEmpty = true;
    dialog = 1;

    $('.text_area .text:first-child').show();
    $('.btn_next').show();
    $('.text_area .text:nth-child(2)').hide();
}

