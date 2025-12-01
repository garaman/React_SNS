import FallBack from "@/components/fallback";
import Loader from "@/components/loader";
import PostItem from "@/components/post/post-item";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useInfinitePostData } from "@/hooks/queries/use-infinite-posts-data";

export default function PostFeed({ authorId }: { authorId?: string }) {
  const { data, error, isPending, fetchNextPage, isFetchingNextPage } =
    useInfinitePostData(authorId);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // 하단 감지 시 데이터 추가.
      fetchNextPage();
    }
  }, [inView]);

  if (error) return <FallBack />;
  if (isPending) return <Loader />;

  return (
    <div className="flex flex-col gap-10">
      {data.pages.map((page) =>
        page.map((postId) => (
          <PostItem key={postId} postId={postId} type={"FEED"} />
        )),
      )}
      {isFetchingNextPage && <Loader />}
      <div ref={ref}></div>
    </div>
  );
}
