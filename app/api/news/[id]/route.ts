import { NextResponse } from "next/server";

export async function GET() {
  const mockNewsDetail =
  {
    id: 1,
    title: "Cơ hội lớn để đầu tư metro ở TP.HCM - 355 km không còn là 'giấc mơ'?",
    summary:
      "TP.HCM đang tích cực chuẩn bị cho việc đầu tư hàng loạt tuyến metro mới, hướng đến mục tiêu hoàn thành 7 tuyến metro với 355 km vào năm 2035.",
    image: "/images/business.webp",
    category: "Xã hội",
    publishedAt: "2025-07-03T10:00:00Z",
    featured: true,
    details: [
      "Ban Quản lý Đường sắt đô thị TP.HCM (MAUR) cho biết hiện nay 100% mặt bằng của dự án metro số 2 đã được giải phóng. Trong năm 2025, MAUR đang gấp rút thực hiện di dời toàn bộ hệ thống hạ tầng kỹ thuật tại 12 vị trí quan trọng, bao gồm các công trình điện lực, cấp thoát nước, chiếu sáng, viễn thông, biển báo và cây xanh… để bàn giao mặt bằng sạch phục vụ thi công.",
      "Về nguồn vốn, ban đầu dự án metro số 2 sử dụng vốn vay ODA từ các tổ chức tài chính quốc tế. Tuy nhiên, để đẩy nhanh tiến độ và chủ động hơn trong triển khai, Thành ủy TP.HCM đã chấp thuận chủ trương chuyển hình thức đầu tư sang sử dụng vốn đầu tư công. Đồng thời, UBND TP đã báo cáo Thủ tướng Chính phủ về việc điều chỉnh cơ chế đầu tư, phối hợp với Văn phòng Chính phủ, Bộ Tài chính và các bộ ngành liên quan để hoàn tất thủ tục chuyển đổi.",
      "Thành phố cũng đang áp dụng các cơ chế đặc thù được cho phép theo Nghị quyết 188 của Quốc hội để rút ngắn quy trình đầu tư, giúp dự án có thể “về đích” đúng tiến độ.",
      "MAUR đang đặt mục tiêu tuyển chọn các tư vấn cấp bách của dự án trong đầu quý III/2025; tư vấn “Lập báo cáo nghiên cứu khả thi điều chỉnh, thiết kế kỹ thuật tổng thể (FEED) và hồ sơ đấu thầu”; tư vấn “Thẩm tra báo cáo nghiên cứu khả thi điều chỉnh và thiết kế FEED”; tư vấn “Giám sát công tác khảo sát xây dựng”."
    ]
  }

  return NextResponse.json(mockNewsDetail);
}
