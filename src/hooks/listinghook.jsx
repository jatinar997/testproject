import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { numberplateList } from "../helper/services/numberplatelist/listing";

const fetchNumberplates = async (payload) => {
  const { data } = await numberplateList(payload).then((res) => res);
  return data;
};

export function useNumberplate() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: fetchNumberplates,
    onSuccess: (data) => {
    },
    onError: (error) => {
      console.error("Error creating user:", error);
    },
  });
}
