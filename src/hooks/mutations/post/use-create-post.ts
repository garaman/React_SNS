import { createPostWithImage } from "@/api/post";
import { QUERY_KEYS } from "@/lib/constants";
import type { UseMutationCallBack } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreatePost(callbacks?: UseMutationCallBack) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPostWithImage,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();

      queryClient.resetQueries({ queryKey: QUERY_KEYS.post.list });
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
