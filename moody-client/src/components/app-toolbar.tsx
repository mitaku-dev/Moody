import './app-toolbar.css'
import {Toolbar} from "radix-ui";
import { Share, Image, Paintbrush, StickyNote, Text, Undo, Redo, Hand, MousePointer2 } from "lucide-react";
import {
    StrikethroughIcon,
    TextAlignLeftIcon,
    TextAlignCenterIcon,
    TextAlignRightIcon,
    FontBoldIcon,
    FontItalicIcon,
} from "@radix-ui/react-icons";

function AppToolbar({selectedMood, setSelectedMood}) {
    return(
        <>
            <Toolbar.Root className="ToolbarRoot  flex-col items-start" aria-label="Formatting options" orientation="vertical">
                <Toolbar.ToggleGroup
                    className="ToggleGroup"
                    type="single"
                    defaultValue="image"
                    aria-label="Elements"
                >
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="drag"
                        aria-label="drag"
                    >
                        <Hand size={24}/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="select"
                        aria-label="select"
                    >
                        <MousePointer2 size={24}/>
                    </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>
                <Toolbar.Separator className="seperator"/>
                <Toolbar.ToggleGroup
                    className="ToggleGroup"
                    type="single"
                    defaultValue="image"
                    aria-label="Elements"
                    onValueChange={(value) => {
                        setSelectedMood(value);
                    }}
                >
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="image"
                        aria-label="image"
                    >
                        <Image size={24}/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="note"
                        aria-label="note"
                    >
                        <StickyNote size={24}/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="color"
                        aria-label="color"
                    >
                        <Paintbrush size={24}/>
                    </Toolbar.ToggleItem>
                    <Toolbar.ToggleItem
                        className="ToolbarToggleItem"
                        value="text"
                        aria-label="text"
                    >
                        <Text size={24}/>
                    </Toolbar.ToggleItem>
                </Toolbar.ToggleGroup>
            </Toolbar.Root>
        </>
    )
}

export default AppToolbar;
