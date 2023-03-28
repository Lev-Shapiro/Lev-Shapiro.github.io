import { QuestionType } from "types/question";

export const mockQuestions: QuestionType[] = [
    {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "medium",
        question:
            "After which Danish city is the 72th element on the periodic table named?",
        correct_answer: "Copenhagen",
        incorrect_answers: ["Odense", "Herning", "Skagen"],
    },
    {
        category: "Science & Nature",
        type: "multiple",
        difficulty: "medium",
        question: "What Donald Trump thinks when he jumps from the bed?",
        correct_answer: "Copenhagen",
        incorrect_answers: ["Odense", "Herning", "Skagen"],
    },
];
