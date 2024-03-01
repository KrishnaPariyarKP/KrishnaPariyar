$(document).ready(function(){
    $('.wapper').each(function() {
        var currentIndex = 0;
        var $images = $(this).find('img');
        var totalImages = $images.length;

        // Show the first image
        $images.eq(currentIndex).show();

        // Start slideshow
        setInterval(function(){
            $images.eq(currentIndex).fadeOut(1000);
            currentIndex = (currentIndex + 1) % totalImages;
            $images.eq(currentIndex).fadeIn(1000);
        }, 3000); // Change slide every 3 seconds
    });
});

function btn(slctr){
    var element = document.querySelector(slctr);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}