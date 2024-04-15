"use client";
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import CustomButton from "../common/CustomButton";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginFormSchema = z.object({
    phoneNumber: z.string(),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: "Password must contain at least one special character" })
});

export default function LoginForm() {
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isEmailFocus, setIsEmailFocus] = useState(false);
    const [isPasswordFocus, setisPasswordFocus] = useState(false);
    const [loginData, setLoginData] = useState([]);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };

    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            phoneNumber: "",
            password: ""
        },
    })

    async function onSubmit(data: z.infer<typeof LoginFormSchema>) {
        console.log("Form data:", data);
        setIsLoading(true);
        try {
            await postloginData(data);
            toast({
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            });
            form.reset({
                phoneNumber: "",
                password: ""
            });
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    const postloginData = async (data: any) => {
        try {
            const res : any = await axios.post(`${process.env.NEXT_PUBLIC_apiurl}/api/users/adminlogin`, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFlMWU2MjBkNzMxNmEyNGU5YjYwZCIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMjA0NzI1NCwiZXhwIjoxNzEyMDUwODU0fQ.hPagb_WWthAT-eBJ6OTF6hZb01S_a3wjrgyLJO8kbw0'
                }
            });
            
            console.log("Login data:", res);
            if (res.status === 200) {
                localStorage.setItem('token',(res?.data?.token));
                localStorage.setItem('userId',(res?.data?.result?._id));
                setLoginData(res.data.result);
                router.push('/dashboard');
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-col justify-center mb-12">
                <h1 className="xl:text-[35px] md:text-[25px] font-bold text-[#534dff] mb-2">Laundry App Admin</h1>
                <h1 className="xl:text-[18px] md:text-[12px] font-semibold text-[#534dff]">Login to your account</h1>
            </div>

            <div className="w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-4/5 flex flex-col gap-6">
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div onFocus={() => setIsEmailFocus(true)} onBlur={() => setIsEmailFocus(false)} className="relative overflow-hidden">
                                            <Input
                                                {...field}
                                                placeholder={`${isEmailFocus ? "" : "Phone no"}`}
                                                className={`py-6 border-x-0 border-t-0 rounded-none text-[16px] font-medium ${isEmailFocus ? "py-8 pb-4" : null}`}
                                            />
                                            <h1 className={`${isEmailFocus ? "translate-y-0 duration-500" : "translate-y-20"} absolute top-0 left-3 text-[12px]`}>Phone number</h1>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <div onFocus={() => setisPasswordFocus(true)} onBlur={() => setisPasswordFocus(false)} className="relative overflow-hidden">
                                            <Input
                                                {...field}
                                                type={isPasswordHidden ? "password" : "text"}
                                                placeholder={`${isPasswordFocus ? "" : "Password"}`}
                                                className={`py-6 border-x-0 border-t-0 rounded-none text-[16px] font-medium ${isPasswordFocus ? "py-8 pb-4" : null}`}
                                            />
                                            <h1 className={`${isPasswordFocus ? "translate-y-0 duration-500" : "translate-y-20"} absolute top-0 left-3 text-[12px]`}>Password</h1>
                                            
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                                            >
                                                {isPasswordHidden ? <FaEyeSlash /> : <FaEye />}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <CustomButton isLoading={isLoading} type="submit" className="w-full py-6 rounded-md bg-[#534dff] mt-6 xl:text-[18px] md:text-[10px] ">
                            {isLoading ? "Loading..." : "Login"}
                        </CustomButton>
                    </form>
                </Form>
            </div>
        </div>
    );
}
