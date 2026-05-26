"use client";

import React from "react";
import { useParams } from "next/navigation";
import { lastfmApi } from "@/app/lib/lastfmApi";
import { useQuery } from "@tanstack/react-query";
import Layout from "@/app/components/Layout";

function Details() {
  const { artist } = useParams();
  const { getArtistInfo } = lastfmApi;

  const decodedArtist = artist ? decodeURIComponent(artist) : "";

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["info", decodedArtist],
    queryFn: () => getArtistInfo(decodedArtist),
    enabled: !!decodedArtist,
  });

  const getBestImage = (images) => {
    const sizes = ["extralarge", "large", "medium", "small"];
    for (const size of sizes) {
      const img = images?.find((img) => img.size === size);
      if (img && img["#text"]) return img["#text"];
    }
    return null;
  };

  // Strip the "Read more on Last.fm" anchor from bio
  const cleanBio = (summary) =>
    summary?.replace(/<a[^>]*>.*?<\/a>/gi, "").trim();

  return (
    <Layout>
      <main className="py-16 px-4 w-11/12 mx-auto">
        {isLoading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        {isError && (
          <p className="text-center text-red-400 py-10">{error.message}</p>
        )}
        {data && (
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Artist image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              {getBestImage(data.image) ? (
                <img
                  src={getBestImage(data.image)}
                  alt={data.name}
                  className="w-52 h-52 rounded-2xl object-cover border border-white/10 shadow-lg shadow-orange-500/10"
                />
              ) : (
                <div className="w-52 h-52 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/20 text-5xl">
                  🎵
                </div>
              )}
            </div>

            {/* Artist info */}
            <div className="flex flex-col gap-4 flex-1">
              <h1 className="text-4xl font-bold text-white">{data.name}</h1>

              {data.stats && (
                <div className="flex gap-6 text-sm">
                  <span className="text-amber-300">
                    <span className="text-white/50 mr-1">Listeners:</span>
                    {parseInt(data.stats.listeners).toLocaleString()}
                  </span>
                  <span className="text-amber-300">
                    <span className="text-white/50 mr-1">Plays:</span>
                    {parseInt(data.stats.playcount).toLocaleString()}
                  </span>
                </div>
              )}

              {data.tags?.tag?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {data.tags.tag.map((tag) => (
                    <span
                      key={tag.name}
                      className="px-3 py-1 rounded-full text-xs border border-amber-500/30 text-amber-400/80 bg-amber-500/5">
                      {tag.name}
                    </span>
                  ))}
                </div>
              )}

              {data.bio?.summary && (
                <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
                  {cleanBio(data.bio.summary)}
                </p>
              )}
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Details;
