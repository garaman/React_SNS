import { type Database } from "@/datbase.types";
import type { BlobOptions } from "buffer";

export type PostEntity = Database["public"]["Tables"]["post"]["Row"];
export type ProfileEntity = Database["public"]["Tables"]["profile"]["Row"];
export type LikeEntity = Database["public"]["Tables"]["like"]["Row"];
export type CommentEntity = Database["public"]["Tables"]["comment"]["Row"];

export type Post = PostEntity & { author: ProfileEntity; isLiked: boolean };
export type Comment = CommentEntity & {
  author: ProfileEntity;
};
export type NestedComment = Comment & {
  parentComment?: Comment;
  children: NestedComment[];
};

export type UseMutationCallBack = {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  onMutate?: () => void;
  onSettled?: () => void;
};

export type Theme = "system" | "dark" | "light";
