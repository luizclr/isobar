import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Container } from "~/components/container/container";
import ErrorBoundary from "~/components/error-boundary/error-boundary";
import { Navbar } from "~/components/navbar/navbar.container";
import { BaseContent, BaseWrapper } from "~/pages/base/base.styles";

const Base: React.FC = () => {
  return (
    <BaseWrapper>
      <Navbar />
      <BaseContent>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Container>
              <Outlet />
            </Container>
          </Suspense>
        </ErrorBoundary>
      </BaseContent>
    </BaseWrapper>
  );
};

export default Base;
