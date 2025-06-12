import { Box, Button, Dialog, Typography } from "@mui/material";
import "../../assets/styles/common.css";
import "./Layout.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FcViewDetails } from "react-icons/fc";

interface UserData {
  _id: string;
  name: string;
  email: string;
}

interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
  notification: boolean;
  sendDate: string | null;
  date: string;
}

export default function Main({
  view,
  onClose,
  onMakeNotesClick,
  currentNote,
  setCurrentNote,
  handleAddNote,
}: {
  view: boolean;
  onClose: () => void;
  notes: Note[];
  userData: UserData | null;
  error: boolean | null;
  onMakeNotesClick: () => void;
  currentNote: Note;
  setCurrentNote: (note: Note) => void;
  handleAddNote: () => void;
}) {
  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });
  const [errorsHelperText, setErrorsHelperText] = useState({
    title: "",
    description: "",
  });

  const validateForm = () => {
    let titleHelperText = "";
    let descriptionHelperText = "";
    const isTitleEmpty = currentNote.title.trim().length === 0;
    const isTitleTooShort = currentNote.title.trim().length < 3;

    const isDescriptionEmpty = currentNote.description.trim().length === 0;
    const isDescriptionTooShort = currentNote.description.trim().length < 5;
    const isDescriptionSingleWord =
      currentNote.description.trim().split(/\s+/).length === 1;

    if (isTitleEmpty) {
      titleHelperText = "Title cannot be empty.";
    } else if (isTitleTooShort) {
      titleHelperText = "Title must be at least 3 characters long.";
    }

    if (isDescriptionEmpty) {
      descriptionHelperText = "Description cannot be empty.";
    } else if (isDescriptionTooShort && isDescriptionSingleWord) {
      descriptionHelperText = "Description cannot be just a word.";
    } else if (isDescriptionTooShort) {
      descriptionHelperText = "Description must be at least 5 characters long.";
    }

    const newErrors = {
      title: !!titleHelperText,
      description: !!descriptionHelperText,
    };

    setErrors(newErrors);
    setErrorsHelperText({
      title: titleHelperText,
      description: descriptionHelperText,
    });

    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleAddNote();
    }
  };

  return (
    <Dialog
      className="animate-slideInFromTop"
      open={view}
      onClose={onClose}
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          boxShadow: "none",
          overflow: "visible",
        },
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        padding={4}
        sx={{
          backgroundColor: "#ccc",
          borderRadius: "20px",
        }}
      >
        <Typography
          fontSize={"24px"}
          textAlign={"center"}
          fontWeight={600}
          fontFamily={"Poppins"}
          className={"text-primary"}
        >
          Add a New Note
        </Typography>
        <form className="flex flex-col gap-2">
          <Box className="flex flex-col">
            <span className="text-white font-semibold">Title</span>
            <input
              type="text"
              name="title"
              value={currentNote.title}
              onChange={(e) =>
                setCurrentNote({
                  ...currentNote,
                  title: e.target.value,
                })
              }
              placeholder="What's the title?"
              className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.title && (
              <span className="text-red-600 text-[11px] mt-1">
                {errorsHelperText.title}
              </span>
            )}
          </Box>
          <Box className="flex flex-col">
            <span className="text-white font-semibold">Description</span>
            <textarea
              rows={4}
              name="description"
              placeholder="Please describe"
              value={currentNote.description}
              onChange={(e) =>
                setCurrentNote({
                  ...currentNote,
                  description: e.target.value,
                })
              }
              className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.description && (
              <span className="text-red-600 text-[11px] mt-1">
                {errorsHelperText.description}
              </span>
            )}
          </Box>
          <Box className="flex flex-col">
            <span className="text-white font-semibold">Tag</span>
            <input
              name="tag"
              placeholder="Please give a tag"
              value={currentNote.tag}
              onChange={(e) =>
                setCurrentNote({
                  ...currentNote,
                  tag: e.target.value,
                })
              }
              className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </Box>
        </form>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={1}
        pt={2}
        px={4}
      >
        <Button
          className="custom-add-button"
          startIcon={<FontAwesomeIcon icon={faPlus} />}
          onClick={handleSubmit}
        >
          Add Note
        </Button>
        <Button
          className="custom-add-button"
          startIcon={<FcViewDetails />}
          onClick={onMakeNotesClick}
        >
          View Notes
        </Button>
      </Box>
    </Dialog>
  );
}
