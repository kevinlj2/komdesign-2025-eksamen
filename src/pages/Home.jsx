import Article from "../components/Articles";

export default function Home() {
  return (
    <div className="w-full flex justify-center mt-10 px-4">
      <div className="max-w-6xl w-full">
        <Article />
      </div>
    </div>
  );
}
