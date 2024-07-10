import { InferRequestType, InferResponseType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/hono";
import { toast } from "sonner";

type ResponseType = InferResponseType<
  (typeof client.api)[":email"]["accounts"]["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api)[":email"]["accounts"]["$post"]
>["json"];

export const useCreateAccount = (email: string) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api[":email"].accounts.$post({
        json,
        param: {
          email,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create account");
    },
  });
};
