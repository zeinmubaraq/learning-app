type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <section className="mx-auto mt-16 max-w-5xl pt-10">{children}</section>;
}
