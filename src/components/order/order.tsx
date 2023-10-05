import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";

import {
  Button,
  Counter,
  Option,
  OptionsList,
  OrderContainer,
} from "~/components/order/order.styles";
import { OptionType, OrderOption, OrderProps } from "~/components/order/types";

const options: OptionType[] = [
  { label: "Alphabetic", value: OrderOption.alphabetic },
  { label: "Popularity", value: OrderOption.popularity },
];

export const Order: React.FC<OrderProps> = ({ count = 0, onOrderChange }: OrderProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<OrderOption | null>(null);

  const toggleShow = (): void => {
    setShow(!show);
  };

  const onOptionClick = (option: OptionType): void => {
    setSelectedOption(option.value);
    toggleShow();
    onOrderChange(option.value);
  };

  return (
    <OrderContainer>
      <Counter>{count} results</Counter>
      <Button onClick={toggleShow}>
        <BiFilterAlt size={25} />
      </Button>
      <OptionsList show={show} onClick={toggleShow}>
        {options.map((option) => (
          <Option
            key={option.value}
            onClick={() => onOptionClick(option)}
            selected={option.value === selectedOption}
          >
            {option.label}
          </Option>
        ))}
      </OptionsList>
    </OrderContainer>
  );
};
