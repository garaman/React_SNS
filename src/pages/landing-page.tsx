import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-8">
        Welcome to SNS LOG
      </h1>
      <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl">
        프로젝트의 다양한 기능들을 쉽고 빠르게 이용해보세요!
      </p>

      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">현재 사용 가능한 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* SNS 피드 카드 */}
          <Card className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle>SNS 피드</CardTitle>
              <CardDescription>다른 사람들의 게시물을 둘러보고 소통해보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>최신 게시물, 인기 게시물을 확인하고 댓글을 남겨보세요.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => navigate("/sns")} className="w-full">SNS 피드로 이동</Button>
            </CardFooter>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">준비 중인 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 실시간 채팅 카드 (준비 중) */}
          <Card className="opacity-60 cursor-not-allowed">
            <CardHeader>
              <CardTitle>실시간 채팅</CardTitle>
              <CardDescription>친구들과 1:1로 대화해보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>현재 개발 중인 기능입니다. 기대해주세요!</p>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full">준비 중</Button>
            </CardFooter>
          </Card>

          {/* 그룹 기능 카드 (준비 중) */}
          <Card className="opacity-60 cursor-not-allowed">
            <CardHeader>
              <CardTitle>그룹 기능</CardTitle>
              <CardDescription>관심사가 같은 사람들과 그룹을 만들어보세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>커뮤니티 기능을 통해 함께 즐거운 시간을 보내세요.</p>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full">준비 중</Button>
            </CardFooter>
          </Card>
           {/* 추가 기능 1 (준비 중) */}
           <Card className="opacity-60 cursor-not-allowed">
            <CardHeader>
              <CardTitle>새로운 기능 1</CardTitle>
              <CardDescription>다양한 추가 기능들이 기다리고 있습니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>더욱 풍부한 경험을 제공하기 위해 노력 중입니다.</p>
            </CardContent>
            <CardFooter>
              <Button disabled className="w-full">준비 중</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
