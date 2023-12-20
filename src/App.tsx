import { FormEvent, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function App() {
  const [newMessageText, setNewMessageText] = useState("");
  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));

  const [searchText, setSearchText] = useState("");
  const searchResults =
    useQuery(api.dataset.search, { query: searchText }) || [];

    const datasetSummary =
        useQuery(api.dataset.summary, { }) || 0;

  return (
    <main>
      <h1>Convex Wikipedia Search</h1>
      <p className="badge">
        <span>{name}</span>
      </p>
      <div className="search">
        <h2>Search Messages</h2>
        <input
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search!"
        />
        <div>{`${datasetSummary} documents in corpus`}</div>
        <ul>
          {searchResults.map((searchResult) => (
            <li key={searchResult._id}>
              <span>{searchResult._id}:</span>
              <span>{searchResult.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
