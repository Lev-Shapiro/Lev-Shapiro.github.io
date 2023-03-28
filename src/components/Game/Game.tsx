import { FC, useState } from "react";

import {
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";

import { useQuestion } from "./useQuestion";

import { Question } from "components";

import { QuestionType } from "types/question";

interface GameProps {
    questions: QuestionType[];
    clearQuestions: () => void;
}

export const Game: FC<GameProps> = ({ questions, clearQuestions }) => {
    const [selected, setSelected] = useState(-1);

    const { setQuestionActive, question, questionActive, ...data } =
        useQuestion(questions);

    const nextQuestion = () => {
        if (selected === -1) return;

        if(questionActive + 1 === questions.length) {
            return clearQuestions();
        }

        setQuestionActive((prev) => prev + 1);
        setSelected(-1);
    };

    const textIncludingUnicode = new DOMParser().parseFromString(question.question, "text/html").body.textContent;

    return (
        <Dialog open={true}>
            <DialogTitle textAlign="center">
                {textIncludingUnicode}
            </DialogTitle>
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

            <Grid container item xs={12} p={2} gap={2} alignItems="center">
                <Typography flex={1}>
                    Question {questionActive + 1} from {questions.length}
                </Typography>

                <Button
                    onClick={clearQuestions}
                    variant="contained"
                >
                    Reset
                </Button>

                <Button
                    onClick={nextQuestion}
                    variant="contained"
                    disabled={selected === -1}
                >
                    Next
                </Button>
            </Grid>
        </Dialog>
    );
};
