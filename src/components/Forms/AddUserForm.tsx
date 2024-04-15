import React from 'react'
import { Input } from "@/components/ui/input"
import CustomButton from '../common/CustomButton'

const AddUserForm = ({ setIsModalOpen }: any) => {
    return (
        <>
            {/* <h1>This is Add form</h1>
            <div onClick={() => setIsModalOpen(false)} className='cursor-pointer w-fit h-auto flex items-center gap-3 px-4 py-1.5 bg-blue-400 text-white rounded-md font-semibold text-[18px]'>
                <h1>Delete</h1>
            </div> */}

            <div>

                <div>
                    
                    <Input type="name" placeholder="Name" />
                </div>

                <div>
                    <Input type="location" placeholder="Location" />
                </div>

                <div>
                    <Input type="phoneNo" placeholder="Phone No" />
                </div>

                <CustomButton>Submit</CustomButton>
                <CustomButton>Cancel</CustomButton>
            </div>

        </>
    )
}

export default AddUserForm
