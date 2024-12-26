
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
        

        // スワイパー(企業一覧)
        var swiperCompany = new Swiper(".js-frame-swiper", {
            allowTouchMove: false,
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 3000,
            loop: true, // ループを有効化
            autoplay: {
                delay: 0, // 2秒間最初のスライドを表示
                disableOnInteraction: false,
                reverseDirection: false,
            },
            breakpoints: {
                768: {
                    spaceBetween: 70,
                },
            },
        });
        
        
        

        // スワイパー(口コミ)
        var swiperThird = new Swiper(".js-features-swiper", {
            allowTouchMove: false, 
            centeredSlides: true,
            slidesPerView: "auto",
            spaceBetween: 20,
            speed: 4000, // スライドの移動速度を3秒に設定
            loop: true, // 初期化時はループを無効化
            autoplay: {
                delay: 0, // 自動再生を開始する間隔を設定
                disableOnInteraction: false,
                reverseDirection: false // 左から右に流れる設定
            },
            breakpoints: {
                768: {
                    spaceBetween: 30
                }
            },
        });
        

        // スワイパー(評価)
        const swiperTwo = new Swiper(".js-example-swiper", {
            loop: true,
            // ページネーション
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // 前後の矢印
            navigation: {
                nextEl: ".example-next", // 固有のクラスを指定
                prevEl: ".example-prev", // 固有のクラスを指定
            },

        });
        


        // CTA
        document.addEventListener("scroll", function () {
            const fv = document.querySelector(".fv");
            const ctaButtons = document.querySelector(".cta__buttons");
            const footer = document.querySelector("footer");

            if (fv && ctaButtons && footer) {
                const fvBottom = fv.getBoundingClientRect().bottom;
                const footerTop = footer.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                // `fv` が画面の上に完全に消えたらCTAボタンを表示
                if (fvBottom < 0) {
                    ctaButtons.classList.add("show");
                } else {
                    ctaButtons.classList.remove("show");
                }

                // `footer` が画面に表示されたらCTAボタンを非表示
                if (footerTop < windowHeight) {
                    ctaButtons.classList.remove("show");
                }
            }
        });


        // スクロールヒント
        new ScrollHint(".js-scroll");





        const swiper = new Swiper(".all-swiper", {
            centeredSlides: true, // 1枚目のスライドを中央にする
            loop: true, // ループさせる
            speed: 500, // 少しゆっくり(デフォルトは300)
            slidesPerView: 3, // デフォルトは3枚表示
            spaceBetween: 20, // スライド間のスペース
            // ページネーション
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            // 前後の矢印
            navigation: {
                nextEl: ".review-next", // 固有のクラスを指定
                prevEl: ".review-prev", // 固有のクラスを指定
            },
            // レスポンシブ設定
            breakpoints: {
                768: {
                    slidesPerView: 3, // 768px以上は3枚表示
                    spaceBetween: 20,
                },
                500: {
                    slidesPerView: 2.5, // 500px以上は2.5枚表示
                    spaceBetween: 10,
                },
                0: {
                    slidesPerView: 1.5, // 500px以下は1.5枚表示
                    spaceBetween: 5,
                },
            },
            // スライド変更時と初期化時のクラス管理
            on: {
                init: function () {
                    // 初期化時に中央スライドにクラスを付与
                    const slides = this.slides;
                    slides.forEach((slide, index) => {
                        if (index === this.activeIndex) {
                            slide.classList.add("review__content-slide-active");
                        } else {
                            slide.classList.remove("review__content-slide-active");
                        }
                    });
                },
                slideChangeTransitionStart: function () {
                    // スライド変更時にクラスを更新
                    const slides = this.slides;
                    slides.forEach((slide, index) => {
                        if (index === this.activeIndex) {
                            slide.classList.add("review__content-slide-active");
                        } else {
                            slide.classList.remove("review__content-slide-active");
                        }
                    });
                },
            },
        });
        
        
        

});
