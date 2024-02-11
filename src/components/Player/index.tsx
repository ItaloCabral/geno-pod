import { Button } from "components/ui/button";
import {
    BiChevronUp,
    BiFirstPage,
    BiLastPage,
    BiPlay,
    BiRepeat,
    BiTransferAlt
} from "react-icons/bi";
import { RiPlayListFill } from "react-icons/ri";

import './style.css';

export const Player = () => (
    <div className="bg-neutral-800 rounded h-5/6 flex flex-col justify-between">
        <div className="p-5 h-4/6">
            <div className="flex items-center justify-between mb-8">
                <h5>Player</h5>
                <Button
                    className="control-btn rounded-full"
                    size='icon'>
                    <RiPlayListFill size={21} />
                </Button>
            </div>
            <div className="flex flex-col items-center gap-6 text-center">
                <img className="rounded" src="https://picsum.photos/280/220" alt="song" />
                <div className="description font-semibold">
                    <h3 className="text-2xl mb-3">Sparkling Mechanics</h3>
                    <h5 className="text-lg  mb-1">Geno Productions</h5>
                    <p className="text-white text-opacity-55">Future Lanes</p>
                </div>
                <div className="flex items-center my-2 justify-between w-full text-sm">
                    <p>01:32</p>
                    <input className="w-8/12 h-0.5 progress-bar bg-white bg-opacity-15 rounded-lg relative" type="range"/>
                    <p>03:04</p>
                </div>
            </div>
        </div>
        <div className="bg-slate-600 flex flex-col items-center relative h-1/4">
            <div className="flex items-center gap-7 mt-6">
                <Button
                    className="control-btn"
                    size='icon'
                ><BiRepeat/></Button>
                <Button
                    className="control-btn"
                    size='icon'
                ><BiFirstPage/></Button>
                <Button
                    className="control-btn play-btn"
                    size='icon'
                ><BiPlay className=""/></Button>
                <Button
                    className="control-btn"
                    size='icon'
                ><BiLastPage/></Button>
                <Button
                    className="control-btn"
                    size='icon'
                ><BiTransferAlt/>  </Button>
            </div>
            <div className="lyrics hover:cursor-pointer flex flex-col items-center bottom-2 absolute">
                <BiChevronUp size={21} />
                <h5>Lyrics</h5>
            </div>
        </div>
    </div>
)