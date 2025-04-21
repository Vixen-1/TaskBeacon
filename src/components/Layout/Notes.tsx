import { useEffect, useState } from "react";
import { Box, Button, Typography, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faFloppyDisk, faTrash } from "@fortawesome/free-solid-svg-icons";
import secureLocalStorage from "react-secure-storage";

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
  handleDeleteNote,
}: {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
  fetchNotes: () => void;
  handleSaveEdit: (note: Note) => void;
  handleDeleteNote: (id: string) => void;
}) {
  const token = secureLocalStorage.getItem("authToken");
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);

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
      hour12: false,
    });

    return { date, time };
  };

  return (
    <Box
      className="notes-background"
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px", // Fixed max width for consistency
          margin: "0 auto",
          padding: "20px",
          width: "100%", // Ensure full width of container
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: "50px", width: "100%" }}>
          {notes.map((note) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={note._id}
              sx={{
                flexGrow: 0, // Prevent stretching
                maxWidth: "100%", // Ensure max width respects grid
                boxSizing: "border-box", // Account for padding and borders
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={1}
                boxShadow={1}
                sx={{
                  background: "#fff",
                  padding: 3,
                  borderRadius: 2,
                  width: "100%", // Ensure consistent width
                  minWidth: 0, // Allow shrinking to fit content
                }}
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="caption"
                    color="primary"
                    sx={{ marginTop: "16px", display: "block" }}
                    contentEditable={editingNoteId === note._id}
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      setNotes((prevNotes: Note[]) =>
                        prevNotes.map((prevNote) =>
                          prevNote._id === note._id
                            ? { ...prevNote, tag: e.target.textContent || "" }
                            : prevNote
                        )
                      )
                    }
                  >
                    #{note.tag}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ marginTop: "16px", display: "block" }}
                  >
                    {`Date: ${formatDateAndTime(note.date).date} Time: ${formatDateAndTime(note.date).time}`}
                  </Typography>
                </Box>
                <Typography
                  fontWeight="bold"
                  variant="h5"
                  marginY={2}
                  className="capitalize"
                  gutterBottom
                  contentEditable={editingNoteId === note._id}
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    setNotes((prevNotes) =>
                      prevNotes.map((prevNote) =>
                        prevNote._id === note._id
                          ? { ...prevNote, title: e.target.textContent || "" }
                          : prevNote
                      )
                    )
                  }
                >
                  {note.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
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
                          ? { ...prevNote, description: e.target.textContent || "" }
                          : prevNote
                      )
                    )
                  }
                >
                  {note.description}
                </Typography>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  {editingNoteId !== note._id ? (
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<FontAwesomeIcon icon={faEdit} />}
                      onClick={() => setEditingNoteId(note._id)}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      size="small"
                      color="primary"
                      startIcon={<FontAwesomeIcon icon={faFloppyDisk} />}
                      onClick={() => {
                        handleSaveEdit(note);
                        setEditingNoteId(null);
                      }}
                    >
                      Save
                    </Button>
                  )}
                  <Button
                    size="small"
                    color="error"
                    startIcon={<FontAwesomeIcon icon={faTrash} />}
                    onClick={() => handleDeleteNote(note._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}