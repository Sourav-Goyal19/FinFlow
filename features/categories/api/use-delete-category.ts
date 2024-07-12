import { InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api)[":email"]["categories"][":id"]["$delete"]
>;

export const useDeleteCategory = (id: string, email: string) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api[":email"].categories[":id"].$delete({
        param: {
          id,
          email,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      toast.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
      queryClient.invalidateQueries({ queryKey: ["category", { id }] });
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to delete category");
    },
  });
};
