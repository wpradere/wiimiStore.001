'use client'

import {cn} from '@/lib/utils'
import {useRouter} from "next/navigation";


interface IProps {
    path:string
    icon: React.ReactElement
    className?: string
}

export default function IconButton(props: IProps) {
    const route = useRouter();
    const {icon , className, path} = props;
    return(
        <button onClick={() => route.push(path) } className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition",className)}>
            {icon}
        </button>
    )

}