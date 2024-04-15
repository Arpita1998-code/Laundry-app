import React from 'react'
import { Dialog, DialogContent,} from "@/components/ui/dialog"


const CustomModal = ({ children, isModalOpen, setIsModalOpen }: any) => {
    return (
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
                <DialogContent>
                    {children}
                </DialogContent>
            </Dialog>
    )
}

export default CustomModal
