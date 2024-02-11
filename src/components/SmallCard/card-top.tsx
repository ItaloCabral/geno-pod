import { ReactNode } from "react"

type Props = {
    title: ReactNode
    imgUri: string
}

export const Top = ({ title, imgUri }: Props) => {

    return (
        <div className="bg-zinc-700 rounded-t-lg p-3 flex items-center gap-3 text-sm">
            <div className="w-10">
                {
                    imgUri
                        ? <img src={imgUri} alt="album cover" className="rounded-lg w-10" />
                        : <div className="rounded-lg w-10 h-10 bg-gradient-to-tr from-zinc-500 to-zinc-400" />
                }
            </div>
            {title}
        </div>
    )
}