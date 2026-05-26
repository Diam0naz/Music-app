"use client";

import React, { useState } from "react";
import { lastfmApi } from "../lib/lastfmApi";
import { useQuery } from "@tanstack/react-query";

function ArtistsTopTracks() {
  const { getArtistTopTracks } = lastfmApi;

  const [submitted, setSubmitted] = useState("");

  const {} = useQuery({
    queryKey: ["top-Tracks", submitted],
    queryFn: () => getArtistTopTracks(),
    enabled: !!submitted
  });

  return <></>;
}

export default ArtistsTopTracks;
