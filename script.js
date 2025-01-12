// Fungsi untuk menampilkan / menyembunyikan pilihan genre
function toggleGenre() {
    var genreOptions = document.getElementById('genre-options');
    var yearOptions = document.getElementById('year-options');
    var recommendationOptions = document.getElementById('recommendation-options');

    // Menyembunyikan pilihan tahun dan rekomendasi jika sedang terbuka
    yearOptions.style.display = 'none';
    recommendationOptions.style.display = 'none';

    // Toggle genre
    genreOptions.style.display = genreOptions.style.display === 'none' ? 'block' : 'none';
}

// Fungsi untuk menampilkan / menyembunyikan pilihan tahun
function toggleYear() {
    var yearOptions = document.getElementById('year-options');
    var genreOptions = document.getElementById('genre-options');
    var recommendationOptions = document.getElementById('recommendation-options');

    // Menyembunyikan pilihan genre dan rekomendasi jika sedang terbuka
    genreOptions.style.display = 'none';
    recommendationOptions.style.display = 'none';

    // Toggle tahun
    yearOptions.style.display = yearOptions.style.display === 'none' ? 'block' : 'none';
}

// Fungsi untuk menampilkan / menyembunyikan pilihan rekomendasi
function toggleRecommendation() {
    var recommendationOptions = document.getElementById('recommendation-options');
    var genreOptions = document.getElementById('genre-options');
    var yearOptions = document.getElementById('year-options');

    // Menyembunyikan pilihan genre dan tahun jika sedang terbuka
    genreOptions.style.display = 'none';
    yearOptions.style.display = 'none';

    // Toggle rekomendasi
    recommendationOptions.style.display = recommendationOptions.style.display === 'none' ? 'block' : 'none';
}

// Fungsi untuk filter berdasarkan genre
function filterGenre(genre) {
    document.getElementById('display-title').innerText = 'Menampilkan genre: ' + genre;
    filterProducts('genre', genre);
}

// Fungsi untuk filter berdasarkan tahun
function filterYear(year) {
    document.getElementById('display-title').innerText = 'Menampilkan tahun: ' + year;
    filterProducts('year', year);
}

// Fungsi untuk filter berdasarkan rekomendasi
function filterRecommendation(recommendation) {
    document.getElementById('display-title').innerText = 'Menampilkan rekomendasi: ' + recommendation;
    filterProducts('recommendation', recommendation);
}

// Fungsi untuk menyaring produk berdasarkan kategori
function filterProducts(attribute, value) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productValue = product.getAttribute('data-' + attribute);
        if (productValue !== value && value !== '') {
            product.style.display = 'none';
        } else {
            product.style.display = 'block';
        }
    });
}
// Fungsi untuk mencari produk berdasarkan nama
function searchNovel() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        
        if (productName.includes(query)) {
            product.style.display = 'block'; // Menampilkan produk yang cocok dengan query
        } else {
            product.style.display = 'none'; // Menyembunyikan produk yang tidak cocok dengan query
        }
    });
}
