$(document).ready(function(){
    $('.burger').click(function(event){
        $('.burger,.top-nav__main-menu').toggleClass('active')
        $('.body').toggleClass('lock')

    });
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 994,
                settings: {
                  arrows: false,
                  centerMode: true,
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
    });
    $('.slider_tovary').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 994,
                settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 2
                }
              },
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 2
              }
            },
            {
                breakpoint: 660,
                settings: {
                  arrows: true,
                  centerMode: true,
                  slidesToShow: 1
                }
              },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                slidesToShow: 1
              }
            }
          ]
        
    });

});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

$("select").on("click" , function() {
  
    $(this).parent(".select-box").toggleClass("open");
    
  });
  
  $(document).mouseup(function (e)
  {
      var container = $(".select-box");
  
      if (container.has(e.target).length === 0)
      {
          container.removeClass("open");
      }
  });
  
  
  $("select").on("change" , function() {
    
    var selection = $(this).find("option:selected").text(),
        labelFor = $(this).attr("id"),
        label = $("[for='" + labelFor + "']");
      
    label.find(".label-desc").html(selection);
      
  });


