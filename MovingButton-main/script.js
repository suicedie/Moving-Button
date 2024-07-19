const no = document.getElementById('no');
no.addEventListener('mouseover', () => {
    if (no.classList.contains('animF')) {
        no.classList.remove('animF');
        no.classList.add('animB');
    } else if (no.classList.contains('animB')) {
        no.classList.remove('animB');
        no.classList.add('animF');
    } else {
        no.classList.add('animF');
    }

// انشئ متغيرات للوصول إلى العناصر في صفحة HTML
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const textElement = document.getElementById('text');

// أضف معالجات الحدث للأزرار
yesButton.addEventListener('click', openCamera);
noButton.addEventListener('click', function() {
    textElement.textContent = "You chose not to scan.";
});

// افتح الكاميرا وأعد توجيه معاينة الكاميرا إلى عنصر video
function openCamera() {
    const videoElement = document.createElement('video');
    const scanner = new Instascan.Scanner({ video: videoElement });
    
    // اعثر على رمز QR code
    scanner.addListener('scan', function(content) {
        textElement.textContent = "Scanned content: " + content;
        scanner.stop(); // قف قراءة الرمز بعد العثور عليه
    });
    
    // استخدم كاميرا الجهاز
    Instascan.Camera.getCameras().then(function(cameras) {
        if (cameras.length > 0) {
            scanner.start(cameras[0]); // استخدم الكاميرا الأولى المتاحة
            textElement.textContent = "Scanning QR code...";
        } else {
            textElement.textContent = "No cameras found.";
        }
    }).catch(function(error) {
        console.error(error);
        textElement.textContent = "Error accessing camera.";
    var scanner = new QRCodeScanner(video);
scanner.scan(function(err, result) {
  // The QR code has been scanned.
  console.log(result);
});
    });
}

});