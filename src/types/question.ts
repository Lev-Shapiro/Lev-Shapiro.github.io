export interface QuestionType {
    id: number;
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

// 4 answers per question
export interface Question4Type extends QuestionType {
    type: "multiple"
    correct_answer: string
    incorrect_answers: [string, string, string];
}

export type QuestionSeverityType = "error" | "success" | undefined;