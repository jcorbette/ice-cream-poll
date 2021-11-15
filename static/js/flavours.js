d3.json(json_link, function(data) {   

    var json_data = data.flavours;;
    

    function addElement () {
        for (i = 0; i < json_data.length; i++) {
            var flavour = json_data[i].name;
            var image = json_data[i].image;
            var description = json_data[i].description;
            
            var name = document.createElement("h1");
            name.innerHTML = flavour;
            name.className = "flavour_title";
            
            var img = document.createElement("img");
            img.src = image;
            img.className = "flavour_img";
            img.alt = "Picture of " + flavour + " ice-cream";
            
            var about = document.createElement("p");
            about.innerHTML = description
            about.className = "about_flavour";
            
            
            var new_div = document.createElement("div");
            new_div.className = "card";
            
            document.getElementById("scrolling-wrapper").appendChild(new_div);       
            document.getElementsByClassName("card")[i].appendChild(img);
            document.getElementsByClassName("card")[i].appendChild(name);
            document.getElementsByClassName("card")[i].appendChild(about);        
            
        };
        
    };

    window.onload = addElement();
        
});

    
function checkView(elem,partial)
{
    var container = $("#scrolling-wrapper");
    var contWidth = container.width();
    var contLeft = container.scrollLeft();
    var contRight = contLeft + contWidth;
 
    var elemLeft = $(elem).offset().left - container.offset().left;
    var elemRight = elemLeft + $(elem).width();
    
    var isTotal = (elemLeft >= -100 && elemRight <= contWidth);
    var isPart = ((elemLeft < 100 && elemRight > 100 ) || (elemLeft > 100 && elemLeft <= container.width())) && partial ;
    

    return  isTotal  || isPart ;

}


$(document).ready(function(){
    
    function changeView() {
        $("#scrolling-wrapper").scroll(function(){
            var result = "", result2 = ""
           $.each( $(".card"),function(i,e){
                result = checkView($(e),false);
                result2 = checkView($(e),true);
                
                if ((result == true) && (result2 == true)) {
                    $(this).css("opacity", "100%");
                    $(this).css("filter", "grayscale(0%)");
                    $(this).css("width", "450px");
                    $(this).css("height", "43rem");
                }            
                else  {
                    $(this).css("opacity", "70%");
                    $(this).css("filter", "grayscale(50%)")
                    $(this).css("width", "400px");
                    $(this).css("height", "41.5rem");
                    
                }
                
            

            });
        });  
    } 
    
    
    function scrollView() {
        
       
        const scroll_button2 = document.getElementById("arrow1");
        

        scroll_button2.onclick = function () {
            document.getElementById("scrolling-wrapper").scrollLeft -= 600;
        }
        
        const scroll_button = document.getElementById("arrow2");        

        scroll_button.onclick = function () {
            document.getElementById("scrolling-wrapper").scrollLeft += 600;
        }
        
        const scroll_button3 = document.getElementById("up-scroll");        

        scroll_button3.onclick = function () {
            $("html, body").scrollTop(0);
        }
   
        
    }
    
    
    window.onload = changeView();
    window.onresize = changeView() 
    window.onload = scrollView();
    window.onresize = scrollView(); 
    

});



 






