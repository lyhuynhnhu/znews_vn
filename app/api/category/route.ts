import { NextResponse } from "next/server"

export async function GET() {
  const mockCategoryNews = {
    "CÔNG NGHỆ": [
      {
        id: 1,
        title: "Khi nào iPhone gập ra mắt?",
        image: "/images/technology.webp",
        featured: true,
      },
      {
        id: 2,
        title: "Cả chục triệu 'máy hít bụi' kiếm mới được bán ra mỗi năm",
        image: "/images/technology.webp",
        featured: false,
      },
      {
        id: 3,
        title: "Mã vùng điện thoại có định thay đổi thế nào sau sáp nhập tỉnh, thành?",
        image: "/images/technology.webp",
        featured: false,
      },
    ],
    "SỨC KHỎE": [
      {
        id: 4,
        title: "Trẻ em sốt do mắc bệnh gì?",
        image: "/images/health.jpg",
        featured: true,
      },
      {
        id: 5,
        title: "Đây là những dấu hiệu mất bản dạng lão hóa",
        image: "/images/health.jpg",
        featured: false,
      },
      {
        id: 6,
        title: "Thai phụ mang tự nhiên 4 thai, tỷ lệ chỉ 1/800.000",
        image: "/images/health.jpg",
        featured: false,
      },
    ],
    "ĐỜI SỐNG": [
      {
        id: 7,
        title: "Matcha latte ở TP.HCM đồng loạt tăng giá",
        image: "/images/news.jpg",
        featured: true,
      },
      {
        id: 8,
        title: "TikToker 54 triệu follow trở lại sau bê bối tấn công tình dục",
        image: "/images/girl.webp",
        featured: false,
      },
      {
        id: 9,
        title: "Đội bóng Trung Quốc bị phạt vì dân bùa trong phòng thay đồ của đối thủ",
        image: "/images/map.webp",
        featured: false,
      },
    ],
    "DU LỊCH": [
      {
        id: 10,
        title: "Triều Tiên tổ chức thi nấu thịt chó",
        image: "/images/travel.webp",
        featured: true,
      },
      {
        id: 11,
        title: "Khách Australia kể 19 lần du lịch Việt Nam",
        image: "/images/travel.webp",
        featured: false,
      },
      {
        id: 12,
        title: "Tôi mặc áo dài du lịch 68 quốc gia",
        image: "/images/travel.webp",
        featured: false,
      },
    ],
    "GIẢI TRÍ": [
      {
        id: 13,
        title: "Hoài Lâm trở lại",
        image: "/images/news.jpg",
        featured: true,
      },
      {
        id: 14,
        title: "A hậu biến Linh Chi gây tranh luận",
        image: "/images/news.jpg",
        featured: false,
      },
      {
        id: 15,
        title: "Tài tử 'Bố tử Siêu đẳng' qua đời",
        image: "/images/news.jpg",
        featured: false,
      },
    ],
    "THỂ THAO": [
      {
        id: 16,
        title: "Thiago Silva lại khiến tất cả ngỡ ngàng",
        image: "/images/sport.webp",
        featured: true,
      },
      {
        id: 17,
        title: "Nico Williams lừa dối Barca?",
        image: "/images/sport.webp",
        featured: false,
      },
      {
        id: 18,
        title: "Mourinho tiết lộ về con người Jota",
        image: "/images/sport.webp",
        featured: false,
      },
    ],
    "XÃ HỘI": [
      {
        id: 19,
        title: "Thời tiết ngày 5/7: Áp thấp nhiệt đới đã mạnh lên thành cơn bão số 2",
        image: "/images/business.webp",
        featured: true,
      },
      {
        id: 20,
        title: "CSGT đúng xe đặc chủng đưa tài xế đột quỵ trên cao tốc đi cấp cứu",
        image: "/images/news.jpg",
        featured: false,
      },
      {
        id: 21,
        title: "Mần nhận mần trình diễn drone, pháo hoa khao mừng tình Bắc Ninh mới",
        image: "/images/news.jpg",
        featured: false,
      },
    ],
    "PHÁP LUẬT": [
      {
        id: 22,
        title: "Bộ Công an điều tra biểu hiện hoạt động mai dâm tại khách sạn 5 sao",
        image: "/images/city.webp",
        featured: true,
      },
      {
        id: 23,
        title: "Lợi dụng sáp nhập, đối tượng xâu dựng chiều trò tình vi để lừa đảo",
        image: "/images/news.jpg",
        featured: false,
      },
      {
        id: 24,
        title: "Phạt tù đối tượng làm giả số đề để lừa chiếm đoạt tiền",
        image: "/images/news.jpg",
        featured: false,
      },
    ],
    "XUẤT BẢN": [
      {
        id: 25,
        title: "Phía sau 'cơn sốt' bản đồ",
        image: "/images/map.webp",
        featured: true,
      },
      {
        id: 26,
        title: "Nguyễn Phan Quế Mai giành giải thưởng văn học tại Pháp",
        image: "/images/news.jpg",
        featured: false,
      },
      {
        id: 27,
        title: "TP.HCM đẩy mạnh chính sách hỗ trợ văn hóa - thể thao sau mở rộng",
        image: "/images/business.webp",
        featured: false,
      },
    ],
    "THẾ GIỚI SÁCH": [
      {
        id: 28,
        title: "Có gì đặc biệt trong các quận Đào giáo?",
        image: "/images/news.jpg",
        featured: true,
      },
      {
        id: 29,
        title: "Chân dung đen tối những website xui giúc tự tử",
        image: "/images/news.jpg",
        featured: false,
      },
      {
        id: 30,
        title: "Cao nhân chỉ đây, quý nhân đúng đó, tiểu nhân giảm sát",
        image: "/images/news.jpg",
        featured: false,
      },
    ],
    "GIÁO DỤC": [
      {
        id: 31,
        title: "Hướng dẫn nhập học lớp 10 công lập ở Hà Nội",
        image: "/images/education.webp",
        featured: true,
      },
      {
        id: 32,
        title: "Thủ khoa thi lớp 10 Hà Nội đạt 29,25/30 điểm",
        image: "/images/education.webp",
        featured: false,
      },
      {
        id: 33,
        title: "10 trường có điểm chuẩn top 10 cao nhất Hà Nội, 9 điểm/môn mới đỗ",
        image: "/images/education.webp",
        featured: false,
      },
    ],
    "XE": [
      {
        id: 34,
        title: "Chiếc xe Google bị ăn vạ hành trình về lại cả thế giới",
        image: "/images/travel.webp",
        featured: true,
      },
      {
        id: 35,
        title: "Rò thời gian Xiaomi SU7 đầu xuất khẩu đến",
        image: "/images/technology.webp",
        featured: false,
      },
      {
        id: 36,
        title: "Chỉ tiết Audi Q6 e-tron giá 3,199 tỷ đồng, tăng bình SUV điện hạng sang",
        image: "/images/news.jpg",
        featured: false,
      },
    ],
  }

  return NextResponse.json(mockCategoryNews)
}
