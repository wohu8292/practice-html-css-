$('.accordian .question').click(function(){
    $(this).siblings('.answer').slideUp()
    $(this).next().stop().slideToggle('fast')
    $(this).toggleClass('active')
    $(this).siblings('.accordian .question').removeClass('active')
})
