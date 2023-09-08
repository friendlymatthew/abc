import { useForm, SubmitHandler } from "react-hook-form";
import { FormTemplate, Inputs } from "../types/sign-up-types";

const userFormTemplate: FormTemplate = [
  {
    htmlFor: "name",
    defaultValue: "John Doe",
    readonly: true,
  },
  {
    htmlFor: "pronouns",
    defaultValue: "he/him",
    readonly: false,
  },
  {
    htmlFor: "email",
    defaultValue: "ljames@wesleyan",
    readonly: true,
  },
  {
    htmlFor: "classYear",
    defaultValue: "2024",
    readonly: true,
  },
];

export default function UserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  console.log(watch("pronouns")); 

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      {userFormTemplate.map(({ htmlFor, defaultValue, readonly }, index) => {
        return (
          <div key={index}>
            <label htmlFor={htmlFor}>{htmlFor}:</label>
            <input
              id={htmlFor}
              defaultValue={defaultValue}
              {...register(htmlFor, { required: true })}
              readOnly={readonly}
            />
            {errors[htmlFor] && <span>{htmlFor} is required</span>}{" "}
          </div>
        );
      })}

      <input type="submit" />
    </form>
  );
}
