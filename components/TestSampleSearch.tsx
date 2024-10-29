"use client";

import { ChangeEventHandler, useCallback, useState } from "react";
import { Input } from "./ui/input";
import useSampleSearch from "@/hooks/useSampleSearch";
import TestSampleCard from "./TestSampleCard";
import { Skeleton } from "./ui/skeleton";

export function TestSampleSearch() {
  const [query, setQuery] = useState("");
  const { data: searchReponse, error, isLoading } = useSampleSearch(query);
  const results = searchReponse?.data ?? [];

  const handleSearchInputChange = useCallback<
    ChangeEventHandler<HTMLInputElement>
  >((event) => {
    setQuery(event.target.value);
  }, []);

  return (
    <div>
      <Input
        className="my-4"
        placeholder="Enter sample ID, eg. testsample1"
        value={query}
        onChange={handleSearchInputChange}
      />

      <div>
        {!searchReponse && !error && !isLoading && (
          <p className="text-center text-muted-foreground">
            Search results will appear here.
          </p>
        )}

        {!!error && !isLoading && (
          <p className="text-center text-muted-foreground">
            Something went wrong. Please try again later.
          </p>
        )}

        {!!searchReponse && !error && !isLoading && results.length === 0 && (
          <p className="text-center text-muted-foreground">
            No test samples found matching given criteria.
          </p>
        )}

        {(isLoading || results.length > 0) && (
          <div>
            <p className="text-sm text-muted-foreground mb-3">
              {isLoading ? (
                <Skeleton className="h-[1em] w-2/5" />
              ) : (
                <span>
                  Found {results.length} result{results.length === 1 ? "" : "s"}
                  :
                </span>
              )}
            </p>

            <ul>
              {results.map((matchingSample) => (
                <li key={matchingSample.id} className="mb-3">
                  <TestSampleCard sample={matchingSample} />
                </li>
              ))}

              {isLoading &&
                [...Array(2)].map((_, index) => (
                  <li key={`skeleton_item_${index}`} className="mb-3">
                    <TestSampleCard sample={null} />
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestSampleSearch;
