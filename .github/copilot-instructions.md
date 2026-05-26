# AI Agent Instructions for Music App

## Project Overview
This is a Next.js application that provides music artist information using the Last.fm API. The app allows users to search for artists, view their details, top tracks, and similar artists.

## Key Architecture Components

### API Integration
- Last.fm API integration is centralized in `app/lib/lastfmApi.js`
- All API methods are exported from a single `lastfmApi` object
- API key is accessed via environment variable `NEXT_PUBLIC_LASTFM_API_KEY`
- Example API endpoint: `http://ws.audioscrobbler.com/2.0/`

### Component Structure
- Main layout: `app/components/Layout.jsx`
- Artist-related components:
  - `ArtistCard.jsx`: Card display for artist information
  - `ArtistsTopTracks.jsx`: Displays artist's top tracks
  - `TrackList.jsx`: Reusable track listing component
- Navigation components in `Nav.jsx` and search functionality in `SearchBar.jsx`

### Routing
- Uses Next.js App Router (not pages router)
- Dynamic artist routes under `app/[artist]/page.jsx`
- Root page components under `app/pages/`

## Development Workflow

### Environment Setup
1. Create `.env.local` file with:
   ```
   NEXT_PUBLIC_LASTFM_API_KEY=your_api_key_here
   ```
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

### Common Development Tasks
- Local development server: `npm run dev` (runs on port 3000)
- Component updates auto-refresh in browser
- API changes should be made in `lastfmApi.js`

## Conventions & Patterns

### API Calls
- All Last.fm API calls should:
  - Use the centralized `lastfmApi` object
  - Include error handling for empty responses (use `|| []` pattern)
  - URL encode artist names: `encodeURIComponent(artistName)`

### Component Structure
- Artist-related components receive artist data as props
- Loading states handled by `Loading.jsx`
- Consistent prop naming: `artistName` for artist name parameters

### Data Flow
1. User searches for artist → SearchBar component
2. Results displayed in ArtistCard components
3. Clicking artist navigates to dynamic route
4. Artist page loads detailed info and top tracks

## Integration Points
- Last.fm API is the primary external dependency
- React context used for state management (`Providers.jsx`)
- Next.js image optimization for artist images