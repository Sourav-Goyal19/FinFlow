import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api)[":email"]["transactions"][":id"]["$delete"]
>;

export const useDeleteTransaction = (id: string, email: string) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api[":email"].transactions[":id"].$delete({
        param: {
          id,
          email,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      toast.success("Transaction deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["transaction", { id }] });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to delete transaction");
    },
  });
};
