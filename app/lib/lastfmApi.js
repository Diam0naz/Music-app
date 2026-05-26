const API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY;
const BASE_URL = "http://ws.audioscrobbler.com/2.0/";

export const lastfmApi = {
  // Search artists
  searchArtists: async (query) => {
    const response = await fetch(
      `${BASE_URL}?method=artist.search&artist=${encodeURIComponent(
        query
      )}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.results?.artistmatches?.artist || [];
  },

  // Get artist details
  getArtistInfo: async (artistName) => {
    const response = await fetch(
      `${BASE_URL}?method=artist.getinfo&artist=${encodeURIComponent(
        artistName
      )}&api_key=${API_KEY}&format=json`
    );
    const data = await response.json();
    return data.artist;
  },

  // Get top tracks
  getArtistTopTracks: async (artistName, limit = 10) => {
    const response = await fetch(
      `${BASE_URL}?method=artist.gettoptracks&artist=${encodeURIComponent(
        artistName
      )}&api_key=${API_KEY}&format=json&limit=${limit}`
    );
    const data = await response.json();
    return data.toptracks?.track || [];
  },

  // Get similar artists
  getSimilarArtists: async (artistName, limit = 6) => {
    const response = await fetch(
      `${BASE_URL}?method=artist.getsimilar&artist=${encodeURIComponent(
        artistName
      )}&api_key=${API_KEY}&format=json&limit=${limit}`
    );
    const data = await response.json();
    return data.similarartists?.artist || [];
  },
};
