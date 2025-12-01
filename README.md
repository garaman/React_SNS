# React 기반 SNS 프로젝트 "SNS Log"

이 프로젝트는 React와 최신 웹 기술 스택을 활용하여 제작된 소셜 네트워킹 서비스(SNS) 포트폴리오입니다. 사용자 인증, 게시물, 댓글, 프로필 등 소셜 미디어의 핵심 기능들을 포함하고 있습니다.

## ✨ 핵심 기능

*   **사용자 인증**: Supabase Auth를 활용하여 안전한 회원가입, 로그인, 로그아웃 기능을 구현했습니다. 또한 GitHub 계정을 이용한 OAuth 소셜 로그인을 지원합니다.
*   **게시물 관리 (CRUD)**: 사용자는 자신의 게시물을 생성(Create), 조회(Read), 수정(Update), 삭제(Delete)할 수 있습니다.
*   **무한 스크롤 피드**: 메인 피드에서는 사용자가 스크롤을 내릴 때마다 새로운 게시물을 동적으로 불러오는 무한 스크롤 기능을 구현하여 매끄러운 사용자 경험을 제공합니다.
*   **상호작용 기능**:
    *   **좋아요**: 사용자는 게시물에 '좋아요'를 누르거나 취소할 수 있습니다.
    *   **댓글**: 게시물에 대한 댓글 작성, 수정, 삭제(CRUD) 기능을 모두 지원합니다.
*   **사용자 프로필**: 각 사용자는 자신의 정보를 확인하고 수정할 수 있는 프로필 페이지를 가집니다.
*   **이미지 처리**: Supabase Storage를 사용하여 게시물 및 사용자 프로필 이미지의 업로드, 저장 및 조회를 처리합니다.
*   **다크 모드**: 사용자의 편의를 위해 라이트/다크 모드 테마 전환 기능을 제공합니다.

## 🛠️ 기술 스택 및 라이브러리

### 프론트엔드 (Frontend)

*   **Framework**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
*   **Bundler**: [Vite](https://vitejs.dev/)
*   **Routing**: [React Router](https://reactrouter.com/)

### 백엔드 & 데이터베이스 (Backend & Database)

*   **BaaS (Backend-as-a-Service)**: [Supabase](https://supabase.com/)
    *   **Database**: PostgreSQL을 사용하여 데이터를 저장합니다.
    *   **Authentication**: 사용자 세션 관리, 비밀번호 기반 로그인 및 OAuth 인증을 처리합니다.
    *   **Storage**: 게시물 및 프로필 이미지 업로드를 관리합니다.
    *   **Real-time**: Supabase의 실시간 기능을 활용하여 UI를 즉시 업데이트합니다.

### 상태 관리 (State Management)

*   **서버 상태**: [TanStack Query (React Query)](https://tanstack.com/query)를 사용하여 Supabase 백엔드로부터 비동기 데이터를 가져오고, 캐싱 및 업데이트합니다. 데이터 동기화 로직을 단순화하고 개발 경험을 향상시킵니다.
*   **클라이언트 상태**: [Zustand](https://zustand-demo.pmnd.rs/)를 사용하여 모달(Modal) 상태나 사용자 세션과 같은 전역 클라이언트 상태를 관리합니다. 가볍고 직관적인 상태 관리 라이브러리입니다.

### UI & 스타일링 (UI & Styling)

*   **Component Library**: [shadcn/ui](https://ui.shadcn.com/)를 사용하여 아름답고 접근성 높은 컴포넌트들을 구축했습니다.
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)를 통해 유틸리티-우선(utility-first) 방식으로 CSS를 작성했습니다.
*   **Icons**: [Lucide React](https://lucide.dev/)로 깔끔하고 일관된 아이콘 세트를 적용했습니다.
*   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)를 사용하여 토스트(Toast) 알림을 구현했습니다.

### 코드 스타일 및 품질

*   **Linting**: [ESLint](https://eslint.org/)
*   **Formatting**: [Prettier](https://prettier.io/)
