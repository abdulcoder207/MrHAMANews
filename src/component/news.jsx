import bootkitImage from "../assets/bootkitty-img-1.webp"
import eburyImage from "../assets/ebury-malware.jpeg"

import "./news.css"

function News() {
    return (
        <div>
            <div className="container-news">
                <h2>Berita Keamanan Siber</h2>

                <div className="card-news">
                    <img src={bootkitImage} alt="Bootkit Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Virus Bootkit Baru Menginfeksi Linux</h3>
                        <p>
                            Peneliti keamanan menemukan Bootkit berbahaya yang mampu menginfeksi sistem Linux,
                            bahkan sebelum sistem operasi berjalan. Virus ini menyusup ke bootloader dan bertahan meskipun sistem diinstal ulang.
                        </p>
                        <p>
                            Serangan ini sulit dideteksi karena berjalan di level firmware. Pakar menyarankan
                            untuk memperbarui firmware dan menggunakan Secure Boot untuk mencegah infeksi.
                        </p>
                    </div>
                </div>

                <div className="card-news">
                    <img src={eburyImage} alt="Malware Linux" className="image-news" />
                    <div className="content-news">
                        <h3>Malware Ebury: Trojan SSH yang Mengancam Server Linux</h3>
                        <p>
                            Ebury adalah malware trojan SSH yang menargetkan server Linux dan digunakan untuk mencuri
                            kredensial SSH serta mengontrol jaringan botnet. Malware ini menginfeksi OpenSSH, memungkinkan
                            peretas mencuri username dan password saat admin server login.
                        </p>
                        <p>
                            Malware ini pertama kali ditemukan pada tahun 2009, tetapi masih aktif hingga sekarang karena
                            banyak admin yang tidak memperbarui sistemnya. Ebury memungkinkan penyerang untuk
                            memonitor lalu lintas server, mengontrol jaringan botnet, dan menyusup ke sistem tanpa terdeteksi.
                        </p>
                        <p>
                            Cara mencegah Ebury:
                            - Perbarui sistem Linux dan OpenSSH secara rutin.
                            - Gunakan autentikasi berbasis kunci SSH, bukan password.
                            - Audit server secara berkala untuk mendeteksi aktivitas mencurigakan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News