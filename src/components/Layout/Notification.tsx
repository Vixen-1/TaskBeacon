import {
    Box,
    Button,
    Dialog,
    DialogActions,
    TextField,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import "./Layout.scss";
import { toast } from "react-toastify";
import { useGetNotificationMutation } from "../../redux/ApiSlice";
  
  export default function Notification({
    open,
    toggleDialog,
    id,
    refetch
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
  
    const [minDate, setMinDate] = useState(""); // Minimum date set to tomorrow
  
    useEffect(() => {
      // Set the minimum date to tomorrow
      const now = new Date();
      now.setDate(now.getDate() + 1); // Move to tomorrow
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
  
    const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
            await saveNotification({payload: formData});
            toast.success("You will be notified one day before deadline")
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
        fullWidth
        sx={{
          width: "1300px",
          maxWidth: "100%",
          borderRadius: "20px",
          "& .MuiDialog-paper": {
            backgroundColor: "#f9f9f9",
            boxShadow: "0 0px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          padding={1.5}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "16px",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            align="center"
            gutterBottom
          >
            Add Notification
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            padding={2}
            sx={{
              backgroundColor: "#fafafa",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
              <Typography color="text.primary">Deadline</Typography>
              <TextField
                type="date" // Changed to date only
                fullWidth
                sx={{ width: "300px" }}
                required
                value={formatDateForInput(formData.date)}
                onChange={handleDateChange}
                error={errors.date}
                helperText={helperText.date}
                InputProps={{
                  sx: { borderRadius: "8px" },
                }}
                inputProps={{
                  min: minDate, // Restrict to future dates
                }}
                variant="outlined"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap={2}
            >
              <Typography width="100px" color="text.primary">
                Comment
              </Typography>
              <TextField
                fullWidth
                required
                value={formData.message}
                onChange={handleCommentChange}
                error={errors.message}
                helperText={helperText.message}
                multiline
                rows={3}
                InputProps={{
                  sx: { borderRadius: "8px" },
                }}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>
        <DialogActions sx={{ padding: 2, justifyContent: "space-between" }}>
          <Button onClick={toggleDialog} color="inherit" variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    );
  }