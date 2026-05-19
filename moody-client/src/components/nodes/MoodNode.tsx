import * as React from "react";
import {Box, Card, Inset, Text} from "@radix-ui/themes";
import {ReactNode} from "react";
import "./MoodNode.css"
import type {Mood} from "@/data/Mood";

interface MoodProps {
    children: ReactNode;
    selected: boolean,
    data: Mood
}


function getColor(data: Mood) {
    const backgroundColor = data?.style?.backgroundColor;
    if(backgroundColor) return backgroundColor;
    switch(data.content.type) {
        case "note":
            return "yellow";
            break;
        case "image":
            return "black";
            break;
        default:
            return "white";
            break;
    }
}


export default function MoodNode({children, selected,data}: MoodProps)  {
    return(
        <>
        <Box className="mood"  /*style={{backgroundColor: getColor(data)}}*/>
                    {children}
        </Box>
        </>
    )

}
