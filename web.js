fetch('fetch.php')
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('kegiatan-container');
        data.forEach(kegiatan => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h3>${kegiatan.judul}</h3>
                <p>${kegiatan.deskripsi}</p>
                <p>Tanggal: ${kegiatan.tanggal}</p>
                <img src="uploads/${kegiatan.gambar}" alt="${kegiatan.judul}" style="width:100%;">
            `;
            container.appendChild(div);
        });
    });