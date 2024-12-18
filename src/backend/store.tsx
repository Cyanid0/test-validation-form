"use server";
import formSchema from "@/app/formSchema";
import prisma from "@/db";
import { z } from "zod";

export async function store(value: z.infer<typeof formSchema>) {
  if (
    !value.name ||
    !value.email ||
    !value.number ||
    !value.employeeId ||
    !value.department ||
    !value.dateOfJoining ||
    !value.role
  ) {
    throw new Error("Invalid data");
  }

  // Validate unique email and employeeId
  const emailExists = await prisma.employee.findFirst({
    where: {
      email: value.email,
    },
  });

  if (emailExists) {
    throw new Error("Email already exists!");
  }

  const employeeIdExists = await prisma.employee.findFirst({
    where: {
      employeeId: value.employeeId,
    },
  });

  if (employeeIdExists) {
    throw new Error("EmployeeId already exists!");
  }

  // Save to database
  await prisma.employee.create({
    data: {
      name: value.name,
      email: value.email,
      number: value.number,
      employeeId: value.employeeId,
      department: value.department,
      dateOfJoining: new Date(value.dateOfJoining),
      role: value.role,
    },
  });

  // Return success response
  return {
    status: 200,
    message: "Employee data has been successfully saved!",
  };
}
