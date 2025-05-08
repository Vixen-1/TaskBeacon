import { Box, Button, Stack, Typography } from "@mui/material";
import "../../assets/styles/common.css";
import "./Layout.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { motion } from "framer-motion";
import { zoomIn } from "../../utils/motion";
import { styles } from "../../styles";
import { StarsCanvas } from "../../canvas";
import NotesForm from "./NotesForm";

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
  notes,
  userData,
  error,
  onMakeNotesClick,
  currentNote,
  setCurrentNote,
  handleAddNote,
}: {
  notes: Note[];
  userData: UserData | null;
  error: boolean | null;
  onMakeNotesClick: () => void;
  currentNote: Note;
  setCurrentNote: (note: Note) => void;
  handleAddNote: () => void;
}) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    title: false,
    description: false,
  });
  const [view, setView] = useState<boolean>(false);
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
    <Stack className="main bg-primary">
      <StarsCanvas />
      <Box className="relative z-10">
        {userData && userData?.name ? (
          <Box className="flex-row">
            {!view ? (
              <div
                className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
              >
                <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#00cea8] animate-pulse" />
                  <div className="w-1 sm:h-80 h-40 green-gradient" />
                </div>

                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={zoomIn(0.2, 1)}
                  className="text-data text-center md:text-left"
                >
                  <Typography
                    variant="h3"
                    className={`${styles.heroHeadText} font-bold`}
                  >
                    Welcome, {userData?.name}!
                  </Typography>
                  <Typography variant="h3" className={`${styles.heroSubText}`}>
                    Let's organize your world, one note at a time!
                  </Typography>
                  <Box
                    display={"flex"}
                    flexDirection={"row"}
                    gap={2}
                    alignItems={"center"}
                  >
                    {notes && notes.length > 0 && (
                      <Button
                        variant="contained"
                        className="custom-add-button"
                        onClick={onMakeNotesClick}
                      >
                        View Saved Notes
                      </Button>
                    )}
                    <Button
                      className="custom-add-button"
                      onClick={() => setView(!view)}
                    >
                      Create New Note
                    </Button>
                  </Box>
                </motion.div>
              </div>
            ) : (
              <NotesForm setCurrentNote={setCurrentNote} currentNote={currentNote} handleSubmit={handleSubmit} />
            )}
          </Box>
        ) : (
          <Box className="flex-col animate-pulse">
            {error ? (
              <Box className='flex flex-col justify-center items-center'>
                <Typography
                  className="typography bottom-link"
                  variant="h5"
                  color={`text-secondary`}
                  fontWeight="bold"
                >
                  Authentication failed!
                </Typography>
                <Box className="bottom text-secondary">
                  Go back to Home page{" "}
                  <Button
                    className="bottom-link"
                    onClick={() => navigate("/")}
                  >
                    Go Back
                  </Button>
                </Box>
              </Box>
            ) : (
              <Loader />
            )}
          </Box>
        )}
      </Box>
    </Stack>
  );
}
