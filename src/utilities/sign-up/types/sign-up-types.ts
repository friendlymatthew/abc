export type Inputs = {
  name: string;
  pronouns: string;
  email: string;
  classYear: string;
};

export type FormTemplate = {
  htmlFor: keyof Inputs;
  defaultValue: string;
  readonly: boolean;
}[];
