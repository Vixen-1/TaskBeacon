import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import "../../assets/styles/common.css";
import "./Layout.scss";
import { useState } from "react";
import image from "../../assets/ohho.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader";

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
    const isDescriptionSingleWord = currentNote.description.trim().split(/\s+/).length === 1;

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
    <Stack className="main">
      <Box className="absolute inset-0">
        <img alt="nature" className="bg-img" src={image} />
      </Box>
      <Box className="relative z-10">
        {userData && userData?.name ? (
          <Box className="flex-row">
            <Box className="text-data animate-slideInFromLeft">
              <h2>Welcome, {userData?.name}!</h2>
              <h4>Let's organize your world, one note at a time!</h4>
              {notes && notes.length > 0 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={onMakeNotesClick}
                >
                  See Notes
                </Button>
              )}
            </Box>
            <Stack className="form-data animate-slideInFromTop">
              <Typography className="form-heading" variant="h5" fontWeight="bold">
                Add a New Note
              </Typography>
              <form>
                <Box className="flex-row">
                  <Typography paddingRight={2} fontWeight="bold" fontSize={20}>
                    Title
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={currentNote.title}
                    onChange={(e) => setCurrentNote({ ...currentNote, title: e.target.value })}
                    className="text-field"
                    error={errors.title}
                    helperText={errorsHelperText.title}
                  />
                </Box>
                <Box className="flex-row">
                  <Typography paddingRight={4.5} fontWeight="bold" fontSize={20}>
                    Description
                  </Typography>
                  <TextField
                    className="text-field"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={currentNote.description}
                    onChange={(e) => setCurrentNote({ ...currentNote, description: e.target.value })}
                    error={errors.description}
                    helperText={errorsHelperText.description}
                    margin="normal"
                  />
                </Box>
                <Box className="flex-row">
                  <Typography paddingRight={3} fontWeight="bold" fontSize={20}>
                    Tag
                  </Typography>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={currentNote.tag}
                    onChange={(e) => setCurrentNote({ ...currentNote, tag: e.target.value })}
                    margin="normal"
                    className="text-field"
                  />
                </Box>
                <Box className="flex-center">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<FontAwesomeIcon icon={faPlus} />}
                    onClick={handleSubmit}
                  >
                    Add Note
                  </Button>
                </Box>
              </form>
            </Stack>
          </Box>
        ) : (
          <Box className="flex-col animate-pulse">
            {error ? (
              <Box>
                <Typography className="typography bottom-link" variant="h5" color="black" fontWeight="bold">
                  Authentication failed!
                </Typography>
                <Box className="bottom">
                  Go back to Home page{" "}
                  <Button variant="contained" className="bottom-link" onClick={() => navigate("/")}>
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