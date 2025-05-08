import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "../../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
}: {
  setCurrentNote: (note: Note) => void;
  handleSubmit: () => void;
  currentNote: Note;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={slideIn("left", "tween", 0, 3)}
      className="form-data green-pink-gradient p-[1px] shadow-card"
    >
      <Box className="bg-tertiary p-4 rounded-[20px]">
        <Typography
          className={`${styles.sectionHeadText}`}
          variant="h5"
          fontWeight="bold"
          marginBottom={1}
        >
          Add a New Note
        </Typography>
        <form className="flex flex-col">
          <Box className="flex flex-col">
            <span className="text-white font-medium">Title</span>
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
              className="bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </Box>
          <Box className="flex flex-col">
            <span className="text-white font-medium">Description</span>
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
              className="bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </Box>
          <Box className="flex flex-col">
            <span className="text-white font-medium">Tag</span>
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
              className="bg-primary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </Box>
          <Box className="flex-center">
            <Button
              className="custom-add-button"
              startIcon={<FontAwesomeIcon icon={faPlus} />}
              onClick={handleSubmit}
            >
              Add Note
            </Button>
          </Box>
        </form>
      </Box>
    </motion.div>
  );
}
