"use client";

import React, { useState } from "react";
import { lastfmApi } from "../lib/lastfmApi";
import { useQuery } from "@tanstack/react-query";
import { Search, SearchCheckIcon } from "lucide-react";

function ArtistCard() {
  const { getArtistInfo } = lastfmApi;

  const [search, setSearch] = useState("");
  const [submitted, setSubmitted] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(search);
  };

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["names", submitted],
    queryFn: () => getArtistInfo(submitted),
    enabled: !!submitted,
  });

  const getBestImage = (images) => {
    const sizes = ["extralarge", "large", "medium", "small"];
    for (const size of sizes) {
      const img = images?.find((img) => img.size === size);
      if (img && img["#text"]) return img["#text"];
    }
    return "/placeholder-artist.jpg";
  };

  console.log(search);
  if (data) {
    console.log(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-3 justify-center mt-20">
        <fieldset>
          <input
            type="text"
            name="artist"
            id="artist"
            onChange={handleSearch}
            value={search}
            className="h-12 w-96 outline-none focus:bg-gradient-to-t rounded-full bg-gradient-to-t from-orange-600 to-amber-400 backdrop-blur-xl px-5 text-lg text-orange-50 transition-discrete duration-200 ease-linear"
          />
        </fieldset>
        <button
          type="submit"
          className="flex justify-center space-x-3.5 items-center hover:text-orange-500 active:text-amber-400 transition-discrete duration-200 ease-linear">
          <Search />
        </button>
      </form>

      <main>
        {isLoading && <p>Loading...</p>}
        {isError && <p className="text-red-500">{error.message}</p>}
        {data && (
          <div className="text-center mt-4">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <img
              src={getBestImage(data.image)}
              alt={data.name}
              className="mx-auto mt-2 rounded-full w-48 h-48 object-cover"
            />
            <p className="mt-2 text-gray-600">{data.bio?.summary}</p>
          </div>
        )}
      </main>
    </>
  );
}

export default ArtistCard;
