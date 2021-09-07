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

