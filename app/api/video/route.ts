import { NextResponse } from "next/server"

export async function GET() {
  const mockVideos = {
    featured: {
      id: 1,
      title: "Toàn cảnh cuộc điện đàm giữa Tổng Bí thư Tô Lâm và Tổng thống Mỹ",
      thumbnail: "/images/city.webp",
      category: "CHÍNH TRỊ",
      videoUrl: "https://video.znews.vn/f7d5517f887a27af038d5b890208ef0b/6869625b/2025_06_27/quynhdanh/0627.mp4",
    },
    related: [
      {
        id: 2,
        title: "Toàn cảnh cuộc điện đàm giữa Tổng Bí thư Tô Lâm và Tổng thống Mỹ",
        thumbnail: "/images/city.webp",
        category: "XÃ HỘI",
        videoUrl: "https://photo.znews.vn/Uploaded/uqvpvpiv/2025_06_30/TichgopcanamidulichCatBakieu_doNgHuong17taovoibannhacLanBanonxDuyenDoTroiPhanDoTacuaChiecvoicuaVoiBanon_ezgif.com_resize.gif"
      },
      {
        id: 3,
        title: "CSGT dùng xe đặc chủng đưa bé gái có giật trên cao tốc đến bệnh viện",
        thumbnail: "/images/health.jpg",
        category: "XÃ HỘI",
        videoUrl: "https://photo.znews.vn/Uploaded/uqvpvpiv/2025_06_30/TichgopcanamidulichCatBakieu_doNgHuong17taovoibannhacLanBanonxDuyenDoTroiPhanDoTacuaChiecvoicuaVoiBanon_ezgif.com_resize.gif"
      },
      {
        id: 4,
        title: "Tích cóp cả năm đi du lịch Cát Bà thì gặp mưa lớn",
        thumbnail: "/images/travel.webp",
        category: "ĐỊA ĐIỂM DU LỊCH",
        videoUrl: ""
      },
      {
        id: 5,
        title: "Thi công khẩn trương đường Vành đai 3 TP.HCM đoạn qua Bình Dương",
        thumbnail: "/images/business.webp",
        category: "KINH DOANH",
        videoUrl: ""
      },
      {
        id: 6,
        title: "Gấu xuất hiện trên đường phố khiến người dân hoảng sợ",
        thumbnail: "/images/city.webp",
        category: "XÃ HỘI",
        videoUrl: ""
      },
    ],
  }

  return NextResponse.json(mockVideos)
}
