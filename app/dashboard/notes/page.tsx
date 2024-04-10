import Pagination from '@/app/ui/appointments/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/appointments/table';
import { CreateAppointment } from '@/app/ui/appointments/buttons';
import { GeistSans } from 'geist/font/sans';
import { AppointmentsTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
// import { fetchApptsPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "SOAP Notes",
}
 
export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  
  // const totalPages = await fetchApptsPages(query);
  const totalPages = 3

  
  

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between mb-8">
        <h1 className={`${GeistSans.className} text-2xl`}>SOAP Notes</h1>
      </div>
      <Search placeholder="Search notes..." />
      <Suspense key={query + currentPage} fallback={<AppointmentsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}