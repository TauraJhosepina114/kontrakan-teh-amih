'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Bath,
  BedDouble,
  Check,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  Droplets,
  Home,
  MapPin,
  MessageCircle,
  Phone,
  Play,
  ShieldCheck,
  Sparkles,
  Utensils,
  WifiOff,
  X,
  Zap,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/6287784220678?text=Assalamualaikum%20Teh%20Amih%20apa%20masih%20ada%20yang%20kosong%3F'
const mapsUrl = 'https://maps.app.goo.gl/cuoK3fFerhnVKQ649'
const accountNumber = '4348 0102 0420 533'

const gallery = [
  { label: 'Bangunan kontrakan', detail: 'Foto bangunan utama', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/main%20entrance-yMk3wzddaC2nYt4PC6ON4YMdahRj6z.jpeg' },
  { label: 'Ruang kamar', detail: 'Interior unit', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kamar-IjidnLR1x8xMpSaO6s48KwfouOrBP2.jpeg' },
  { label: 'Kamar mandi', detail: 'Kamar mandi unit', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wc-IixkiMgGszIZu9Y2rfzAxLJTKJ7zvV.jpeg' },
  { label: 'Area dapur', detail: 'Tempat dapur dan cuci piring', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dapur-Ez3TduifqDvHGjs6vdIhyPOsahOa1x.jpeg' },
  { label: 'Pintu masuk', detail: 'Tampilan pintu masuk', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tampilan%20pintu%20masuk-Ea3zbT21PDJnclI5YLanGgYyteMfL2.jpeg' },
  { label: 'Area awal masuk', detail: 'Tampilan awal masuk unit', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tampilan%20awal%20masuk-HgUld73OQUnDKIe5L7rD5TfCZ4HApD.jpeg' },
  { label: 'Ruang tamu', detail: 'Interior ruang tamu', src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ruang%20tamu-WUYxBbrH6uib4warQtLBxPcgBVpLlO.jpeg' },
]

function SectionHeading({ number, eyebrow, title }: { number?: string; eyebrow?: string; title: string }) {
  return (
    <div className="section-heading">
      <div className="heading-kicker"><span>{number}</span>{eyebrow}</div>
      <h2>{title}</h2>
    </div>
  )
}

function PhotoTile({ item, onOpen, large = false }: { item: (typeof gallery)[number]; onOpen: () => void; large?: boolean }) {
  return (
    <button className={`photo-tile ${large ? 'photo-tile-large' : ''}`} onClick={onOpen} aria-label={`Buka foto ${item.label}`}>
      <div className="photo-placeholder"><img src={item.src} alt={`${item.label} Kontrakan Teh Amih`} loading="lazy" /><span className="photo-overlay-label">Foto {item.label.toLowerCase()}</span></div>
      <span className="photo-caption">{item.detail}<ArrowUpRight size={15} /></span>
    </button>
  )
}

export default function Page() {
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const copyAccount = async () => {
    await navigator.clipboard?.writeText(accountNumber.replaceAll(' ', ''))
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  const openPhoto = (index: number) => setLightbox(index)
  const movePhoto = (direction: number) => {
    if (lightbox === null) return
    setLightbox((lightbox + direction + gallery.length) % gallery.length)
  }

  return (
    <main className="site-shell">
      <section className="hero" id="top">
        <div className="hero-copy"><h1>Kontrakan<br /><em>Teh Amih</em></h1><p className="hero-description">Kontrakan berada di dalam gang yang cukup sunyi dari keramaian, sekitar 750 meter dari jalan besar dan sebelah masjid.</p><div className="hero-price"><strong>Rp750.000</strong><span>/ bulan</span></div><div className="hero-facts"><span><b>5 × 5</b> meter</span><span><b>25 m²</b> / unit</span><span><b>8</b> unit</span></div><a className="primary-button" href={whatsappUrl} target="_blank" rel="noreferrer">Tanya ketersediaan <MessageCircle size={18} /></a></div>
      </section>

      <section className="section" id="detail"><SectionHeading number="01" eyebrow="Tentang tempat ini" title="Detail Kontrakan" /><div className="detail-grid"><PhotoTile item={gallery[0]} onOpen={() => openPhoto(0)} large /><div className="info-list"><div><span>Nama</span><strong>Kontrakan Teh Amih</strong></div><div><span>Jumlah</span><strong>8 unit seragam</strong></div><div><span>Ukuran</span><strong>5 × 5 meter / 25 m²</strong></div></div></div><p className="body-copy">Kontrakan Teh Amih berada di dalam gang yang cukup sunyi dari keramaian. Lokasi kontrakan sekitar 750 meter dari jalan besar dan sebelah masjid.</p><div className="address-box"><MapPin size={20} /><p>Provinsi Jawa Barat<br />Kabupaten Purwakarta<br />Kecamatan Babakancikao · Desa Cilangkap<br />Kampung Sukamulya · RT/RW 007/006<br />Jawa Barat 41151</p></div><div className="map-embed"><iframe src="https://www.google.com/maps?q=Kontrakan%20Teh%20Amih%20Purwakarta&output=embed" title="Peta lokasi Kontrakan Teh Amih" loading="lazy" allowFullScreen /></div></section>

      <section className="section section-tinted" id="unit"><SectionHeading number="02" eyebrow="Satu standar untuk semua" title="Spesifikasi Setiap Unit" /><p className="intro-copy">Setiap unit memiliki spesifikasi yang sama dan disewakan dalam kondisi kosong.</p><div className="spec-pills"><span><BedDouble /> 1 kamar</span><span><Bath /> 1 kamar mandi</span><span><Utensils /> Area dapur</span><span><Home /> Ruang tamu</span></div><div className="video-frame unit-video"><iframe src="https://www.youtube.com/embed/7UD9jrDvzfU?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=7UD9jrDvzfU" title="Video Kontrakan Teh Amih" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div><div className="unit-gallery">{gallery.slice(1).map((item, index) => <PhotoTile key={item.label} item={item} onOpen={() => openPhoto(index + 1)} />)}</div><div className="note-card"><Sparkles size={20} /><div><strong>Ruang tamu dapat digunakan untuk menyimpan motor.</strong><p>Unit tidak menyediakan kasur, tempat tidur, lemari, kompor, gas, wastafel, maupun furnitur lainnya.</p></div></div></section>

      <section className="section" id="fasilitas"><SectionHeading number="03" eyebrow="Yang perlu diketahui" title="Fasilitas & Utilitas" /><div className="facility-grid"><article><Droplets /><h3>Air sumur</h3><p>Gratis. Air dipompa menuju toren dan listrik pompa ditanggung pemilik.</p></article><article><Zap /><h3>Listrik 900 VA</h3><p>Token prabayar mandiri, sepenuhnya dibayar oleh penyewa.</p></article><article><WifiOff /><h3>Wi-Fi</h3><p>Wi-Fi belum tersedia.</p></article><article><Home /><h3>Fasilitas</h3><p>Shower, ventilasi, tempat menjemur pakaian, gantungan baju di toilet, pembuangan sampah, dan lampu terpasang di atas.</p></article><article><Utensils /><h3>Dapur</h3><p>Area dapur dan tempat cuci piring dengan ventilasi. Tidak menyediakan kompor, gas, atau wastafel.</p></article><article><Bath /><h3>Kamar mandi</h3><p>WC jongkok, shower, dan ventilasi.</p></article></div><div className="rules"><div className="rules-title"><ShieldCheck size={22} /><h3>Ketentuan Penghuni</h3></div><p>Penghuni bebas selama tidak mengganggu kenyamanan penghuni lain dan tidak merusak fasilitas.</p><ul><li>Hewan peliharaan diperbolehkan selama tidak mengganggu penghuni lain atau merusak fasilitas.</li><li>Merokok dan menerima tamu diperbolehkan selama tidak mengganggu kenyamanan penghuni lain.</li><li>Motor dapat disimpan di ruang tamu. Kendaraan tidak boleh merusak fasilitas atau lantai, dan tidak boleh mengganggu akses atau penghuni lain.</li></ul></div></section>

      <section className="section" id="pembayaran"><SectionHeading number="05" eyebrow="Sederhana dan jelas" title="Pembayaran" /><div className="payment-summary"><div><span>Sewa per bulan</span><strong>Rp750.000</strong></div></div><div className="bank-card"><div className="bank-logo">BRI</div><span>No. Rekening</span><strong>{accountNumber}</strong><span>Atas Nama</span><b>TAURA JHOSEPINA ALBAR</b><button className="outline-button" onClick={copyAccount}>{copied ? <Check size={17} /> : <Clipboard size={17} />}{copied ? 'Nomor tersalin' : 'Salin nomor rekening'}</button></div><p className="body-copy compact">Metode pembayaran: cash atau transfer BRI.</p><p className="muted-copy">Setelah melakukan pembayaran melalui transfer, kirim bukti pembayaran melalui WhatsApp kepada Teh Amih.</p></section>

      <section className="contact-section" id="kontak"><div className="contact-orbit"><MessageCircle size={26} /></div><p className="overline">Punya pertanyaan?</p><h2>Hubungi<br /><em>Teh Amih</em></h2><p>Untuk mengetahui ketersediaan unit, pembayaran, atau menjadwalkan survei, silakan hubungi Teh Amih melalui WhatsApp.</p><div className="contact-details"><span><Phone size={17} /> +62 877-8422-0678</span><span><Sparkles size={17} /> Survei 09.00–19.00 WIB</span></div><p className="contact-note">Harap menghubungi terlebih dahulu sebelum datang untuk survei.</p><a className="contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">Hubungi via WhatsApp <ArrowUpRight size={19} /></a></section>

      <a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Hubungi Teh Amih melalui WhatsApp"><MessageCircle size={23} /></a>

      {lightbox !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Foto ${gallery[lightbox].label}`} onClick={() => setLightbox(null)}><button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup foto"><X /></button><button className="lightbox-arrow left" onClick={(event) => { event.stopPropagation(); movePhoto(-1) }} aria-label="Foto sebelumnya"><ChevronLeft /></button><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><div className="photo-placeholder"><img src={gallery[lightbox].src} alt={`${gallery[lightbox].label} Kontrakan Teh Amih`} /><span className="photo-overlay-label">Foto {gallery[lightbox].label.toLowerCase()}</span></div><p>{gallery[lightbox].detail}</p></div><button className="lightbox-arrow right" onClick={(event) => { event.stopPropagation(); movePhoto(1) }} aria-label="Foto berikutnya"><ChevronRight /></button></div>}
    </main>
  )
}
