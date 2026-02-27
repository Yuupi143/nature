$(document).ready(function(){
  //Main Slider
  $(".main-slide").owlCarousel({
    loop:true,
    nav:false, 
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
    

  //Product-box slider
  $('.product-home .product-box--lists').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  }); 

  //Main Slider
  $(".testimonials-box__slider").owlCarousel({
    loop:true,
    nav:false, 
    items: 1,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });


  //News box Slider
  $(".news-box__lists").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });

  //Brands box Slider
  $(".brand-box__lists").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
      0:{
        items:2
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
    }
  });

  //Product Gallery
  $(".product-detail__images--gallery").owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
      0:{
        items:5
      },
      600:{
        items:5
      },
      1000:{
        items:5
      }
    }
  });
});