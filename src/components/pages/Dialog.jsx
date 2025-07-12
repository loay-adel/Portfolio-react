import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { ExternalLink, X } from "lucide-react";

export function DialogWithImage({ title, video, brief, previewLink }) {
  const [open, setOpen] = React.useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const videoRef = React.useRef(null);

  const handleOpen = () => {
    setOpen(!open);
    if (!open && videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <>
      {/* Optimized Trigger Button */}
      <Button
        variant="gradient"
        size="sm"
        className="rounded-full primaryCyan w-32 group flex items-center gap-1 shadow-sm hover:shadow-md transition-all"
        onClick={handleOpen}
        aria-label={`Open project details for ${title}`}
      >
        Full View
        <ExternalLink
          className="h-3.5 w-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform"
          aria-hidden="true"
        />
      </Button>

      {/* Performance-Optimized Dialog */}
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="dark:bg-gray-800 bg-white border border-gray-200 dark:border-gray-700 shadow-2xl"
      >
        {/* Accessible Header */}
        <DialogHeader className="justify-between p-5 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
          <div className="flex flex-col gap-1">
            <Typography
              as="h2"
              variant="h4"
              color="blue-gray"
              className="font-bold dark:text-white"
            >
              {title}
            </Typography>
            {brief && (
              <Typography
                variant="small"
                className="text-gray-600 dark:text-gray-300 font-normal max-w-2xl"
              >
                {brief}
              </Typography>
            )}
          </div>

          <div className="flex items-center gap-2">
            {previewLink && (
              <a
                href={previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block"
                aria-label={`View live preview of ${title}`}
              >
                <Button
                  variant="gradient"
                  size="sm"
                  className="flex items-center gap-1.5 primaryCyan rounded-full shadow-sm"
                >
                  Live Preview
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </Button>
              </a>
            )}
            <IconButton
              variant="text"
              size="sm"
              color="gray"
              onClick={handleOpen}
              className="rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50  dark:text-white"
              aria-label="Close dialog"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </IconButton>
          </div>
        </DialogHeader>

        {/* Optimized Video Container */}
        <DialogBody className="p-0 overflow-hidden bg-black">
          <div className="relative aspect-video w-full">
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="animate-pulse text-gray-500">
                  Loading video...
                </div>
              </div>
            )}
            <video
              ref={videoRef}
              className={`w-full h-full object-contain ${
                isVideoLoaded ? "block" : "hidden"
              }`}
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              aria-label={`Video demonstration of ${title}`}
              onLoadedData={() => setIsVideoLoaded(true)}
            >
              <source src={video} type="video/mp4" />
              <track
                src=""
                kind="captions"
                srcLang="en"
                label="English captions"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
