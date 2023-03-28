import { FC, useMemo, useState } from "react";

import {
    Alert,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    Grid,
    Typography,
} from "@mui/material";

import { mockQuestions as questions } from "@/mocks/questions";
import { QuestionType } from "@/types/question";

import { Question } from "../Question/Question";

interface GameProps {
    questionsAmount: number;
}

const mixAnswers = (question: QuestionType) => {
    const answers = [...question.incorrect_answers],
        correctIndex = ~~(Math.random() * 4);

    //* insert correct answer at random index
    answers.splice(correctIndex, 0, question.correct_answer);

    return {
        answers,
        correctIndex,
        selected: -1,
    };
};

export const Game: FC<GameProps> = ({ questionsAmount }) => {
    const [question, setQuestion] = useState(0);
    const nextQuestion = () => {
        setMessage(undefined);
        setMixed(prepareMixed);
        
        setQuestion((prev) => prev + 1);
    };

    let answer = -1;
    const setAnswer = (value: number) => (answer = value);

    const [message, setMessage] = useState<["error" | "success", string]>();

    const prepareMixed = useMemo(
        () => mixAnswers(questions[question]),
        [question]
    );
    const [mixed, setMixed] = useState(prepareMixed);

    const handleSubmit = () => {
        const correct = answer === mixed.correctIndex;

        setMessage(
            correct
                ? ["success", "Answer is correct!"]
                : ["error", "Answer is wrong!"]
        );

        setMixed((prev) => ({
            ...prev,
            selected: answer,
        }));
    };

    return (
        <Dialog open={true}>
            <DialogTitle textAlign="center">
                {questions[question].question}
            </DialogTitle>
            <>
                <DialogContent
                    sx={{
                        my: 3,
                    }}
                >
                    <Question {...mixed} handleAnswerCorrect={setAnswer} />
                </DialogContent>

                {message && (
                    <Alert
                        sx={{
                            mb: 3,
                            mx: "auto",
                            width: "80%",
                        }}
                        severity={message[0]}
                    >
                        {message[1]}
                    </Alert>
                )}

                <Grid container item xs={12} p={2} alignItems="center">
                    <Typography flex={1}>
                        Question {question + 1} from {questionsAmount}
                    </Typography>

                    {message ? (
                        <Button onClick={nextQuestion} variant="contained">
                            Submit
                        </Button>
                    ) : (
                        <Button onClick={handleSubmit} variant="contained">
                            Next
                        </Button>
                    )}
                </Grid>
            </>
        </Dialog>
    );
};
