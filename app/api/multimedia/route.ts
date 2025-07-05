import { NextResponse } from "next/server";

export async function GET() {
  const mockMultimedia = {
    featured: {
      id: 1,
      title:
        "Trên tay Pura 80 Ultra: smartphone Huawei đắt hơn iPhone 16 Pro Max",
      summary:
        "Mặt tiền ở thị trường toàn cầu, Huawei vẫn là thế lực ở Trung Quốc. Không có Android hay chip đời mới, hãng này bán chiếc Pura 80 Ultra đắt hơn cả iPhone 16 Pro Max.",
      image: "/images/mobile.webp",
    },
    grid: [
      {
        id: 2,
        title: "Nam ca sĩ đánh bạc hơn 4,3 triệu USD tại Khách sạn Pullman",
        image: "/images/city.webp",
      },
      {
        id: 3,
        title: "Thí sinh bật xa, hát múa, giành suất vào đại học",
        image: "/images/girl.webp",
      },
      {
        id: 4,
        title: "Khoảnh khắc xúc động ở FIFA Club World Cup",
        image: "/images/sport.webp",
      },
      {
        id: 5,
        title: "Thí sinh bất xa, hát mưa, giành suất vào đại học",
        image: "/images/education.webp",
      },
    ],
  }

  return NextResponse.json(mockMultimedia)
}