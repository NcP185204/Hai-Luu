document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll("#nav li a");

    function highlightNav() {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // Trừ đi khoảng cách nhỏ để trigger sớm hơn
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active"); // Xóa class active khỏi tất cả các link
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active"); // Thêm class active vào link tương ứng
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNav);

    // Chuyển hình ảnh trong #tongQuanChuongTrinh
    const images1 = [ "images/kichban.png", "images/guildline.png"];
    let currentIndex1 = 0;
    const imageElement1 = document.getElementById("image-slider");
    document.getElementById("next-btn").addEventListener("click", function() {
        currentIndex1 = (currentIndex1 + 1) % images1.length;
        imageElement1.src = images1[currentIndex1];
    });
    document.getElementById("back-btn").addEventListener("click", function() {
        currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
        imageElement1.src = images1[currentIndex1];
    });

    // Chuyển hình ảnh trong #kichBanSoBo
    const images2 = ["images/noidungkichban.png", "images/noidung1.png", "images/noidung2.png"];
    let currentIndex2 = 0;
    const imageElement2 = document.getElementById("image-slider-1");
    document.getElementById("next-btn1").addEventListener("click", function() {
        currentIndex2 = (currentIndex2 + 1) % images2.length;
        imageElement2.src = images2[currentIndex2];
    });
    document.getElementById("back-btn1").addEventListener("click", function() {
        currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
        imageElement2.src = images2[currentIndex2];
    });


    const modal = document.getElementById("imageModal");
    const thumbnail = document.getElementById("thumbnail");
    const closeBtn = document.querySelector(".close");

    // Khi bấm vào ảnh thu nhỏ, mở modal hiển thị ảnh lớn
    thumbnail.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Khi bấm vào dấu "X", đóng modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Khi bấm bên ngoài ảnh cũng đóng modal
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Chuyển hình ảnh trong #kichBanSoBo
    const images3 = ["images/timeline.png", "images/timeline1.png", "images/timeline2.png","images/timeline3.png",
                    "images/timeline4.png","images/timeline5.png"
    ];
    let currentIndex3 = 0;
    const imageElement3 = document.getElementById("image-slider-2");
    document.getElementById("next-btn2").addEventListener("click", function() {
        currentIndex3 = (currentIndex3 + 1) % images3.length;
        imageElement3.src = images3[currentIndex3];
    });
    document.getElementById("back-btn1").addEventListener("click", function() {
        currentIndex3 = (currentIndex3 - 1 + images3.length) % images3.length;
        imageElement3.src = images3[currentIndex3];
    });

    // Danh sách ảnh
    const images4 = [
        "images/timeline.png",
        "images/timeline1.png",
        "images/timeline2.png",
        "images/timeline3.png",
        "images/timeline4.png",
        "images/timeline5.png",
        "images/timeline6.png"

    ];
    
    // Danh sách ảnh lớn (hiển thị trong modal)
    const imagesLarge = [
        "images/timeline.png",
        "images/timelinelarge1.png",
        "images/timelinelarge2.png",
        "images/timelinelarge3.png",
        "images/timelinelarge4.png",
        "images/timelinelarge5.png",
        "images/timelinelarge6.png"
    ];
    
    let currentIndex4 = 0;
    const imageElement4 = document.getElementById("image-slider-2");
    const modal1 = document.getElementById("imageModal1");
    const modalImg1 = document.getElementById("modal-img1");
    const closeModal1 = document.querySelector(".close1");
    
    // Khi bấm ảnh nhỏ, mở modal với ảnh lớn hơn
    imageElement4.addEventListener("click", function() {
        modal1.style.display = "flex";
        modalImg1.src = imagesLarge[currentIndex4]; // Hiển thị ảnh lớn tương ứng
    });
    
    // Đóng modal khi bấm dấu X hoặc bấm ngoài ảnh
    closeModal1.addEventListener("click", function() {
        modal1.style.display = "none";
    });
    modal1.addEventListener("click", function(event) {
        if (event.target === modal1) {
            modal1.style.display = "none";
        }
    });
    
    // Chuyển ảnh khi bấm nút next/back
    document.getElementById("next-btn2").addEventListener("click", function() {
        currentIndex4 = (currentIndex4 + 1) % images4.length;
        imageElement4.src = images4[currentIndex4];  // Cập nhật ảnh nhỏ
        modalImg1.src = imagesLarge[currentIndex4]; // Cập nhật ảnh lớn
    });
    
    document.getElementById("back-btn2").addEventListener("click", function() {
        currentIndex4 = (currentIndex4 - 1 + images4.length) % images4.length;
        imageElement4.src = images4[currentIndex4];  // Cập nhật ảnh nhỏ
        modalImg1.src = imagesLarge[currentIndex4]; // Cập nhật ảnh lớn
    });

    const images5 = [
        "images/truyenthong.png",
        "images/truyenthong1.png",
        "images/truyenthong2.png",
        "images/truyenthong3.png",
        "images/truyenthong4.png",
        "images/truyenthong5.png",
        "images/truyenthong6.png",
        "images/truyenthong7.png",
        "images/truyenthong8.png",
        "images/truyenthong9.png",
        "images/truyenthong10.png",
        "images/truyenthong11.png",
        "images/truyenthong12.png",
        "images/truyenthong13.png"
    ];
    
    // Danh sách ảnh lớn (hiển thị trong modal)
    const imagesLarge1 = [
        "images/timeline.png",
        "images/truyenthonglarge1.png",
        "images/truyenthonglarge2.png",
        "images/truyenthonglarge3.png",
        "images/truyenthonglarge4.png",
        "images/truyenthonglarge5.png",
        "images/truyenthonglarge6.png",
        "images/truyenthonglarge7.png",
        "images/truyenthonglarge8.png",
        "images/truyenthonglarge9.png",
        "images/truyenthonglarge10.png",
        "images/truyenthonglarge11.png",
        "images/truyenthonglarge12.png",
        "images/truyenthonglarge13.png"
    ];
    
    let currentIndex5 = 0;
    const imageElement5 = document.getElementById("image-slider-3");
    const modal2 = document.getElementById("imageModal2");
    const modalImg2 = document.getElementById("modal-img2");
    const closeModal2 = document.querySelector(".close2");
    const imageCounter = document.getElementById("image-counter"); // Đếm ảnh nhỏ
    const modalCounter = document.getElementById("modal-counter"); // Đếm ảnh lớn
    
    // Cập nhật số thứ tự ảnh
    function updateImageCounter() {
        imageCounter.innerText = `Hình ${currentIndex5 + 1}/${images5.length}`;
        modalCounter.innerText = `Hình ${currentIndex5 + 1}/${images5.length}`;
    }
    
    // Khi bấm ảnh nhỏ, mở modal với ảnh lớn hơn
    imageElement5.addEventListener("click", function() {
        modal2.style.display = "flex";
        modalImg2.src = imagesLarge1[currentIndex5]; // Hiển thị ảnh lớn tương ứng
        updateImageCounter(); // Cập nhật số ảnh
    });
    
    // Đóng modal khi bấm dấu X hoặc bấm ngoài ảnh
    closeModal2.addEventListener("click", function() {
        modal2.style.display = "none";
    });
    modal2.addEventListener("click", function(event) {
        if (event.target === modal2) {
            modal2.style.display = "none";
        }
    });
    
    // Chuyển ảnh khi bấm nút next/back
    document.getElementById("next-btn3").addEventListener("click", function() {
        currentIndex5 = (currentIndex5 + 1) % images5.length;
        imageElement5.src = images5[currentIndex5];  // Cập nhật ảnh nhỏ
        modalImg2.src = imagesLarge1[currentIndex5]; // Cập nhật ảnh lớn
        updateImageCounter(); // Cập nhật số ảnh
    });
    
    document.getElementById("back-btn3").addEventListener("click", function() {
        currentIndex5 = (currentIndex5 - 1 + images5.length) % images5.length;
        imageElement5.src = images5[currentIndex5];  // Cập nhật ảnh nhỏ
        modalImg2.src = imagesLarge1[currentIndex5]; // Cập nhật ảnh lớn
        updateImageCounter(); // Cập nhật số ảnh
    });
    
    // Hiển thị số ảnh khi trang tải xong
    updateImageCounter();
    

    const images6 = [
        "images/quantriruiro.png",
        "images/dutrukinhphi.png",
        "images/giaytophaply.png"
    ];
    
    const imagesLarge2 = [
        "images/quantriruiro1.png",
        "images/dutrukinhphi1.png",
        "images/giaytophaply.png"
    ];
    
    let currentIndex6 = 0;
    const imageElement6 = document.getElementById("image-slider-4");
    const modal3 = document.getElementById("imageModal3");
    const modalImg3 = document.getElementById("modal-img3");
    const closeModal3 = document.querySelector(".close3");
    
    // Lấy đúng ID của nút next và back
    const nextBtn = document.getElementById("next-btn4");
    const backBtn = document.getElementById("back-btn4");
    
    // Hàm cập nhật ảnh
    function updateImage6() {
        imageElement6.src = images6[currentIndex6];  // Cập nhật ảnh nhỏ
        modalImg3.src = imagesLarge2[currentIndex6]; // Cập nhật ảnh lớn
    }
    
    // Khi bấm ảnh nhỏ, mở modal với ảnh lớn hơn
    imageElement6.addEventListener("click", function() {
        modal3.style.display = "flex";
        updateImage6();
    });
    
    // Đóng modal khi bấm dấu X hoặc bấm ngoài ảnh
    closeModal3.addEventListener("click", function() {
        modal3.style.display = "none";
    });
    modal3.addEventListener("click", function(event) {
        if (event.target === modal3) {
            modal3.style.display = "none";
        }
    });
    
    // Chuyển ảnh khi bấm nút next/back
    nextBtn.addEventListener("click", function() {
        currentIndex6 = (currentIndex6 + 1) % images6.length;
        updateImage6();
    });
    
    backBtn.addEventListener("click", function() {
        currentIndex6 = (currentIndex6 - 1 + images6.length) % images6.length;
        updateImage6();
    });
    
    // Khởi tạo ảnh đầu tiên
    updateImage6();
    
});