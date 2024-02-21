import { Metadata } from 'next';
import { SimpleWidget } from '../../../components/dashboard/SimpleWidget';
import { WidgetsGrid } from '../../../components/dashboard/WidgetsGrid';

export const metadata:Metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title'
}

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="text-3xl">Dashboard</h1>
      <span className="text-xl">General info</span>
      <WidgetsGrid />
    </div>
  );
}