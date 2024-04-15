"use client";

import LoginForm from "./Forms/LoginForm";
import Image from "next/image";

export default function InputForm() {

    return (
        <>
            <div className="w-full h-screen flex items-center justify-between">
                <div className="h-full xl:w-[50%] flex justify-center items-center p-20 md:w-[65%]">
                    <Image width={1000} height={1000} src="/Login_vector_img/4.jpg" alt="login_vector" className="xl:w-full xl:h-full object-contain md:w-[250px] md:h-[250px]" />
                </div>

                <div className="h-full w-[50%] flex justify-center items-center">
                    <div className="xl:h-full xl:w-2/3 flex justify-center items-center md:w-[100%]">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </>
    )
}
