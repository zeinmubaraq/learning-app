import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = {
  name: string;
  href: string;
};

export default function NavbarLink({ name, href }: Props) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={
        router.pathname == href
          ? 'text-teal-500 transition'
          : 'text-slate-500 transition hover:text-slate-800'
      }
    >
      {name}
    </Link>
  );
}
