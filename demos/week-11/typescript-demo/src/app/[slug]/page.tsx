import { CoolComponent } from "@/lib/lib"

type pageParams = {
    params: {
        slug: string
    }
}

export function sum(a:number, b:number):number {
    return a + b
}

export default function Page({params}: pageParams) {
    return (
        <div>
            <h2>This is the game page!</h2>
            <p>{params.slug}</p>
            <CoolComponent coolFunction={sum} />
        </div>
    )
}