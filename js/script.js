$(document).ready(function(){
    // Home Slider JS Code Start
       setInterval(function(){
            if($(".slide-items-5").hasClass("opacity")){
                $(".slide-items-5").removeClass("opacity");
                $(".slide-items-4").addClass("opacity");
            }else if($(".slide-items-4").hasClass("opacity")){
                $(".slide-items-4").removeClass("opacity");
                $(".slide-items-3").addClass("opacity");
            }else if($(".slide-items-3").hasClass("opacity")){
                $(".slide-items-3").removeClass("opacity");
                $(".slide-items-2").addClass("opacity");
            }else if($(".slide-items-2").hasClass("opacity")){
                $(".slide-items-2").removeClass("opacity");
                $(".slide-items-1").addClass("opacity");
            }else if($(".slide-items-1").hasClass("opacity")){
                $(".slide-items-1").removeClass("opacity");
                $(".slide-items-5").addClass("opacity");
            }
       },7000);
    // Home Slider JS Code End

    // Initialization Slick Slider 


    $(".services").slick({
        infinite: true,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll:5,
        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]

    })
    $(".slick-prev").html("<i class='h5 pt-2 text-muted fas fa-angle-left'></i>");
    $(".slick-next").html("<i class='h5 pt-2 text-muted fas fa-angle-right'></i>");
})