



let nav_item = document.querySelectorAll('.nav_item');
let nav_btn = document.querySelectorAll('.nav .btn_dep1');
let nav_dep2 = document.querySelectorAll('.nav .btn_dep1');
nav_btn.forEach(e=>{
    e.addEventListener('click',e=>{
        let parent_li = e.target.closest('.nav_item');
        
        if(parent_li.classList.contains('on')){
            
            parent_li.classList.remove('on');
        }else {
            nav_item.forEach(e=>{
                e.classList.remove('on');
            });
            parent_li.classList.add('on');
        }     
    });
});




// datepicker
$.datepicker.regional['ko'] = {
    closeText: '닫기',
    prevText: '이전달',
    nextText: '다음달',
    currentText: '오늘',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    weekHeader: 'Wk',
    dateFormat: 'yy-mm-dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    changeMonth: true,
    changeYear: true
};
$.datepicker.setDefaults($.datepicker.regional['ko']);

$(".inp_date").datepicker({
    //showOn: "button",
    //buttonImage: "../img/ico_calendar1.svg",
    //buttonImageOnly: true,
    //showButtonPanel: true
});
    
function set_today(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_end.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_7d(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_end.datepicker('setDate', '-7D'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_1m(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_end.datepicker('setDate', '-1M'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_3m(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_end.datepicker('setDate', '-3M'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}
function set_1y(target){
    let date_set = $(target).parents('.date_set');
    let date_start = date_set.find('.date_start');
    let date_end = date_set.find('.date_end');
    date_start.datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
    date_end.datepicker('setDate', '-1Y'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)
}




// tab nav
let initial_slide = $('.tab_nav_item.on').index();   
let ac_slide_main = new Swiper('.tab_nav_list',{   
    slidesPerView: "auto",
    //freeMode: true,
    initialSlide:initial_slide,
    //spaceBetween: 10,
    navigation: {
        nextEl: ".tab_nav_next",
        prevEl: ".tab_nav_prev",
    }
});
$(window).on('load',function(){
    tab_slide_reload()
});


// [D] 탭 삭제
function del_tap(target){
    let $this = $(target);
    let $this_tab = $this.parents('.tab_nav_item');
    let $tab_length = $('.tab_nav_item').length;
    
    if($this_tab.hasClass('on')){
        if($this_tab.index() + 1 < $tab_length){
            $this_tab.next('.tab_nav_item').addClass('on');
            //[D] 다음 페이지 불러오기

            //
        }else{
            $('.tab_nav_item').eq(0).addClass('on');
            //슬라이드 reload
            tab_slide_reload()
            //[D] 첫 페이지 불러오기

            //
        }
        
    }
    $this.parents('.tab_nav_item').remove();

    
}

// [D] 탭 클릭 (페이지로드)
function tab_load(target){
    let $this = $(target);
    let $this_tab = $this.parents('.tab_nav_item');
    $this_tab.addClass('on').siblings().removeClass('on');

    //[D] 선택된 페이지 불러오기

    //
    //tab_slide_reload()
}

//슬라이드 reload
function tab_slide_reload(){
    initial_slide = $('.tab_nav_item.on').index();
    ac_slide_main.update();
    ac_slide_main.slideTo(initial_slide,400,false)
}


