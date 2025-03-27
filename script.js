document.addEventListener("DOMContentLoaded", function () {
    let text = "Hallow, I am Pipah!!";
    let i = 0;
    let isDeleting = false;
    let speed = 90; // Kecepatan mengetik
    let typingElement = document.querySelector(".typing-text");

    function typeWriter() {
        if (!isDeleting && i < text.length) {
            typingElement.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(typeWriter, speed);
        } else if (isDeleting && i > 0) {
            typingElement.innerHTML = text.substring(0, i - 1);
            i--;
            setTimeout(typeWriter, speed / 2); // Hapus lebih cepat
        } else {
            isDeleting = !isDeleting;
            setTimeout(typeWriter, 500); // Tunggu sebelum balik ketik
        }
    }

    typeWriter();
});


document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".list-item1").style.animation = "fadeInUp 0.6s ease-out forwards";
    }, 200);

    setTimeout(() => {
        document.querySelector(".list-item2").style.animation = "fadeInUp 0.6s ease-out forwards";
    }, 400);

    setTimeout(() => {
        document.querySelector(".list-item3").style.animation = "fadeInUp 0.6s ease-out forwards";
    }, 600);
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        console.log("Form Submitted!"); // Debugging

        const notification = document.getElementById("notification");
        notification.classList.remove("success", "error");

        // Simulasi pengiriman data (fake API request)
        setTimeout(() => {
            let success = Math.random() > 0.3; // 70% sukses, 30% gagal

            if (success) {
                notification.innerHTML = "✅ Email berhasil dikirim!";
                notification.classList.add("success");
                this.reset(); // Reset form setelah sukses
            } else {
                notification.innerHTML = "⚠️ Gagal mengirim email. Coba lagi!";
                notification.classList.add("error");
            }

            notification.style.display = "block";

            // Hapus notifikasi setelah 5 detik
            setTimeout(() => {
                notification.style.display = "none";
            }, 5000);
        }, 1500); // Simulasi delay 1.5 detik
    });
});
