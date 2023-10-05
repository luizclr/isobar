export enum OrderOption {
  alphabetic = "ALPHABETIC",
  popularity = "POPULARITY",
}

export type OrderProps = {
  count: number;
  onOrderChange: (order: OrderOption) => void;
};

export type OptionType = {
  label: string;
  value: OrderOption;
};
