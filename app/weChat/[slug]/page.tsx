export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full text-center">
      The developer's weChat name or id is: <br />
      <div className="font-bold text-2xl">{params.slug}</div>
    </div>
  );
}
