import { NextResponse } from "next/server";

export async function GET() {
  const mockMagazines = [
    {
      id: 1,
      title: "Busquets đã đúng về Messi",
      category: "TL;DR",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
    {
      id: 2,
      title: "Hai thế giới của 'nàng tiên cá' hiếm hoi ở Việt Nam",
      category: "LENS",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
    {
      id: 3,
      title: "Tiếc cho Quốc Trường",
      category: "MINI MAGAZINE",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
    {
      id: 4,
      title: "Ai đang rót hàng chục tỷ cho hoa hậu Việt",
      category: "TL;DR",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
    {
      id: 5,
      title: "Cuộc sống sau ánh hào quang của các ngôi sao",
      category: "LENS",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
    {
      id: 6,
      title: "Bí mật đằng sau thành công của startup Việt",
      category: "MINI MAGAZINE",
      image: "/placeholder.svg?height=400&width=300",
      categoryColor: "#ffd700",
    },
  ];

  return NextResponse.json(mockMagazines);
}
