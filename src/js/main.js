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
