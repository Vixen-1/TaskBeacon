import Main from "../components/Layout/Main";
import Navbar from "../components/Navbar/Navbar";
import Notes from "../components/Layout/Notes";
import { useCallback, useEffect, useRef, useState } from "react";
import secureLocalStorage from "react-secure-storage";
import { useAddNoteMutation, useDeleteNoteMutation, useGetAllDataQuery, useGetUserDataQuery, useUpdateNoteMutation } from "../redux/ApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
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
  const [notes, setNotes] = useState<Note[]>([]);

  const [userData, setUserData] = useState<UserData | null>(null);

  const [currentNote, setCurrentNote] = useState<Note>({
    _id: "",
    title: "",
    description: "",
    tag: "",
    date: "",
  });

  const navigate = useNavigate();
  
  const token = secureLocalStorage.getItem("authToken");

  const { data: userResponse, error:userError, refetch: refetchUserData } = useGetUserDataQuery({});

  const {data: apiResponse=[], error, refetch} = useGetAllDataQuery({});

  useEffect(()=>{
    if (userResponse) setUserData(userResponse);
    if (userError) navigate("/errorpage");
    if(apiResponse && userData !== null)
      setNotes(apiResponse)
    if(error)
      toast.error("Error in fetching notes!")
  }, [apiResponse, error, navigate, refetchUserData, userData, userError, userResponse])

  const [AddNoteMutation] = useAddNoteMutation();
  const handleAddNote = async () => {
    if (!currentNote.title || !currentNote.description || !currentNote.tag) {
      toast.info("Please enter required fields.")
      return;
    }

    try {
      await AddNoteMutation({
        ...currentNote,
        headers: { authorization: `Bearer ${token}` },
      })
      setCurrentNote({ _id: "", title: "", description: "", tag: "", date: "" });
      refetch();
      toast.success("Notes added successfully!")
    } catch (error) {
      toast.error("Error in adding notes")
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
      toast.success("Note updated successfully")
      refetch();
    } catch (error) {
      toast.error("Error saving note")
      console.error("Error saving note:", error);
    }
  };

  const [deleteNote] = useDeleteNoteMutation();
  const handleDeleteNote = async (_id: string) => {
    try {
      await deleteNote({
        id: _id,
        headers: { authorization: `Bearer ${token}` },
      })
      refetch();
      toast.success("Note deleted successfully!")
    } catch (error) {
      toast.error("Error deleting note")
      console.error("Error deleting note:", error);
    }
  };
  const fetchNotes = useCallback(() => {
    refetch()
  }, [refetch]);

  const handleLogout = () => {
    secureLocalStorage.removeItem("authToken");
    setUserData(null);
    navigate("/");
  };
  
  return (
    <div>
      <Navbar buttonName="Logout" handleLogout={handleLogout} />
      <Main
        notes={notes}
        userData={userData}
        error={!!userError}
        onMakeNotesClick={scrollToNotes}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
        handleAddNote={handleAddNote}
      />
      {(notes && notes.length > 0) && (
        <div ref={notesRef}>
          <Notes
            notes={notes}
            setNotes={setNotes}
            fetchNotes={fetchNotes}
            handleSaveEdit={handleSaveEdit}
            handleDeleteNote={handleDeleteNote}
          />
        </div>
      )}
    </div>
  );
}
