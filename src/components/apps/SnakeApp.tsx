"use client";

import React, { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 20;

type Point = { x: number; y: number };

export default function SnakeApp() {
    const [snake, setSnake] = useState<Point[]>([
        { x: 10, y: 10 },
    ]);
    const [food, setFood] = useState<Point>({ x: 5, y: 5 });
    const [dir, setDir] = useState<Point>({ x: 0, y: -1 });
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const spawnFood = useCallback((currentSnake: Point[]) => {
        let newFood: Point;
        while (true) {
            newFood = {
                x: Math.floor(Math.random() * GRID_SIZE),
                y: Math.floor(Math.random() * GRID_SIZE),
            };
            if (!currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y)) {
                break;
            }
        }
        setFood(newFood);
    }, []);

    const resetGame = () => {
        setSnake([{ x: 10, y: 10 }]);
        setDir({ x: 0, y: -1 });
        setScore(0);
        setGameOver(false);
        setIsPaused(false);
        spawnFood([{ x: 10, y: 10 }]);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }

            setDir(prev => {
                switch (e.key) {
                    case 'ArrowUp':
                        return prev.y === 1 ? prev : { x: 0, y: -1 };
                    case 'ArrowDown':
                        return prev.y === -1 ? prev : { x: 0, y: 1 };
                    case 'ArrowLeft':
                        return prev.x === 1 ? prev : { x: -1, y: 0 };
                    case 'ArrowRight':
                        return prev.x === -1 ? prev : { x: 1, y: 0 };
                    default:
                        return prev;
                }
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    useEffect(() => {
        if (gameOver || isPaused) return;

        const moveSnake = () => {
            setSnake(prevSnake => {
                const head = prevSnake[0];
                const newHead = { x: head.x + dir.x, y: head.y + dir.y };

                // Check Wall Collision
                if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Check Self Collision
                if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
                    setGameOver(true);
                    return prevSnake;
                }

                const newSnake = [newHead, ...prevSnake];

                // Check Food Collision
                if (newHead.x === food.x && newHead.y === food.y) {
                    setScore(s => s + 10);
                    spawnFood(newSnake);
                } else {
                    newSnake.pop();
                }

                return newSnake;
            });
        };

        const intervalId = setInterval(moveSnake, 120);
        return () => clearInterval(intervalId);
    }, [dir, food, gameOver, isPaused, spawnFood]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#001100] text-[#00ff00] font-mono p-4">
            <div className="w-full max-w-[400px] flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">SNAKE.EXE</h2>
                <div className="text-lg tracking-widest text-[#00ff00]">SCORE: {score.toString().padStart(4, '0')}</div>
            </div>

            <div
                className="w-full aspect-square max-w-[400px] bg-black border-2 border-[#00ff00] grid"
                style={{
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`
                }}
            >
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);

                    const isSnakeHead = snake[0].x === x && snake[0].y === y;
                    const isSnakeBody = snake.some((segment, idx) => idx !== 0 && segment.x === x && segment.y === y);
                    const isFood = food.x === x && food.y === y;

                    let cellClass = "";
                    if (isSnakeHead) cellClass = "bg-[#00ff00]";
                    else if (isSnakeBody) cellClass = "bg-[#00aa00]";
                    else if (isFood) cellClass = "bg-red-500 animate-pulse";

                    return <div key={i} className={`w-full h-full ${cellClass}`} />;
                })}
            </div>

            <div className="mt-6 flex gap-4">
                <button onClick={() => setIsPaused(!isPaused)} className="px-4 py-2 border border-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors" disabled={gameOver}>
                    {isPaused ? "RESUME" : "PAUSE"}
                </button>
                <button onClick={resetGame} className="px-4 py-2 border border-[#00ff00] hover:bg-[#00ff00] hover:text-black transition-colors">
                    RESTART
                </button>
            </div>

            {gameOver && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-red-500">
                    <h1 className="text-4xl font-bold mb-4 animate-bounce">GAME OVER</h1>
                    <button onClick={resetGame} className="px-6 py-2 border-2 border-red-500 hover:bg-red-500 hover:text-black font-bold transition-colors">
                        TRY AGAIN
                    </button>
                </div>
            )}
        </div>
    );
}
