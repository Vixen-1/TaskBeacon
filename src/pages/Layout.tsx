import Main from "../components/Layout/Main";
import Notes from "../components/Layout/Notes";
import { useCallback, useEffect, useState } from "react";
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
import { Box, Button, IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { motion } from "framer-motion";
import { zoomIn } from "../utils/motion";

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
  const {
    data: userResponse,
    error: userError,
    refetch: refetchUserData,
  } = useGetUserDataQuery({});
  const { data: apiResponse = [], error, refetch } = useGetAllDataQuery({});

  useEffect(() => {
    if (userResponse) setUserData(userResponse);
    if (userError) navigate("/errorpage");
    if (apiResponse && userData !== null) setNotes(apiResponse);
    if (error) toast.error("Error in fetching notes!");
  }, [
    apiResponse,
    error,
    navigate,
    refetchUserData,
    userData,
    userError,
    userResponse,
  ]);

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
      toast.success("Notes added successfully!");
      setView((prev) => !prev);
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
    <>
      <Box display={"flex"} flexDirection={"column"} gap={3}>
        <IconButton
          className="logout-button"
          onClick={() => setView(true)}
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
          <AddBoxIcon sx={{ fontSize: "1.5rem" }} />
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
          <LogoutIcon sx={{ fontSize: "1.5rem" }} />
        </IconButton>
      </Box>
      <Main
        view={view}
        onClose={() => setView(!view)}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        handleAddNote={handleAddNote}
      />
      {notes && notes.length > 0 ? (
        <Notes
          notes={notes}
          setNotes={setNotes}
          fetchNotes={fetchNotes}
          handleSaveEdit={handleSaveEdit}
          handleDeleteNote={handleDeleteNote}
        />
      ) : (
        <Box
          height="100vh"
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          className="bg-primary"
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={zoomIn(0.2, 1)}
            className="text-center"
          >
            <p className={`text-2xl`}>
              Welcome,{" "}
              <span className="capitalize font-semibold text-4xl text-[#BBF7D0]">
                {userData?.name}!
              </span>
            </p>
            <p className="text-2xl">Hope you're doing well!</p>
            <p className="text-2xl">
              Let's organize your world, one note at a time!
            </p>
            <Button
              className="custom-add-button"
              onClick={() => setView(!view)}
            >
              Create New Note
            </Button>
          </motion.div>
        </Box>
      )}
    </>
  );
}
