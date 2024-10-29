import { defaultFetcher } from "@/constants/api";
import { TestSampleSearchResponse } from "@/definitions/types";
import useSWR from "swr";

export function useSampleSearch(query: string) {
  const result = useSWR<TestSampleSearchResponse>(
    query.length >= 3 ? `/api/search?query=${query}` : null,
    defaultFetcher
  );
  return result;
}

export default useSampleSearch;
