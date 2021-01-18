import Swiper from 'swiper/swiper-bundle'
import Jquery from 'jquery'
import LazyLoad from '../lazyLoad'

const $ = Jquery;

import '!style-loader!css-loader!swiper/swiper.min.css';

$(".zone.diapo-fixe").each(function() {
    var zone = $(this);
    if (zone.find("video").length) return;

    zone.on("click", ".discover", function() {
        $("html,body")
            .stop()
            .animate({ scrollTop: zone.next().offset().top }, 500, "swing");
    });
    
    var slider = new Swiper(zone.find(".content_diapo").eq(0)[0], {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 10000,
        },
        effect: "fade",
        on: {
            init: function() {
                const photos = this.$el[0].querySelectorAll(
                    ".photo:not(.loaded),[data-src]"
                );

                if (LazyLoad.ImageObserver != null) {
                    photos.forEach(function(photo) {
                        LazyLoad.ImageObserver.observe(photo);
                    });
                } else {
                    photos.forEach(function(photo) {
                        LazyLoad.lazyObjects[lazyImages.length] = photo;
                    });
                }
            
            },
        },
    });
});