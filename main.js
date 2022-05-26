window.addEventListener("load", function() {
        console.log("loading...")
        setTimeout(() => {

            load()
        }, );
    })
    //$("#content").append("<img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9fX2Fr08thrEpRBojhbhAgHaE7%26pid%3DApi&f=1'>")

function load() {
    $("#content").css("height", "100vh")
    $("#content").css("font-size", "50px");
    $("#content").css("font-weight", "900")
    $("#content").css("width", "100%")
    $("#content").css("color", "white")
        //$("#content").text("Eat Healthy and Natural Food")
    $("#content").css("text-align", "center")
    $("#content").css("transform", "translateY(-100%   )")

    $("body").css("background-image", "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9fX2Fr08thrEpRBojhbhAgHaE7%26pid%3DApi&f=1)")
    $("body").css("background-repeat", "no-repeat")
    $("body").css("height", "100vh")
    $("body").css("width", "100%")


    $("body").css("background-size", "cover")
    $("body").css("background-position", "center")
    $("#inner").css("opacity", "0.8")
    $("#inner").css("background-color", "black")
    $("#inner").css("width", "100%")
    $("#inner").css("height", "100vh")
        //$("#inner").text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium omnis ipsa iusto eos debitis. Perferendis dicta obcaecati dignissimos accusamus laborum eaque officia atque repellat sunt adipisci quis ad, vitae sint.")




    //$("body").css("background-image", "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.N6rCGJgzc3Sk2FqURXAg9QHaE8%26pid%3DApi&f=1)")
    //$("#content").css("background-size", "cover");

}
var tabs = [
    '.tabbed-section__selector-tab-1',
    '.tabbed-section__selector-tab-2',
    '.tabbed-section__selector-tab-3'
];

// Create the toggle function
var toggleTab = function(element) {
    var parent = element.parentNode;

    // Do things on click
    $(element)[0].addEventListener('click', function() {
        // Remove the active class on all tabs.
        // climbing up the DOM tree with `parentNode` and target 
        // the children ( the tabs ) with childNodes
        this.parentNode.childNodes[1].classList.remove('active');
        this.parentNode.childNodes[3].classList.remove('active');
        this.parentNode.childNodes[5].classList.remove('active');

        // Then, give `this` (the clicked tab), the active class
        this.classList.add('active');

        // Check if the clicked tab contains the class of the 1 or 2
        if (this.classList.contains('tabbed-section__selector-tab-1')) {
            // and change the classes, show the first content panel
            $('.tabbed-section-1')[0].classList.remove('hidden');
            $('.tabbed-section-1')[0].classList.add('visible');
            $('body').css("background-image", "url('./meals')")



            // Hide the second
            $('.tabbed-section-2')[0].classList.remove('visible');
            $('.tabbed-section-2')[0].classList.add('hidden');
            $('.tabbed-section-3')[0].classList.remove('visible');
            $('.tabbed-section-3')[0].classList.add('hidden');
        }

        if (this.classList.contains('tabbed-section__selector-tab-2')) {
            // and change the classes, show the second content panel
            $('.tabbed-section-2')[0].classList.remove('hidden');
            $('.tabbed-section-2')[0].classList.add('visible');
            $('body').css("background-image", "url('./dessert')")
                // Hide the first
            $('.tabbed-section-1')[0].classList.remove('visible');
            $('.tabbed-section-1')[0].classList.add('hidden');
            $('.tabbed-section-3')[0].classList.remove('visible');
            $('.tabbed-section-3')[0].classList.add('hidden');
        }

        if (this.classList.contains('tabbed-section__selector-tab-3')) {
            // and change the classes, show the second content panel
            $('.tabbed-section-3')[0].classList.remove('hidden');
            $('.tabbed-section-3')[0].classList.add('visible');
            $('body').css("background-image", "url('./drinks')")

            // Hide the first
            $('.tabbed-section-1')[0].classList.remove('visible');
            $('.tabbed-section-1')[0].classList.add('hidden');
            $('.tabbed-section-2')[0].classList.remove('visible');
            $('.tabbed-section-2')[0].classList.add('hidden');
        }
    });
};

// Then finally, iterates through all tabs, to activate the 
// tabs system.
for (var i = tabs.length - 1; i >= 0; i--) {
    toggleTab(tabs[i])
};