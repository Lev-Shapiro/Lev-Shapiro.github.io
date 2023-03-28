import { FC } from "react";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
} from "@mui/material";

interface CreateGameProps {
    open: boolean;
    handleClose: () => void;

    setQuestionsAmount: (amount: number) => void;
}

export const CreateGame: FC<CreateGameProps> = ({
    open,
    handleClose,
    setQuestionsAmount,
}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setQuestionsAmount(data.amount);
        handleClose();
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Create game</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent>
                    <DialogContentText pb={3}>
                        To start the game you should enter amount of questions
                        you would like to appear during the game
                    </DialogContentText>
                    <TextField
                        {...register("amount", {
                            required: true,
                        })}
                        error={!!errors.amount}
                        helperText={
                            errors?.amount?.type === "required" &&
                            "This field is required"
                        }
                        autoFocus
                        margin="dense"
                        label="Amount of questions"
                        fullWidth
                        variant="outlined"
                    />
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};
