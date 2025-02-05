"use client"

import Image from "next/image"

export default function MenuHoverButton() {
    return (
        <div className="fixed z-50 w-40 inset-x-0 bottom-1 px-2 border-2 rounded-full cursor-pointer" style={{ left: "50%", transform: "translate(-50%, -50%)"}}>
            <div className="w-full h-full ">
                <span className="">
                    <Image src="./Icons8ArrowsLongRight.svg" width={25} height={60} alt="矢印アイコン"/>
                </span>
            </div>
        </div>
    )
}