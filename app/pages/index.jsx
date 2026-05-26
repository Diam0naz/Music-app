import React from "react";
import SearchBar from "../components/SearchBar";
import Layout from "../components/Layout";

function Index() {
  return (
    <Layout>
      <SearchBar />
      <div className="flex flex-col items-center justify-center text-center py-32 px-4 gap-4">
        <p className="text-white/40 text-lg tracking-widest uppercase">Explore the world of music</p>
        <h2 className="text-7xl md:text-8xl font-bold leading-tight">
          Discover Your Next{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-amber-300 via-yellow-500 to-orange-500">
            Favorite Song
          </span>
        </h2>
        <p className="text-white/40 text-xl max-w-xl mt-2">
          Search any artist and explore their music, top tracks, and more.
        </p>
      </div>
    </Layout>
  );
}

export default Index;
