import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      className='animate-pulse'
    >
      <Typography variant="body1" className="text-secondary" component="p">
        Sorry, we are unable to process your signup
      </Typography>
      <Typography className="text-secondary">Go back to home page</Typography>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </Button>
    </Box>
  );
}
