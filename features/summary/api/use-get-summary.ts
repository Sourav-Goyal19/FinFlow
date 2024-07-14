"use client";
import { client } from "@/lib/hono";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const useGetSummary = (email: string) => {
  const params = useSearchParams();
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const accountId = params.get("accountId") || "";
  const query = useQuery({
    queryKey: ["summary"],
    queryFn: async () => {
      const response = await client.api[":email"].summary.$get({
        query: {
          from,
          to,
          accountId,
        },
        param: {
          email,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch summary");
      }

      const { data } = await response.json();
      console.log(data);
      return data;
    },
  });

  return query;
};
