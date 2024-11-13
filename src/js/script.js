
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

        // アコーディオン（よくある質問）
        document.querySelectorAll('.accordion__header').forEach(button => {
            button.addEventListener('click', () => {
                const accordionItem = button.parentElement;
        
                // アコーディオンの開閉
                accordionItem.classList.toggle('active');
        
                // 他のアコーディオンを閉じる
                document.querySelectorAll('.accordion__item').forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
                });
            });
        });



        // アコーディオン(本当の5つの理由)
        document.querySelectorAll('.reason-accordion__header').forEach(button => {
            button.addEventListener('click', () => {
                const accordionItem = button.parentElement;
                
                // アコーディオンの開閉
                accordionItem.classList.toggle('active');
            });
        });
        


        // swiper(企業名)
        var swiper = new Swiper(".js-features-swiper", {
            allowTouchMove: false, 
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: false // 左から右に流れるように設定
            },
            loopAdditionalSlides: 1,
            breakpoints: {
                768: {
                    spaceBetween: 30
                }
            },
        });
        
        
        
});
