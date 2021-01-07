$(document).ready(function(){
    $('.preloader').delay(1000).fadeToggle(500 , function () { 
        $('body').css('overflow-y' , 'scroll')
     });
})
$('select').niceSelect();
$('.header').height($(window).height());
$('.slide_btn').hover(function(){
    $('.over_lay').toggleClass('over_lay_toggle');
});
$('.center_nav .nav-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
});
// navbar scroll 
// $('.center_nav .nav-item').click(function(){
//     $('body , html').animate({
//         scrollTop : $('#' + $(this).data('scroll')).offset().top
//     }, 1000);
// });
// scroll to top 
$(window).scroll(function(){
    if ($(this).scrollTop() > 70)
    {
        $('.top').css('opacity' , '1')
    }
    else {
        $('.top').css('opacity' , '0')
    }
});
// scroll navabar to links 
$('.center_nav .nav-item').click(function(){
    $('body , html').animate({
        scrollTop : $('#' + $(this).data('scroll')).offset().top - 50
    },1000)
})
// slide btn animated scroll
$('.carousel-caption .btn , .Dah').click(function(){
    $('body , html').animate({
        scrollTop : $('#' + $(this).data('action')).offset().top - 70      
    } , 1000)
});
$('.top').click(function(){
    $('body , html').animate({
        scrollTop: 0
    } , 1000)
});
$(window).scroll(function(){
if($(this).scrollTop() > 60)
{
    $('.navbar').addClass('fixed');
}
else{
    $('.navbar').removeClass('fixed')
}
});
// owel carousel edition ...
$('.first_slider').owlCarousel({
    loop:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.second_slider').owlCarousel({
    center: true,
    items:2,
    loop:true,
    dots:false,
    autoplay:true,
    responsive:{
        600:{
            items:4
        }
    }
})
$('.show_more').on('click' ,function(){
    $('.ad:hidden').slice(0,3).slideDown(1000);
    $('html,body').animate({
        scrollTop: $(this).offset().top - 330
    }, 1000);
});
$('.fill_data .marker').click(function(){
    $(this).addClass('active')
});
$('.fill_data .m1').click(function(){
    $('.fill_data .second-timeline').removeClass('active_timeline');
    $('.fill_data .second').hide();
    $('.fill_data .third').hide();
    $('.fill_data .first').show()
});
$('.fill_data .m2').click(function(){
    $('.fill_data .second-timeline').addClass('active_timeline');
    $('.fill_data .first').hide();
    $('.fill_data .third').hide();
    $('.fill_data .second').show()
});
$('.fill_data .m3').click(function(){
    $('.fill_data .second-timeline').addClass('active_timeline');
    $('.fill_data .first').hide();
    $('.fill_data .second').hide();
    $('.fill_data .third').show()
});
$('.fill_data .first .btn').click(function(){
    $('.fill_data .m2').addClass('active').siblings().removeClass('active')
    $('.fill_data .second-timeline').addClass('active_timeline');
    $('.fill_data .first').hide();
    $('.fill_data .second').show()
});
$('.fill_data .second .btn').click(function(){
    $('.fill_data .m3').addClass('active').siblings().removeClass('active')
    $('.fill_data .second-timeline').addClass('active_timeline');
    $('.fill_data .second').hide();
    $('.fill_data .third').show()
});
// $('.dropdown-toggle').click (function(){
//     $('.user_list').slideToggle();
//     $('.notification_list').slideUp();
//     $('.language-dropdown').slideUp();
//     $('.crown_notify').slideUp();
// });
// $('.crown_notification').click(function(){
//     $('.crown_notify').slideToggle();
//     $('.user_list').slideUp();
//     $('.language-dropdown').slideUp();
//     $('.notification_list').slideUp();
// });
// $('.notification_toggle').click (function(){
//     $('.notification_list').slideToggle();
//     $('.user_list').slideUp();
//     $('.language-dropdown').slideUp();
//     $('.crown_notify').slideUp();
// });
// $('.last_item').click(function(){
//     $('.language-dropdown').slideToggle();
//     $('.user_list').slideUp();
//     $('.notification_list').slideUp();
//     $('.crown_notify').slideUp();
// });
// $('.language-dropdown .lang-parent').click(function(){
//     $(this).children().addClass('active');
//     $(this).siblings().children().removeClass('active')
// });
$('#checkbox').on('change', function() {
    if ($(this).is(":checked")) 
    {
        $('.dis_btn').removeAttr('disabled');
    }
    else
    
    {
        $('.dis_btn').attr('disabled', 'disabled');
    }
});
$('.dis_btn').click(function(){
    console.log('done');
});
$('.btn_drop').click(function(){
    $('.code-dropdown-menu').slideToggle();
});
$('.right_input .code-dropdown-menu a').click(function(){
    $('.code-dropdown-menu').slideToggle();
    console.log($(this).text());
    var src = $('img', $(this)).attr('src');
    $('.right_input .btn_drop').html(`<img src="${src}"> <span>${$(this).text()}</span>`);
    
});
var eng_months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var date = new Date();
var dateView = document.getElementById('date');
var SdateView = document.getElementById('s-date');
dateView.innerHTML = `${date.getDate()} , ${eng_months[date.getMonth()]} ${date.getFullYear()}`;
SdateView.innerHTML = `${date.getDate()} , ${eng_months[date.getMonth()]} ${date.getFullYear()}`;
/*-----------------------------------------------------------------------------------------------------*/
// user_profile page code 
$('.user_select_data .main_user_select .small_nav li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#' + $(this).data('target')).addClass('show').siblings().removeClass('show');
});
$('.user_select_data .first .btn').click(function(){
    $('.user_select_data .second').addClass('show').siblings().removeClass('show');
    $('.user_select_data .main_user_select .small_nav .m2').addClass('active').siblings().removeClass('active')
});
$('.user_select_data .second .btn').click(function(){
    $('.user_select_data .third').addClass('show').siblings().removeClass('show');
    $('.user_select_data .main_user_select .small_nav .m3').addClass('active').siblings().removeClass('active')
});
/**--------------------------------------------------------------------------------- */