import { PropsWithChildren } from "react";

import { BaseContainer } from "~/components/container/container.styles";

export const Container: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => (
  <BaseContainer>{children}</BaseContainer>
);
