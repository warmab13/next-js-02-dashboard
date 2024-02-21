import { Metadata } from 'next';
import { SimpleWidget } from '../../../components/SimpleWidget';

export const metadata:Metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title'
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="text-xl">General info</span>
      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}