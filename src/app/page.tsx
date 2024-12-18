import EmployeeForm from "@/components/EmployeeForm";
import { ModeToggle } from "@/components/toggleTheme";

export default function Home() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center gap-10 dark">
      <div className="absolute top-5 right-5">
        <ModeToggle />
      </div>
      <h1 className="text-4xl"> Employee Details </h1>{" "}
      <div className="border border-zinc-700 rounded-xl w-1/2 h-min p-10 ">
        <EmployeeForm />
      </div>
    </main>
  );
}
