const version = "v1.0.1"; // Update version here
const fileName = "Banshi.apk";
const baseURL = "https://github.com/VivekBansal1806/Banshi-Website/releases/download";

const downloadLink = `${baseURL}/${version}/${fileName}`;

document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    const downloadButtons = document.querySelectorAll(".download-btn");

    if (downloadButtons.length === 0) {
        console.error("No elements found with class 'download-btn'");
        return;
    }

    downloadButtons.forEach(button => {
        button.setAttribute("href", downloadLink);
        button.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default # navigation
            console.log("Download button clicked. Redirecting to:", downloadLink);
            window.location.href = downloadLink; // ✅ Correct way
        });
    });
});
