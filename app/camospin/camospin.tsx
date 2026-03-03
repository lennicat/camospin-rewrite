import React from "react";
import camo from "./camospin.webp";
import audiofile from "./loop.mp3"
import { Dialog, DialogActions, Button} from "@mui/material";

const spinAudio = new Audio(audiofile);
spinAudio.loop = true;

function fireAudio() {
    console.log("it worked dumbass");
    spinAudio.play();
}

function OpenDialog() {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
        fireAudio();
    };

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogActions>
                <div className="flex justify-center">
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                    <Button onClick={handleClose}>Disagree</Button>
                </div>
                
            </DialogActions>
        </Dialog>
    )

}

export function Camospin() {
    return (
        <main className="flex items-center justify-center content-center h-screen">
            <OpenDialog></OpenDialog>
            <div className="w-[500px] max-w-[100vw] p-4">
                <img
                    src={camo}
                    alt="Camo spinning."
                />
            </div>
        </main>
    )
}