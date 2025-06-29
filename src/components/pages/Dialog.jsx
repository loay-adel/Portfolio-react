import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  Card,
} from "@material-tailwind/react";

export function DialogWithImage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Card
        className=" w-fit px-4 h-7 flex justify-center items-center cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
        onClick={handleOpen}
      >
        <span>Full View</span>
      </Card>
      <Dialog size="xl" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Gioco
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                a modern, responsive website developed for a restaurant aiming
                to showcase its menu, ambiance, and online ordering
                capabilities. The site was built using React and Tailwind CSS,
                ensuring both a sleek design and fast performance across
                devices.
              </Typography>
            </div>
          </div>
        </DialogHeader>
        <DialogBody>
          <video className="h-full w-full rounded-lg" controls autoPlay>
            <source src="Gioco.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </DialogBody>
      </Dialog>
    </>
  );
}
