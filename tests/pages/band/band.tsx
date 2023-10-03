import { screen } from "@testing-library/react";

import Band from "~/pages/band/band";

import { render } from "#/test-utils/render";

describe("<Band />", () => {
  it("should be able to mount <Band /> component", () => {
    // given
    const { asFragment } = render(<Band />);

    // when
    const sut = asFragment();

    // then
    expect(sut).toMatchSnapshot();
  });

  it("should find page title", () => {
    // given
    render(<Band />);

    // when
    const title = screen.getByText("Band");

    // then
    expect(title).toEqual("Band");
  });
});
