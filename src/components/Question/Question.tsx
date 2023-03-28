import { FC } from "react";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

interface QuestionProps {
    answers: string[];
    selected: number;
    correctIndex: number;
    handleSelect: (value: number) => void;
}

export const Question: FC<QuestionProps> = ({
    answers,
    selected,
    correctIndex,
    handleSelect,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSelect(Number((event.target as HTMLInputElement).value));
    };

    const resultColor = correctIndex === selected ? "success" : "error";

    return (
        <RadioGroup
            onChange={handleChange}
            aria-labelledby="demo-controlled-radio-buttons-group" // TODO
            name="controlled-radio-buttons-group"
        >
            {answers.map((answer, index) => (
                <FormControlLabel
                    key={index}
                    value={index}
                    control={
                        <Radio
                            color={selected === index ? resultColor : "primary"}
                        />
                    }
                    label={answer}
                    disabled={selected != index && selected !== -1}
                />
            ))}
        </RadioGroup>
    );
};
