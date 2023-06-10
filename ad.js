window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('bannerContainer').style.display = 'block';
    }, 10000);

    document.getElementById('closeBanner').addEventListener('click', function() {
        document.getElementById('bannerContainer').style.display = 'none';
    });
});
