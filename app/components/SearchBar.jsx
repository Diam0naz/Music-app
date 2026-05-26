"use client";

import React, { useState } from "react";
import { lastfmApi } from "../lib/lastfmApi";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function SearchBar() {
  const { searchArtists } = lastfmApi;

  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(search);
    setShow(true);
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", submitted],
    queryFn: () => searchArtists(submitted),
    enabled: !!submitted,
  });

  const getBestImage = (images) => {
    if (!Array.isArray(images)) return null;
    const sizes = ["extralarge", "large", "medium", "small"];
    for (const size of sizes) {
      const img = images.find((img) => img.size === size && img["#text"]?.trim());
      if (img) return img["#text"];
    }
    return null;
  };

  const formatListeners = (number) =>
    parseInt(number || "0").toLocaleString();

  return (
    <div className="mt-10 flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex justify-center gap-2.5">
        <input
          type="text"
          name="query"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Search an artist..."
          className="h-12 w-80 md:w-96 outline-none rounded-full bg-white/10 border border-white/20 focus:border-amber-400 px-5 text-base text-white placeholder:text-white/30 transition-all duration-300"
        />
        <button
          type="submit"
          className="border border-amber-600 rounded-full h-12 w-24 text-amber-400 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-amber-300 hover:text-orange-900 hover:border-transparent transition-all duration-300">
          Go!
        </button>
      </form>

      <div className="mt-6 w-11/12 mx-auto">
        {isLoading && (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {isError && (
          <p className="text-center text-red-400 py-4">{error.message}</p>
        )}

        {data && show && (
          <>
            <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-300 mb-4 px-2">
              Results
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.map((item) => (
                <li key={item.name}>
                  <div className="relative flex flex-col h-72 rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10 group">
                    {/* Background image */}
                    {getBestImage(item.image) ? (
                      <img
                        src={getBestImage(item.image)}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 to-amber-900/20" />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-end h-full p-5 gap-2">
                      <h3 className="text-lg font-semibold text-white leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-sm text-amber-300/70">
                        {formatListeners(item.listeners)} listeners
                      </p>
                      <Link href={`/pages/${encodeURIComponent(item.name)}`}>
                        <button className="mt-1 w-full h-10 rounded-xl bg-gradient-to-tr from-orange-400 to-amber-300 text-orange-900 font-medium text-sm hover:opacity-90 transition-opacity duration-200">
                          Listen Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={() => setShow(false)}
              className="mt-6 w-40 h-10 rounded-xl border border-white/20 text-white/50 hover:border-amber-500 hover:text-amber-400 transition-all duration-300 text-sm">
              Clear Search
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
