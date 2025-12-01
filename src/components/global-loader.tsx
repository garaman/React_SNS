import logo from "@/assets/logo.png";

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-[100vh] w-[100wh] flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-4">
        <img src={logo} alt="로고 이미지" className="w-10" />
        <div className="text-2xl font-bold">SNS Log</div>
      </div>
    </div>
  );
}
