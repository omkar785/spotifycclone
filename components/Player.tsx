"use client";

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer";

const Player = () => {

    const player = usePlayer();
    const {song} =useGetSongById(player.activeId);

    const songUrl = useLoadSongUrl(song);


    return (
        <div> 
        <h1>Player</h1>
        </div>
    );
}

export default Player;