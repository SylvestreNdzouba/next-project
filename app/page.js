import GithubList from "./components/githubList";
import SearchForm from "./components/searchForm";
import { Suspense } from "react";
import ProgressBar from "./components/progressBar";

import "nes.css/css/nes.min.css";

const Home = async ({ searchParams }) => {
  const { list } = await searchParams;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center relative">
      <h1 className="text-7xl nes-text mb-6">Github Explorer</h1>
      <SearchForm />
      <Suspense key={list} fallback={<ProgressBar />}>
        <GithubList searchParams={searchParams} />
      </Suspense>

      <section
        className="message -right fixed bottom-4 right-4 flex items-end space-x-2 opacity-0 animate-fadeIn"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="nes-balloon from-right is-dark max-w-xs">
          <p>Welcome to the Github Explorer! Have fun !</p>
        </div>
        <i className="nes-bcrikko"></i>
      </section>
    </div>
  );
};

export default Home;
