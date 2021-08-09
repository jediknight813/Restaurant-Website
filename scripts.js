function AboutPage() {
    reset_page_class()
    document.getElementById("PageBackground").classList.add('menu_background');
    document.getElementById("PageContent").innerHTML = `
    <body>
        <div class="small_menu_font"> we have the best ice cream in the world! </div>
        <div class="small_menu_font"> made naturally since 1809 </div>
        <img class="menu_image" src="Images/icecream.png">
        <div class="small_menu_font"> order online or vist us today! </div>
    </body>`;
}


function ContactPage() {
    reset_page_class()
    document.getElementById("PageBackground").classList.add('background');
    document.getElementById("PageContent").innerHTML = `
    <body>
        <div class="menu_font"> contact us! </div>
        <div class="small_menu_font"> phone: 314-159-265 </div>
        
        <div class="menu_font"> address </div>
        <div class="small_menu_font"> Salisbury SP4 7DE, UK </div>
    </body>`;
}



function MenuPage() {
    reset_page_class()
    document.getElementById("PageBackground").classList.add('ice_cream_menu_background');


    document.getElementById("PageContent").innerHTML = `
    <div class="grid_template">
    
        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/strawbarry ice cream.png">
            <div class="ice_cream_menu_font"> strawberry ice cream  </div>
            <div class="ice_cream_menu_font"> 6$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/chocolateicecream.png">
            <div class="ice_cream_menu_font"> chocolate ice cream  </div>
            <div class="ice_cream_menu_font"> 4$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/redvelveticecream.png">
            <div class="ice_cream_menu_font"> red velvet ice cream  </div>
            <div class="ice_cream_menu_font"> 9$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/basicicecream.png">
            <div class="ice_cream_menu_font"> vanilla ice cream  </div>
            <div class="ice_cream_menu_font"> 1$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/birthdaycakeicecream.png">
            <div class="ice_cream_menu_font"> blueberry ice cream  </div>
            <div class="ice_cream_menu_font"> 4$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/orangeicecream.png">
            <div class="ice_cream_menu_font"> orange ice cream  </div>
            <div class="ice_cream_menu_font"> 4$ </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/nukeicecream.png">
            <div class="ice_cream_menu_font"> nuclear ice cream  </div>
            <div class="ice_cream_menu_font"> 1000$  </div>
        </div>

        <div class="template_item"> 
            <img class="ice_cream_image_border" src="Images/cookiedoughicecream.png">
            <div class="ice_cream_menu_font"> cookie dough ice cream  </div>
            <div class="ice_cream_menu_font"> 7$  </div>
        </div>

    </div>`;
}

function reset_page_class() {
    document.getElementById("PageBackground").classList.remove('menu_background');
    document.getElementById("PageBackground").classList.remove('background');
    document.getElementById("PageBackground").classList.remove('ice_cream_menu_background');
}
