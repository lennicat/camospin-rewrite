import React, { useEffect } from "react";
import camo from "./camospin.webp";
import audiofile from "./loop.mp3"
import { Dialog, DialogActions, Button} from "@mui/material";

function OpenDialog() {
    const [open, setOpen] = React.useState(true);


    const handleClose = () => {
        setOpen(false);
    };

    const [agreed, setAgreed] = React.useState(false);

    const handleSong = () => {
        setAgreed(true);
    };

    useEffect(() => {
        if (agreed) {
            var audio = new Audio(audiofile);
            audio.loop = true;
            audio.play();
        }
    }, [agreed]);

    return (
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogActions>
                <div className="flex justify-center">
                    <Button
                        onClick={() => {
                            handleSong();
                            handleClose();
                        }}
                        autoFocus
                    >
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