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
    // -------------like--------
    $( "i.ti" ).click(function() {
        $( this ).toggleClass( "heart" );
    });
    // -------------i.ti-layout list or grid--------
    $( "i.th" ).click(function() {
        $( '.items' ).removeClass( "list" );
    });
    $( "i.list" ).click(function() {
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
    // ------------- popups ------------------------
    $('#open-popup01').click(function(){
        $('#popup01').slideDown();
        
    })
    $('#open-popup02').click(function(){
        $('#popup02').slideDown();
        
    })
    $('.close').click(function(){
        $('.popup').slideUp();
        
    })

})
