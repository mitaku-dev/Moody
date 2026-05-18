import * as React from "react";
import {Box, Card, Inset, Text} from "@radix-ui/themes";
import {ReactNode} from "react";

interface MoodProps {
    children: ReactNode;
    selected: boolean
}


export default function Mood({children, selected}: MoodProps)  {

    return(
        <>
        <Box maxWidth="240px" maxHeight="240px">
            <Card>
                    {children}
            </Card>
        </Box>
        </>
    )

}
