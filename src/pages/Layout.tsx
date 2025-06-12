import Main from "../components/Layout/Main";
import Notes from "../components/Layout/Notes";
import { useCallback, useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useGetAllDataQuery,
  useGetUserDataQuery,
  useUpdateNoteMutation,
} from "../redux/ApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Box, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBoxIcon from "@mui/icons-material/AddBox";

interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
  notification: boolean;
  sendDate: string | null;
  date: string;
}

interface UserData {
  _id: string;
  name: string;
  email: string;
}

export default function Layout() {
  const notesRef = useRef<HTMLDivElement>(null);
  const scrollToNotes = () => {
    notesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const addRef = useRef<HTMLDivElement>(null);
  const scrollToAdd = () => {
    addRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [notes, setNotes] = useState<Note[]>([]);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentNote, setCurrentNote] = useState<Note>({
    _id: "",
    title: "",
    description: "",
    tag: "",
    notification: false,
    sendDate: null,
    date: "",
  });

  const navigate = useNavigate();
   const [view, setView] = useState<boolean>(false);
  const token = secureLocalStorage.getItem("authToken");
  const { data: userResponse, error: userError, refetch: refetchUserData } = useGetUserDataQuery({});
  const { data: apiResponse = [], error, refetch } = useGetAllDataQuery({});

  useEffect(() => {
    if (userResponse) setUserData(userResponse);
    if (userError) navigate("/errorpage");
    if (apiResponse && userData !== null) setNotes(apiResponse);
    if (error) toast.error("Error in fetching notes!");
  }, [apiResponse, error, navigate, refetchUserData, userData, userError, userResponse]);

  const [addNoteMutation] = useAddNoteMutation();
  const handleAddNote = async () => {
    if (!currentNote.title || !currentNote.description) {
      toast.info("Please enter required fields.");
      return;
    }

    try {
      await addNoteMutation({
        ...currentNote,
        headers: { authorization: `Bearer ${token}` },
      });
      setCurrentNote({
        _id: "",
        title: "",
        description: "",
        tag: "",
        notification: false,
        sendDate: null,
        date: "",
      });
      refetch();
      scrollToNotes();
      toast.success("Notes added successfully!");
    } catch (error) {
      toast.error("Error in adding notes");
      console.error("Error adding note:", error);
    }
  };

  const [updateNote] = useUpdateNoteMutation();
  const handleSaveEdit = async (note: Note) => {
    try {
      await updateNote({
        id: note._id,
        data: note,
        headers: { authorization: `Bearer ${token}` },
      });
      toast.success("Note updated successfully");
      refetch();
    } catch (error) {
      toast.error("Error saving note");
      console.error("Error saving note:", error);
    }
  };

  const [deleteNote] = useDeleteNoteMutation();
  const handleDeleteNote = async (_id: string) => {
    try {
      await deleteNote({
        id: _id,
        headers: { authorization: `Bearer ${token}` },
      });
      refetch();
      toast.success("Note deleted successfully!");
    } catch (error) {
      toast.error("Error deleting note");
      console.error("Error deleting note:", error);
    }
  };

  const fetchNotes = useCallback(() => {
    refetch();
  }, [refetch]);

  const handleLogout = () => {
    secureLocalStorage.removeItem("authToken");
    setUserData(null);
    navigate("/");
  };

  return (
    <Box>
      <Box display={'flex'} flexDirection={'column'} gap={3}><IconButton
        className="logout-button"
        onClick={() => setView(!view)}
        title="Logout"
        sx={{
          position: "fixed",
          top: "16px",
          right: "0px",
          zIndex: 50,
          color: "#BBF7D0",
          padding: "8px",
          "&:hover": {
            color: "#BBF7D0",
            transform: "scale(1.2)",
            background: "transparent",
          },
          "&:active": {
            transform: "scale(1)",
          },
          background: "transparent",
        }}
      >
        <AddBoxIcon sx={{ fontSize: "2rem" }} />
      </IconButton>
      <IconButton
        className="logout-button"
        onClick={handleLogout}
        title="Logout"
        sx={{
          position: "fixed",
          top: "48px",
          right: "0px",
          zIndex: 50,
          color: "#BBF7D0", // purple-200
          padding: "8px",
          "&:hover": {
            color: "#BBF7D0", // green-200
            transform: "scale(1.2)",
            background: "transparent",
          },
          "&:active": {
            transform: "scale(1)",
          },
          background: "transparent",
        }}
      >
        <LogoutIcon sx={{ fontSize: "2rem" }} />
      </IconButton></Box>
      <div ref={addRef}>
        <Main
          view={view}
          onClose={() => setView(!view)}
          notes={notes}
          userData={userData}
          error={!!userError}
          onMakeNotesClick={scrollToNotes}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          handleAddNote={handleAddNote}
        />
      </div>
      {notes && notes.length > 0 && (
        <div ref={notesRef}>
          <Notes
            onAddClick={scrollToAdd}
            notes={notes}
            setNotes={setNotes}
            fetchNotes={fetchNotes}
            handleSaveEdit={handleSaveEdit}
            handleDeleteNote={handleDeleteNote}
          />
        </div>
      )}
    </Box>
  );
}