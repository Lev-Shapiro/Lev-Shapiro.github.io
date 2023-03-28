import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

import { CreateGame } from "@/components/CreateGame/CreateGame";
import { Game } from "@/components/Game/Game";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    const [amount, setAmount] = useState(0);
    const handleSubmit = (amount: number) => {
        setAmount(amount);
    };

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className={styles.main}>
                <CreateGame
                    open={open}
                    handleClose={handleClose}
                    setQuestionsAmount={handleSubmit}
                />

                {amount && <Game questionsAmount={amount} />}
            </main>
        </>
    );
}
