import { NextResponse } from "next/server";

export async function GET() {
  const mockNews = [
    {
      id: 1,
      title: "Tổng Bí thư Tô Lâm điện đàm với Tổng thống Mỹ Donald Trump",
      summary:
        "20h ngày 2/7 (giờ Việt Nam), Tổng Bí thư Tô Lâm đã có cuộc điện đàm với Tổng thống Mỹ Donald Trump về quan hệ Việt Nam - Mỹ, cũng như đàm phán về thuế đối ứng giữa hai nước, theo TTXVN.",
      image: "/images/news.jpg",
      category: "Chính trị",
      publishedAt: "2025-01-03T10:00:00Z",
      featured: true,
    },
    {
      id: 2,
      title: "Diogo Jota từ nạn, cú sốc trăm triệu bảng cho Liverpool",
      summary:
        "Cái chết thương tâm của Diogo Jota không chỉ là mất mát to lớn về mặt con người mà còn gây ra những hệ lụy tài chính đáng kể cho CLB chủ quản Liverpool.",
      image: "/images/sport.webp",
      category: "Thể thao",
      publishedAt: "2025-01-03T09:30:00Z",
      featured: false,
    },
    {
      id: 3,
      title: "Jota và những tài năng ra đi mãi mãi trên đường phố",
      summary:
        "Diogo Jota không phải cầu thủ nổi tiếng duy nhất qua đời vì tai nạn xe hơi. Trước chân sút của Liverpool, bóng đá thế giới từng chứng kiến nhiều cái chết thương tâm vì tai nạn giao thông",
      image: "/images/news.jpg",
      category: "Thể thao",
      publishedAt: "2025-01-03T09:00:00Z",
      featured: false,
    },
    {
      id: 4,
      title:
        "Giá điện thoại, tivi tại Thế Giới Di Động đồng loạt giảm sau 1 đêm",
      summary:
        "Từ ngày 1/7, hơn 3.000 cửa hàng Thegioididong.com và Điện Máy Xanh đã đồng loạt giảm giá điện thoại, tivi, tủ lạnh... theo chính sách giảm thuế VAT từ 10% xuống 8%.",
      image: "/images/technology.webp",
      category: "Kinh tế",
      publishedAt: "2025-01-03T08:30:00Z",
      featured: false,
    },
    {
      id: 5,
      title: "Toàn cảnh 'campus y tế' đầu tiên của Việt Nam",
      summary:
        "Khám phá khuôn viên y tế hiện đại đầu tiên tại Việt Nam với nhiều tiện ích.",
      image: "/images/health.jpg",
      category: "Y tế",
      publishedAt: "2025-01-03T08:00:00Z",
      featured: false,
    },
    {
      id: 6,
      title: "GDP quý II tăng 7,96%",
      summary:
        "Tính chung 6 tháng đầu năm, GDP tăng 7,52% và là mức tăng nửa đầu năm cao nhất trong suốt giai đoạn 2011-2025.",
      image: "/images/news.jpg",
      category: "Kinh tế",
      publishedAt: "2025-01-03T07:30:00Z",
      featured: false,
    },
    {
      id: 7,
      title: "Loạt xe dễ mua trong tầm giá 400 triệu đồng",
      summary:
        "Ở tầm giá 400 triệu đồng, khách Việt đang có thể lựa chọn xe cỡ A, ôtô điện hoặc thậm chí cả sedan cỡ B hoặc cỡ C.",
      image: "/images/news.jpg",
      category: "Y tế",
      publishedAt: "2025-01-03T08:00:00Z",
      featured: false,
    },
    {
      id: 8,
      title:
        "Trào lưu gặp người thân đã mất bằng Google Maps là 'con dao hai lưỡi'",
      summary:
        "Nhiều người sử dụng Google Maps để tìm kiếm những hình ảnh cuối cùng của người thân đã qua đời.",
      image: "/images/news.jpg",
      category: "Công nghệ",
      publishedAt: "2025-01-03T07:00:00Z",
      featured: false,
    },
  ];

  return NextResponse.json(mockNews);
}
