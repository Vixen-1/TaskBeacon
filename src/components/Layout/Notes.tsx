import { useEffect, useState } from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import secureLocalStorage from "react-secure-storage";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SaveIcon from "@mui/icons-material/Save";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tilt from "react-parallax-tilt";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Notification from "./Notification";
import { fadeIn } from "../../utils/motion";
import { motion } from "framer-motion";

interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
  notification: boolean;
  sendDate: string | null;
  date: string;
}

export default function Notes({
  notes,
  setNotes,
  fetchNotes,
  handleSaveEdit,
  onAddClick,
  handleDeleteNote,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  fetchNotes: () => void;
  onAddClick: () => void;
  handleSaveEdit: (note: Note) => void;
  handleDeleteNote: (id: string) => void;
}) {
  const token = secureLocalStorage.getItem("authToken");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [activeId, setActiveId] = useState<string>("");
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const toggleDialog = () => {
    setOpenDialog((prev) => !prev);
  };

  useEffect(() => {
    if (token) fetchNotes();
  }, [fetchNotes, token]);

  const formatDateAndTime = (isoString: string) => {
    const dateObj = new Date(isoString);
    const date = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const time = dateObj.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false, // Changed to 12-hour format for consistency
    });

    return { date, time };
  };

  return (
    <Box className="notes-background black-gradient" padding={2}>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Grid container spacing={3} sx={{ marginTop: "25px" }}>
          {notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4} key={note._id}>
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.02}
                transitionSpeed={450}
                style={{ margin: "20px" }}
              >
                <motion.div
                  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  initial="hidden"
                  animate="show"
                  className="w-full green-pink-gradient p-[1px] rounded-[12px] shadow-card"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={1}
                    className="bg-tertiary rounded-[20px]"
                    boxShadow={3}
                    padding={2}
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {note.notification ? (
                        <IconButton
                          size="small"
                          color="secondary"
                          title="You will be notified one day before deadline"
                        >
                          <NotificationsActiveIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          size="small"
                          color="success"
                          className="text-green-100"
                          onClick={() => {
                            setActiveId(note._id);
                            toggleDialog();
                          }}
                        >
                          <NotificationAddIcon />
                        </IconButton>
                      )}
                      {!note.sendDate ? (
                        <Typography
                          variant="caption"
                          className="text-green-100"
                        >
                          <KeyboardDoubleArrowLeftIcon fontSize="small" /> Set
                          Notification Alert
                        </Typography>
                      ) : (
                        <Typography
                          variant="caption"
                          className="text-purple-100"
                        >
                          {`Deadline: ${
                            formatDateAndTime(note.sendDate).date
                          } ${formatDateAndTime(note.sendDate).time}`}
                        </Typography>
                      )}
                    </Box>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      <Typography
                        variant="caption"
                        color="primary"
                        contentEditable={editingNoteId === note._id}
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          setNotes((prevNotes: Note[]) =>
                            prevNotes.map((prevNote) =>
                              prevNote._id === note._id
                                ? {
                                    ...prevNote,
                                    tag: e.target.textContent || "",
                                  }
                                : prevNote
                            )
                          )
                        }
                        sx={{ fontWeight: "bold" }}
                      >
                        #{note.tag}
                      </Typography>
                      <Typography variant="caption" className="text-blue-100">
                        {`Date: ${formatDateAndTime(note.date).date} Time: ${
                          formatDateAndTime(note.date).time
                        }`}
                      </Typography>
                    </Box>
                    <Typography
                      fontWeight="bold"
                      variant="h5"
                      className="capitalize text-green-200"
                      gutterBottom
                      contentEditable={editingNoteId === note._id}
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        setNotes((prevNotes) =>
                          prevNotes.map((prevNote) =>
                            prevNote._id === note._id
                              ? {
                                  ...prevNote,
                                  title: e.target.textContent || "",
                                }
                              : prevNote
                          )
                        )
                      }
                    >
                      {note.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-green-300"
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                      contentEditable={editingNoteId === note._id}
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        setNotes((prevNotes) =>
                          prevNotes.map((prevNote) =>
                            prevNote._id === note._id
                              ? {
                                  ...prevNote,
                                  description: e.target.textContent || "",
                                }
                              : prevNote
                          )
                        )
                      }
                    >
                      {note.description}
                    </Typography>
                    <Box
                      mt={1.5}
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                    >
                      {editingNoteId !== note._id ? (
                        <IconButton
                          title="Edit Note"
                          size="small"
                          color="primary"
                          onClick={() => setEditingNoteId(note._id)}
                        >
                          <BorderColorIcon />
                        </IconButton>
                      ) : (
                        <IconButton
                          title="Save Note"
                          size="small"
                          color="secondary"
                          onClick={() => {
                            handleSaveEdit(note);
                            setEditingNoteId(null);
                          }}
                        >
                          <SaveIcon />
                        </IconButton>
                      )}
                      <IconButton
                        title="Delete the note"
                        size="small"
                        color="error"
                        onClick={() => handleDeleteNote(note._id)}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </motion.div>
              </Tilt>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <IconButton
            color="primary"
            size="large"
            onClick={onAddClick}
            sx={{ fontSize: "48px" }}
          >
            <AddBoxIcon />
          </IconButton>
        </Box>
      </Box>
      {openDialog && (
        <Notification
          open={openDialog}
          refetch={fetchNotes}
          toggleDialog={toggleDialog}
          id={activeId}
        />
      )}
    </Box>
  );
}
