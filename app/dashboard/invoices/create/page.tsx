import Form from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';


interface Props {
  searchParams?: {
    query?: string;
    page?: string;
  }
}
 
export default async function Page({searchParams}: Props) {
  const customers = await fetchCustomers();
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
      <p>{"searchParams"} {JSON.stringify(searchParams)}</p>
    </main>
  );
}