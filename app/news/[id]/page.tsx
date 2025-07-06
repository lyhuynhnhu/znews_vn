import { notFound } from 'next/navigation';
import BASE_URL from '@/constants/host';
import DetailNews from '@/components/news/DetailNews';

async function getNewsById(id: string) {
  const res = await fetch(`${BASE_URL}/api/news/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    return null;
  }
  return res.json();
}

const NewsDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const detailData = await getNewsById(id);

  if (!detailData) {
    notFound();
  }

  return <DetailNews news={detailData} />;
};

export default NewsDetailPage;
