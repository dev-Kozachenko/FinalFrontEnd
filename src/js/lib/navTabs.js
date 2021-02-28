function myTabs(){
    const tabNavs = document.querySelectorAll(".nav-tabs_item");
    const tabPanes = document.querySelectorAll(".tab-pane");
    
    for (let i = 0; i < tabNavs.length; i++) {

      tabNavs[i].addEventListener("click", function(e){
        e.preventDefault();
        const activeTabAttr = e.target.getAttribute("data-tab");
    
        for (let j = 0; j < tabNavs.length; j++) {
          var contentAttr = tabPanes[j].getAttribute("data-tab-content");
    
          if (activeTabAttr === contentAttr) {
            tabNavs[j].classList.add("active");
            tabPanes[j].classList.add("active"); 
          } else {
            tabNavs[j].classList.remove("active");
            tabPanes[j].classList.remove("active");
          }
        };
      });
    }
}

export default myTabs;
