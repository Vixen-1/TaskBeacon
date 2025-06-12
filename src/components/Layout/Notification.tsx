import { Box, Button, Dialog, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import "./Layout.scss";
import { toast } from "react-toastify";
import { useGetNotificationMutation } from "../../redux/ApiSlice";

export default function Notification({
  open,
  toggleDialog,
  id,
  refetch,
}: {
  open: boolean;
  toggleDialog: () => void;
  id: string;
  refetch: () => void;
}) {
  const [formData, setFormData] = useState({
    date: "",
    message: "",
    noteId: id,
    notification: true,
  });

  const [errors, setErrors] = useState({
    date: false,
    message: false,
  });

  const [helperText, setHelperText] = useState({
    date: "",
    message: "",
  });

  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    const now = new Date();
    now.setDate(now.getDate() + 1);
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    setMinDate(`${year}-${month}-${day}`);
  }, [open]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value) {
      const now = new Date();
      const selectedDate = new Date(value);
      const combinedDateTime = new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate(),
        now.getHours(),
        now.getMinutes()
      ).toISOString();
      setFormData((prev) => ({ ...prev, date: combinedDateTime }));
    }
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: false }));
      setHelperText((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, message: event.target.value }));
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: false }));
      setHelperText((prev) => ({ ...prev, message: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { date: false, message: false };
    const newHelperText = { date: "", message: "" };

    if (!formData.date || formData.date.trim() === "") {
      newErrors.date = true;
      newHelperText.date = "Deadline cannot be empty";
      isValid = false;
    }

    if (!formData.message || formData.message.trim() === "") {
      newErrors.message = true;
      newHelperText.message = "Comment cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    setHelperText(newHelperText);
    return isValid;
  };

  const [saveNotification] = useGetNotificationMutation();

  const handleSave = async () => {
    if (validateForm()) {
      console.log("Form Data Saved:", formData);
      try {
        await saveNotification({ payload: formData });
        toast.success("You will be notified one day before deadline");
        refetch();
      } catch (error) {
        toast.error("Error saving note");
        console.error("Error saving note:", error);
      }

      toggleDialog();
    }
  };

  const formatDateForInput = (isoDate: string) => {
    if (!isoDate) return "";
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`; // Return only date for display
  };

  return (
    <Dialog
      className="animate-slideInFromTop"
      open={open}
      onClose={toggleDialog}
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
          mb={0.3}
          fontFamily={"Poppins"}
          className={"text-primary"}
        >
          Add Notification
        </Typography>

        <form className="flex flex-col gap-2">
          <Box className="flex flex-col">
            <span className="text-white font-semibold">Date</span>
            <input
              type="date"
              name="Date"
              min={minDate}
              value={formatDateForInput(formData.date)}
              onChange={handleDateChange}
              placeholder="What's the deadline?"
              className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.date && (
              <span className="text-red-600 text-[11px]">
                {helperText.date}
              </span>
            )}
          </Box>
          <Box className="flex flex-col">
            <span className="text-white font-semibold">Comment</span>
            <textarea
              rows={4}
              name="Comment"
              placeholder="Please enter comment"
              value={formData.message}
              onChange={handleCommentChange}
              className="bg-primary hover:bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
            {errors.message && (
              <span className="text-red-600 text-[11px]">
                {helperText.message}
              </span>
            )}
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
          onClick={toggleDialog}
          variant="outlined"
          className="custom-add-button"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSave}
          color="primary"
          variant="contained"
          className="custom-add-button"
        >
          Save
        </Button>
      </Box>
    </Dialog>
  );
}
