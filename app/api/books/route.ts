import { NextResponse } from "next/server";

export async function GET() {
  const mockBooks = [
    {
      id: 1,
      title: "Có gì đặc biệt trong các quận Đào giáo?",
      image: "/images/business.webp",
    },
    {
      id: 2,
      title: "Lưu giữ những ký ức đẹp về Diogo Jota",
      image: "/images/sport.webp",
    },
    {
      id: 3,
      title: "10 cuộc 'đại địa chấn' kinh tế",
      image: "/images/finance.webp",
    },
    {
      id: 4,
      title: "Tình cha con cảm động giữa địa ngục trần gian",
      image: "/images/news.jpg",
    },
    {
      id: 5,
      title: "Giấc ngủ là 'phương pháp làm đẹp' tốt nhất với phụ nữ?",
      image: "/images/healthy.webp",
    },
    {
      id: 6,
      title: "3 vũ khí tình thần giúp chủ doanh nghiệp sống sót và tăng trường",
      image: "/images/news.jpg",
    },
  ];

  return NextResponse.json(mockBooks);
}
