import { episodeList } from "./data";
import { useState } from "react";
export default function App() {
  const episode = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  function EpisodeDetails() {
    if (!episode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to watch.</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>{selectedEpisode.id}</h2>
        <p>{selectedEpisode.title}</p>
        {selectedEpisode.title && <p>{selectedEpisode.description} </p>}
      </section>
    );
  }

  /** List of episodes that a user can select from */
  function watchList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ul className="episodeInfo">
          {episodeList.map((episodes) => (
            <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>The Dark Echoes</h1>
      </header>
      <h3>choose your episode</h3>
      <watchList />
      <EpisodeDetails />
    </>
  );
}
