import { NextResponse } from "next/server";

export async function GET() {
  const mockBusinessNews = {
    "KINH DOANH": [
      {
        id: 1,
        title: "Chủ tịch Nguyễn Văn Được muốn TP.HCM có thêm tập đoàn mạnh như Becamex",
        summary:
          "Sau sáp nhập, Chủ tịch TP.HCM Nguyễn Văn Được gợi ý tái cơ cấu doanh nghiệp Nhà nước nhằm hình thành ít nhất một tập đoàn lớn, bên cạnh Becamex IDC, để dẫn dắt thành phố phát triển.",
        image: "/images/city.webp",
        category: "Kinh tế",
        featured: true,
        size: "large",
      },
      {
        id: 2,
        title:
          "Thế Giới Di Động, Hoa Sen, Tân Hiệp Phát lũ lượt 'chuyển' về TP.HCM",
        summary:
          "Nhiều doanh nghiệp lớn quyết định chuyển trụ sở chính về TP.HCM để tận dụng lợi thế kinh tế.",
        image: "/images/technology.webp",
        category: "Doanh nghiệp",
        featured: false,
        size: "medium",
      },
      {
        id: 3,
        title:
          "Tổng thống Trump: Mỹ sẽ giảm đáng kể thuế đối ứng cho hàng Việt Nam",
        summary:
          "Quyết định này được kỳ vọng sẽ thúc đẩy quan hệ thương mại Việt - Mỹ.",
        image: "/images/news.jpg",
        category: "Thương mại",
        featured: false,
        size: "medium",
      },
      {
        id: 5,
        title: "Vụ áp thuế gần 4,5 tỷ cho 300 m2 đất vườn: Sở Tài nguyên báo cáo",
        summary: "",
        image: "/images/city.webp",
        category: "Thuế",
        featured: false,
        size: "small",
      },
      {
        id: 4,
        title: "Tổng Bí thư Tô Lâm điện đàm với Tổng thống Mỹ Donald Trump",
        summary: "",
        image: "/images/news.jpg",
        category: "Chính trị",
        featured: false,
        size: "small",
      },
      {
        id: 6,
        title:
          "Chuyển đổi đất vườn sang đất ở đóng thuế tiền tỷ, Bộ Tài chính lý giải",
        summary: "",
        image: "/images/city.webp",
        category: "Thuế",
        featured: false,
        size: "small",
      },
      {
        id: 7,
        title: "Điều chưa từng thấy với sầu riêng Việt Nam",
        summary: "",
        image: "/images/news.jpg",
        category: "Nông nghiệp",
        featured: false,
        size: "small",
      },
      {
        id: 8,
        title: "Giá xăng giảm mạnh xuống dưới 20.000 đồng/lít",
        summary: "",
        image: "/images/business.webp",
        category: "Năng lượng",
        featured: false,
        size: "small",
      },
    ],
    "LIFESTYLE": [
      {
        id: 9,
        title: "Tay vợt pickleball Việt 17 tuổi giành vé vào bán kết PPA Tour Asia",
        summary:
          "Lê Xuân Đức cùng đồng đội Trung Quốc Yufei Long đánh bại cặp đối ứng viên vô địch đến từ Mỹ Bố, giành vé vào bán kết nội dung đôi nam nữ tại PPA Asia Panas Malaysia Open 2025.",
        image: "/images/sport.webp",
        category: "Thể thao",
        featured: true,
        size: "large",
      },
      {
        id: 10,
        title: "Matcha Nhật tăng giá kỷ lục, trở nên 'quý như vàng'",
        summary: "",
        image: "/images/news.jpg",
        category: "Ẩm thực",
        featured: false,
        size: "medium",
      },
      {
        id: 11,
        title: "'Nàng thơ' của Sơn Tùng M-TP chỉ ra kích một chiếc túi suốt gần 5 năm",
        summary: "",
        image: "/images/girl.webp",
        category: "Thời trang",
        featured: false,
        size: "medium",
      },
      {
        id: 12,
        title: "'Nàng thơ' Hải Tú trước khi bị đào lại ảnh nhạy cảm",
        image: "/images/girl.webp",
        featured: false,
        size: "small",
      },
      {
        id: 13,
        title: "Ferrari thua kiện",
        image: "/images/sport.webp",
        featured: false,
        size: "small",
      },
      {
        id: 14,
        title: "Trịnh Linh Giang vào bán kết đơn nam PPA Tour châu Á",
        image: "/images/sport.jpg",
        featured: false,
        size: "small",

      },
      {
        id: 15,
        title: "Labubu - từ quái vật vô danh thành biểu tượng 'cả triệu tiền'",
        image: "/images/news.jpg",
        featured: false,
        size: "small",

      },
      {
        id: 16,
        title: "Không chỉ Hải Tú chụp ảnh nude nghệ thuật",
        image: "/images/girl.webp",
        featured: false,
        size: "small",

      },
    ],
  };

  return NextResponse.json(mockBusinessNews);
}
