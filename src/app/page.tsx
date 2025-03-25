export default async function Home() {

    const res = await fetch('http://localhost:3000/api/hello');
    const data = await res.json();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Hello World!
        <button className={"border-1 rounded-sm p-1 hover:cursor-pointer active:bg-gray-100"}>Hello!</button>
        <div>
          Site Total Hello : {data.count}
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
