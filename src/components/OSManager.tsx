"use client";

import React from "react";
import { useOS } from "@/context/OSContext";
import Window from "./Window";

import MinesweeperApp from "./apps/MinesweeperApp";
import SolitaireApp from "./apps/SolitaireApp";
import SnakeApp from "./apps/SnakeApp";
import KofiApp from "./apps/KofiApp";

export default function OSManager() {
    const { windows } = useOS();

    return (
        <>
            {windows.map((w) => {
                let content = null;
                let width = 600;
                let height = 400;

                switch (w.id) {
                    case "minesweeper":
                        content = <MinesweeperApp />;
                        width = 450;
                        height = 550;
                        break;
                    case "solitaire":
                        content = <SolitaireApp />;
                        width = 800;
                        height = 600;
                        break;
                    case "snake":
                        content = <SnakeApp />;
                        width = 450;
                        height = 500;
                        break;
                    case "kofi":
                        content = <KofiApp />;
                        width = 380;
                        height = 420;
                        break;
                    default:
                        content = <div className="p-4">App not found.</div>;
                }

                return (
                    <Window key={w.id} id={w.id} title={w.title} defaultWidth={width} defaultHeight={height}>
                        {content}
                    </Window>
                );
            })}
        </>
    );
}
