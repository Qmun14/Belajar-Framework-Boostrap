// (function () {
    // 
// })();  ini adalah self-invoking anonymus function  <<--- harusnya pake cara ini lkalo mau pake jquery

// event pada saat link diklik
$('.nav-link').on('click', function(e){
    
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yg bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').scrollTop(elemenTujuan.offset().top);

    e.preventDefault();

});

