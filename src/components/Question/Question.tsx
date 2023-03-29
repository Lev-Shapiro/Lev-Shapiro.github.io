import { FC } from "react";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

import { Check } from "@mui/icons-material";

interface QuestionProps {
    answers: string[];
    selected: number;
    correctIndex: number;
    questionActive: number;
    handleSelect: (value: number) => void;
}

export const Question: FC<QuestionProps> = ({
    answers,
    selected,
    correctIndex,
    questionActive,
    handleSelect,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const num = (event.target as HTMLInputElement).value.split('-')[1];

        handleSelect(Number(num));
    };

    const resultColor = correctIndex === selected ? "success" : "error";

    return (
        <RadioGroup onChange={handleChange}>
            {answers.map((answer, index) => (
                <FormControlLabel
                    key={answer}
                    value={`${questionActive}-${index}`}
                    control={
                        <Radio
                            icon={
                                index === correctIndex && selected !== -1 ? (
                                    <Check color="primary" />
                                ) : undefined
                            }
                            color={selected === index ? resultColor : "primary"}
                        />
                    }
                    label={
                        new DOMParser().parseFromString(answer, "text/html")
                            .body.textContent
                    }
                    disabled={selected != index && selected !== -1}
                />
            ))}
        </RadioGroup>
    );
};
