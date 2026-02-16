import { createFileRoute, redirect } from '@tanstack/react-router';
import { useAtom } from 'jotai';
import { authAtom } from '@/atoms/authAtom';

export const Route = createFileRoute('/dashboard')({
  beforeLoad: () => {
    const auth = JSON.parse(localStorage.getItem('auth') || 'null');

    if (!auth || !auth.token) {
      throw redirect({
        to: '/login',
      });
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const [auth] = useAtom(authAtom);

  return (
    <div className = "p-8">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      {auth.username ? (
        <p className="mt-4">Welcome back, <span className="font-semibold">{auth.username}</span>!</p>
      ) : (<p className="mt-4 text-red-500">You are not logged in.</p>)}

      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-sm font-mono text-gray-500 uppercase">Your Session Token:</h2>
          <p className="break-all font-mono text-xs">{auth.token || "No token found"}</p>
        </div>
    </div>
  )
}
