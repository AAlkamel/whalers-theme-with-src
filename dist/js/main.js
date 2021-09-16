// var delay =1000;
// function autoSlider(){
//     $('.slider .active').each(function(){
//         if(!$(this).is(':last-child')){
//             $(this).delay(delay).fadeOut(400, function(){
//                 $(this).removeClass('active').next().addClass('active').fadeIn(400);
//             })
//         }else{
//             $(this).delay(delay).fadeOut(400, function(){
//                 $(this).removeClass('active');
//                 $('.slider div').eq(0).addClass('active').fadeIn(400);
//             },
//             )
//         }
//     })
// }

// autoSlider()
$(document).ready(function() {
    // ---------------- mobile menu ------------------
    $('.nave .menu').on('click',()=>{
        $('.mobile-menu').toggleClass('active');
    })
    // ---------------- purchases bag ------------------
    $('.purchases-btn').on('click',()=>{
        $('.purchases').addClass('active');
    })
    $('.purchases .head span.close ').on('click',()=>{
        $('.purchases').removeClass('active');
    })

    // -------------like--------
    $( ".fba.like" ).click(function() {
        $( this ).toggleClass( "heart" );
    });
    // -------------i.ti-layout list or grid--------
    $( "i.ti-layout-grid3" ).click(function() {
        $( '.items' ).removeClass( "list" );
    });
    $( "i.ti-view-list-alt" ).click(function() {
        $( '.items' ).addClass( "list" );
    });

    // ------------- My Account ------------------------
    $('#side-btn li').click(function(){
        var id = $(this).attr("id");
        var cla = '.'+ id
        var i = $(this).text();
        $('#title').text(i)
        $('.forms > form').css("display", "none")
        $(cla).css("display", "block")

        // console.log(id);
    })

})
