import { Routes, Route, Navigate } from "react-router";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import PasswordForgetPage from "@/pages/password-forget-page";
import IndexPage from "@/pages/index-page";
import PostDetailPage from "@/pages/post-detail.page";
import ProfileDetailPage from "@/pages/profile-detail-page";
import PasswordResetPage from "@/pages/password-reset-page";
import GlobalLayout from "./components/layout/global-layout";
import GuestOnlyLayout from "./components/layout/guset-only-layout";
import MemberOnlyLayout from "./components/layout/member-only-layout";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route element={<GuestOnlyLayout />}>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/password-forget" element={<PasswordForgetPage />} />
        </Route>

        <Route element={<MemberOnlyLayout />}>
          <Route path="/" element={<IndexPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/profile/:userId" element={<ProfileDetailPage />} />
          <Route path="/password-reset" element={<PasswordResetPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
