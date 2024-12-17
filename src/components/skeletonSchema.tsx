import {Skeleton} from "@/components/ui/skeleton";

type SkeletonSchemaProps = {
    grid:number
}

export default function SkeletonSchema(props:SkeletonSchemaProps) {
    const {grid} = props;
    return(
        Array.from({length:grid}).map((_,index) => (
            <div key={index} className="flex flex-col gap-8 mx-auto space-y-3">
                <Skeleton className="h-[125px] w-[250px] rounded-xl " />
                <div className="space-y-2">
                    <Skeleton className="h-4 w[250px]" />
                </div>

            </div>
        ))
    )

}