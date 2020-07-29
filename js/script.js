// event saat link di click
$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);
  // pindahkan scroll
  $("html , body").animate({
    scrollTop: elemenTujuan.offset().top - 50,
  });

  e.preventDefault();
});
