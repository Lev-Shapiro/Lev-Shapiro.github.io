import { FC, useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { mockSteps as steps } from "@/mocks/steps";
import { Dialog, DialogContent, DialogTitle, Grid } from "@mui/material";

interface GameProps {
    questionsAmount: number;
}

export const Game: FC<GameProps> = ({ questionsAmount }) => {
    const [question, setQuestion] = useState(0);

    const handleSubmit = () => {
        setQuestion(question + 1);
    };

    return (
        <Dialog open={true}>
            <DialogTitle textAlign="center">
                Who wants to me a millionaire?
            </DialogTitle>
            <DialogContent>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: 50,
                        pl: 2,
                        bgcolor: "background.default",
                    }}
                >
                    <Typography>{steps[question].label}</Typography>
                </Paper>
                <Box sx={{ height: 255, maxWidth: 400, width: "100%", p: 2 }}>
                    {steps[question].description}
                </Box>
            </DialogContent>
            <Grid container item xs={12} p={2} alignItems="center">
                <Typography flex={1}>
                    Question {question + 1} from {questionsAmount}
                </Typography>

                <Button onClick={handleSubmit} variant="contained">
                    Submit
                </Button>
            </Grid>
        </Dialog>
    );
};
