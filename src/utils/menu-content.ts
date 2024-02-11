import { BiPodcast, BiSolidBoltCircle, BiSolidMicrophone, BiSolidPhotoAlbum } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdCreateNewFolder, MdFolder, MdOutlineFavorite, MdOutlinePlaylistPlay } from "react-icons/md";
import { SiDiscogs } from "react-icons/si";
import { TbArrowBackUp } from "react-icons/tb";

export const menuContent = [
    {
        icon: BiSolidBoltCircle,
        label: "Explore",
        href: "#"
    },
    {
        icon: HiSpeakerWave,
        label: "Genres",
        href: "#"
    },
    {
        icon: SiDiscogs,
        label: "Albums",
        href: "#"
    },
    {
        icon: BiSolidMicrophone,
        label: "Artists",
        href: "#"
    },
    {
        icon: BiPodcast,
        label: "Podcasts",
        href: "#"
    }
];

export const subMenuContent = [
    {
        icon: TbArrowBackUp,
        label: "Recent",
        href: "#"
    },
    {
        icon: BiSolidPhotoAlbum,
        label: "Albums",
        href: "#"
    },
    {
        icon: MdOutlineFavorite,
        label: "Favorites",
        href: "#"
    },
    {
        icon: MdFolder,
        label: "Local",
        href: "#"
    }
];

export const additionalSubMenuContent = [
    {
        icon: MdCreateNewFolder,
        label: "Create",
        href: "#"
    },
    {
        icon: MdOutlinePlaylistPlay,
        label: "(G)old Music",
        href: "#"
    },
    {
        icon: MdOutlinePlaylistPlay,
        label: "Indie",
        href: "#"
    },
    {
        icon: MdOutlinePlaylistPlay,
        label: "Alternative",
        href: "#"
    }
];