import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { Box, Button, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FcViewDetails } from "react-icons/fc";

interface Note {
  _id: string;
  title: string;
  description: string;
  tag: string;
  notification: boolean;
  sendDate: string | null;
  date: string;
}

export default function NotesForm({
  setCurrentNote,
  handleSubmit,
  currentNote,
  onMakeNotesClick
}: {
  setCurrentNote: (note: Note) => void;
  handleSubmit: () => void;
  currentNote: Note;
  onMakeNotesClick: () => void;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideIn("left", "tween", 0, 3)}
      className="form-data black-gradient"
    >
      <Box className="bg-[#ccc] px-[100px] py-[3px] rounded-[20px]">
        <Typography
          variant="h4"
          fontWeight={600}
          margin={1}
          fontFamily={'Poppins'}
          className={'text-primary'}
        >
          Add a New Note
        </Typography>
        <form className="flex flex-col">
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
          <Box className="flex flex-row justify-center items-center gap-4 py-2">
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
        </form>
      </Box>
    </motion.div>
  );
}
