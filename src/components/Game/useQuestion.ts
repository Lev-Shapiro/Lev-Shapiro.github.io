import { useMemo, useState } from "react";

import { QuestionType } from "@/types/question";

export const useQuestion = (questions: QuestionType[]) => {
    const [questionActive, setQuestionActive] = useState(0);

    const question = useMemo(
        () => questions[questionActive],
        [questionActive, questions]
    );

    const data = useMemo(() => {
        const answers = [...question.incorrect_answers],
            correctIndex = ~~(Math.random() * 4);

        //* insert correct answer at random index
        answers.splice(correctIndex, 0, question.correct_answer);

        return {
            answers,
            correctIndex,
        };
    }, [question]);

    return {
        ...data,
        question,
        questionActive,
        setQuestionActive,
    };
};
