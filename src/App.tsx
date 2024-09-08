import { useForm, SubmitHandler } from "react-hook-form"


enum GenderEnum {
  female = "female",
  male = "male"
}


interface IFormInput {
  firstName: string
  gender: GenderEnum
}


export default function App() {
  const { register, handleSubmit , formState: { errors } } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  console.log(GenderEnum.female)


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input {...register("firstName",{required:true})} />
      {errors.firstName && <span>this is required</span>} 
      <label>Gender Selection</label>
      <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
      </select>
      <input type="submit" />
    </form>
  )
}