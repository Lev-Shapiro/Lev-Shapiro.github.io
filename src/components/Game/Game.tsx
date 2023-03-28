import { FC, useState } from "react";

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";

import { mockQuestions as questions } from "@/mocks/questions";

import { useQuestion } from "./useQuestion";

import { Question } from "../Question/Question";

interface GameProps {
    questionsAmount: number;
}

export const Game: FC<GameProps> = ({ questionsAmount }) => {
    const [selected, setSelected] = useState(-1);

    const { setQuestionActive, question, questionActive, ...data } =
        useQuestion(questions);

    const nextQuestion = () => {
        if (selected === -1) return;

        setQuestionActive((prev) => prev + 1);
        setSelected(-1);
    };

    return (
        <Dialog open={true}>
            <DialogTitle textAlign="center">{question.question}</DialogTitle>
            <DialogContent
                sx={{
                    my: 3,
                }}
            >
                <Question
                    {...data}
                    selected={selected}
                    handleSelect={setSelected}
                />
            </DialogContent>

            <Grid container item xs={12} p={2} alignItems="center">
                <Typography flex={1}>
                    Question {questionActive + 1} from {questionsAmount}
                </Typography>

                <Button onClick={nextQuestion} variant="contained" disabled={selected === -1}>
                    Next
                </Button>
            </Grid>
        </Dialog>
    );
};
