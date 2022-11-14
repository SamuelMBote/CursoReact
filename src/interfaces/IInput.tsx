export interface IInput {
  id: string;
  label: string;
  type: string;
  options?: string[];
}
export interface ISelectOption {
  id: string;
  label: string;
  options: {
    valor: string;
    desc: string;
  }[];
}
