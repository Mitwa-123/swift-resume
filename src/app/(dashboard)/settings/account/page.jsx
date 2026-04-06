  "use client";

  import { useForm } from "react-hook-form";
  import ProfileImageUpload from "./accountForm/ProfileImageUpload";
  import CredentialsSection from "./accountForm/CredentialsSection";

  export default function App() {
    const form = useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        currentPassword: "",
        newPassword: "",
      },
    });

    const onSubmit = (data) => {
      console.log(data);
    };

    return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <ProfileImageUpload form={form} />
        <CredentialsSection form={form} />
      </form>
    );
  }
