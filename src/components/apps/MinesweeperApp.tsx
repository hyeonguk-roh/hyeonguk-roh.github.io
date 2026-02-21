"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Flag, Bomb, RefreshCw } from "lucide-react";

type Cell = {
    r: number;
    c: number;
    isMine: boolean;
    isRevealed: boolean;
    isFlagged: boolean;
    neighborMines: number;
};

const ROWS = 10;
const COLS = 10;
const MINES = 15;

export default function MinesweeperApp() {
    const [board, setBoard] = useState<Cell[][]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);
    const [mineCount, setMineCount] = useState(MINES);

    const initBoard = useCallback(() => {
        let newBoard: Cell[][] = Array.from({ length: ROWS }, (_, r) =>
            Array.from({ length: COLS }, (_, c) => ({
                r,
                c,
                isMine: false,
                isRevealed: false,
                isFlagged: false,
                neighborMines: 0,
            }))
        );

        // Place mines
        let minesPlaced = 0;
        while (minesPlaced < MINES) {
            const r = Math.floor(Math.random() * ROWS);
            const c = Math.floor(Math.random() * COLS);
            if (!newBoard[r][c].isMine) {
                newBoard[r][c].isMine = true;
                minesPlaced++;
            }
        }

        // Calculate neighbors
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (newBoard[r][c].isMine) continue;
                let count = 0;
                for (let dr = -1; dr <= 1; dr++) {
                    for (let dc = -1; dc <= 1; dc++) {
                        const nr = r + dr;
                        const nc = c + dc;
                        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && newBoard[nr][nc].isMine) {
                            count++;
                        }
                    }
                }
                newBoard[r][c].neighborMines = count;
            }
        }

        setBoard(newBoard);
        setGameOver(false);
        setGameWon(false);
        setMineCount(MINES);
    }, []);

    useEffect(() => {
        initBoard();
    }, [initBoard]);

    const revealCell = (r: number, c: number) => {
        if (gameOver || gameWon || board[r][c].isRevealed || board[r][c].isFlagged) return;

        const newBoard = [...board];

        if (newBoard[r][c].isMine) {
            // Game Over
            newBoard.forEach(row => row.forEach(cell => {
                if (cell.isMine) cell.isRevealed = true;
            }));
            setBoard(newBoard);
            setGameOver(true);
            return;
        }

        // Flood fill
        const stack = [[r, c]];
        while (stack.length > 0) {
            const [currR, currC] = stack.pop()!;
            if (!newBoard[currR][currC].isRevealed) {
                newBoard[currR][currC].isRevealed = true;
                if (newBoard[currR][currC].neighborMines === 0) {
                    for (let dr = -1; dr <= 1; dr++) {
                        for (let dc = -1; dc <= 1; dc++) {
                            const nr = currR + dr;
                            const nc = currC + dc;
                            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !newBoard[nr][nc].isRevealed && !newBoard[nr][nc].isFlagged) {
                                stack.push([nr, nc]);
                            }
                        }
                    }
                }
            }
        }

        setBoard(newBoard);
        checkWinCondition(newBoard);
    };

    const toggleFlag = (e: React.MouseEvent, r: number, c: number) => {
        e.preventDefault();
        if (gameOver || gameWon || board[r][c].isRevealed) return;

        const newBoard = [...board];
        const cell = newBoard[r][c];
        if (!cell.isFlagged && mineCount > 0) {
            cell.isFlagged = true;
            setMineCount(prev => prev - 1);
        } else if (cell.isFlagged) {
            cell.isFlagged = false;
            setMineCount(prev => prev + 1);
        }
        setBoard(newBoard);
        checkWinCondition(newBoard);
    };

    const checkWinCondition = (currentBoard: Cell[][]) => {
        let unrevealedSafeCells = 0;
        currentBoard.forEach(row => row.forEach(cell => {
            if (!cell.isMine && !cell.isRevealed) unrevealedSafeCells++;
        }));

        if (unrevealedSafeCells === 0) {
            setGameWon(true);
            setGameOver(true);
        }
    };

    const getColor = (num: number) => {
        const colors = ['text-transparent', 'text-blue-500', 'text-green-500', 'text-red-500', 'text-purple-500', 'text-yellow-500', 'text-teal-500', 'text-black', 'text-gray-500'];
        return colors[num];
    };

    if (board.length === 0) return null;

    return (
        <div className="w-full h-full flex flex-col items-center p-4 bg-zinc-300 text-black select-none">
            <div className="w-full max-w-[320px] bg-zinc-400 p-2 border-t-zinc-200 border-l-zinc-200 border-b-zinc-600 border-r-zinc-600 border-4 mb-4 flex justify-between items-center text-red-600 font-mono text-xl bg-black px-4">
                <div>{mineCount.toString().padStart(3, '0')}</div>
                <button onClick={initBoard} className="bg-zinc-300 p-1 border-t-zinc-100 border-l-zinc-100 border-b-zinc-500 border-r-zinc-500 border-2 active:border-t-zinc-500 active:border-l-zinc-500 active:border-b-zinc-100 active:border-r-zinc-100 hover:bg-zinc-200">
                    {gameWon ? '😎' : gameOver ? '😵' : '🙂'}
                </button>
                <div>000</div>
            </div>

            <div className="bg-zinc-400 p-1 border-t-zinc-600 border-l-zinc-600 border-b-zinc-200 border-r-zinc-200 border-4 inline-block">
                <div className="grid gap-[1px] bg-zinc-500" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
                    {board.map((row, r) =>
                        row.map((cell, c) => (
                            <div
                                key={`${r}-${c}`}
                                onClick={() => revealCell(r, c)}
                                onContextMenu={(e) => toggleFlag(e, r, c)}
                                className={`w-7 h-7 flex items-center justify-center text-sm font-bold ${cell.isRevealed
                                        ? cell.isMine
                                            ? 'bg-red-500' // Mine exploded
                                            : 'bg-zinc-300'
                                        : 'bg-zinc-300 border-t-zinc-100 border-l-zinc-100 border-b-zinc-500 border-r-zinc-500 border-2 hover:bg-zinc-200 cursor-pointer'
                                    }`}
                            >
                                {cell.isRevealed ? (
                                    cell.isMine ? <Bomb className="w-4 h-4 text-black" /> : cell.neighborMines > 0 ? <span className={getColor(cell.neighborMines)}>{cell.neighborMines}</span> : ''
                                ) : cell.isFlagged ? (
                                    <Flag className="w-4 h-4 text-red-600" />
                                ) : ''}
                            </div>
                        ))
                    )}
                </div>
            </div>

            {gameWon && <div className="mt-4 text-green-700 font-bold">You Win!</div>}
            {gameOver && !gameWon && <div className="mt-4 text-red-600 font-bold">Game Over</div>}
        </div>
    );
}
