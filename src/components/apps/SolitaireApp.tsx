"use client";

import React, { useState, useEffect } from "react";
import { RefreshCcw } from "lucide-react";

type Suit = "♠" | "♥" | "♦" | "♣";
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
type Color = "red" | "black";

interface Card {
    id: string;
    suit: Suit;
    rank: Rank;
    color: Color;
    isFaceUp: boolean;
}

interface Selection {
    type: "waste" | "tableau" | "foundation";
    colIndex: number;
    cardIndex?: number;
}

const SUITS: Suit[] = ["♠", "♥", "♦", "♣"];
const RANKS: Rank[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const getRankString = (rank: Rank) => {
    if (rank === 1) return "A";
    if (rank === 11) return "J";
    if (rank === 12) return "Q";
    if (rank === 13) return "K";
    return rank.toString();
};

const createDeck = (): Card[] => {
    const deck: Card[] = [];
    for (const suit of SUITS) {
        for (const rank of RANKS) {
            deck.push({
                id: `${rank}-${suit}`,
                suit,
                rank,
                color: suit === "♥" || suit === "♦" ? "red" : "black",
                isFaceUp: false,
            });
        }
    }
    return deck.sort(() => Math.random() - 0.5);
};

export default function SolitaireApp() {
    const [stock, setStock] = useState<Card[]>([]);
    const [waste, setWaste] = useState<Card[]>([]);
    const [foundations, setFoundations] = useState<Card[][]>([[], [], [], []]);
    const [tableaus, setTableaus] = useState<Card[][]>(Array.from({ length: 7 }, () => []));
    const [selected, setSelected] = useState<Selection | null>(null);

    const startNewGame = () => {
        const deck = createDeck();
        const newTableaus: Card[][] = Array.from({ length: 7 }, () => []);

        let cardIdx = 0;
        for (let i = 0; i < 7; i++) {
            for (let j = i; j < 7; j++) {
                const card = { ...deck[cardIdx++] };
                if (i === j) card.isFaceUp = true;
                newTableaus[j].push(card);
            }
        }

        setTableaus(newTableaus);
        setStock(deck.slice(cardIdx));
        setWaste([]);
        setFoundations([[], [], [], []]);
        setSelected(null);
    };

    useEffect(() => {
        startNewGame();
    }, []);

    const drawStock = () => {
        setSelected(null);
        if (stock.length > 0) {
            const card = { ...stock[0], isFaceUp: true };
            setWaste((prev) => [...prev, card]);
            setStock((prev) => prev.slice(1));
        } else if (waste.length > 0) {
            // Refresh stock from waste
            const flippedWaste = [...waste].reverse().map(c => ({ ...c, isFaceUp: false }));
            setStock(flippedWaste);
            setWaste([]);
        }
    };

    const getMovingCards = (sel: Selection): Card[] => {
        if (sel.type === "waste") return waste.length > 0 ? [waste[waste.length - 1]] : [];
        if (sel.type === "foundation") return foundations[sel.colIndex].length > 0 ? [foundations[sel.colIndex][foundations[sel.colIndex].length - 1]] : [];
        if (sel.type === "tableau" && sel.cardIndex !== undefined) {
            return tableaus[sel.colIndex].slice(sel.cardIndex);
        }
        return [];
    };

    const removeMovingCards = (sel: Selection) => {
        if (sel.type === "waste") {
            setWaste((prev) => prev.slice(0, -1));
        } else if (sel.type === "foundation") {
            const newF = [...foundations];
            newF[sel.colIndex].pop();
            setFoundations(newF);
        } else if (sel.type === "tableau" && sel.cardIndex !== undefined) {
            const newT = [...tableaus];
            newT[sel.colIndex] = newT[sel.colIndex].slice(0, sel.cardIndex);
            // Auto reveal top card if face down
            if (newT[sel.colIndex].length > 0) {
                newT[sel.colIndex][newT[sel.colIndex].length - 1].isFaceUp = true;
            }
            setTableaus(newT);
        }
    };

    const handleTableauClick = (colIndex: number, cardIndex?: number) => {
        if (!selected) {
            // Selection logic
            if (cardIndex !== undefined && tableaus[colIndex][cardIndex].isFaceUp) {
                setSelected({ type: "tableau", colIndex, cardIndex });
            }
            return;
        }

        // Move logic
        const movingCards = getMovingCards(selected);
        if (movingCards.length === 0) return;

        const baseCard = movingCards[0];
        const targetCol = tableaus[colIndex];
        const targetCard = targetCol.length > 0 ? targetCol[targetCol.length - 1] : null;

        let valid = false;
        if (!targetCard) {
            if (baseCard.rank === 13) valid = true; // Only Kings on empty
        } else {
            if (targetCard.color !== baseCard.color && targetCard.rank === baseCard.rank + 1) {
                valid = true;
            }
        }

        if (valid) {
            const newT = [...tableaus];
            newT[colIndex] = [...newT[colIndex], ...movingCards];
            setTableaus(newT);
            removeMovingCards(selected);
            setSelected(null);
        } else {
            // Change selection if clicking another valid card
            if (cardIndex !== undefined && tableaus[colIndex][cardIndex].isFaceUp) {
                setSelected({ type: "tableau", colIndex, cardIndex });
            } else {
                setSelected(null);
            }
        }
    };

    const handleFoundationClick = (colIndex: number) => {
        if (!selected) {
            if (foundations[colIndex].length > 0) {
                setSelected({ type: "foundation", colIndex });
            }
            return;
        }

        const movingCards = getMovingCards(selected);
        if (movingCards.length !== 1) {
            setSelected(null);
            return; // Can only move 1 card to foundation
        }

        const card = movingCards[0];
        const foundation = foundations[colIndex];
        const topCard = foundation.length > 0 ? foundation[foundation.length - 1] : null;

        let valid = false;
        if (!topCard) {
            if (card.rank === 1 && (foundation.length === 0 || foundations.findIndex(f => f.length > 0 && f[0].suit === card.suit) === -1 || foundations[colIndex].length > 0)) {
                // It's an Ace, and this foundation is either empty or matches the suit (well, empty means it's fine)
                // Actually, if it's an Ace and foundation is empty, sure. Let's strictly bind foundation columns to suits upon first placement, or just allow any Ace on any empty.
                valid = true;
            }
        } else {
            if (topCard.suit === card.suit && topCard.rank + 1 === card.rank) {
                valid = true;
            }
        }

        if (valid) {
            const newF = [...foundations];
            newF[colIndex].push(card);
            setFoundations(newF);
            removeMovingCards(selected);
        }
        setSelected(null);
    };

    const handleWasteClick = () => {
        if (waste.length > 0) {
            setSelected({ type: "waste", colIndex: 0 });
        }
    };

    const checkWin = foundations.every(f => f.length === 13);

    const isSelected = (type: string, colIndex: number, cardIndex?: number) => {
        if (!selected) return false;
        if (selected.type !== type || selected.colIndex !== colIndex) return false;
        if (type === "tableau" && cardIndex !== undefined) {
            return cardIndex >= (selected.cardIndex || 0); // Highlight this card and all children
        }
        return true;
    };

    const renderCard = (card: Card, selected: boolean = false) => {
        if (!card.isFaceUp) {
            return (
                <div className="w-16 h-24 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')] bg-blue-900 border-2 border-white rounded-md flex items-center justify-center shadow-md">
                    <div className="w-12 h-20 border border-blue-400 rounded-sm opacity-50" />
                </div>
            );
        }

        return (
            <div className={`w-16 h-24 bg-white border border-gray-300 rounded-md flex flex-col p-1 shadow-md relative ${card.color === "red" ? "text-red-600" : "text-black"
                } ${selected ? "ring-2 ring-yellow-400 z-50 transform -translate-y-1 shadow-xl" : ""}`}>
                <div className="text-sm font-bold leading-none">{getRankString(card.rank)}</div>
                <div className="text-sm leading-none">{card.suit}</div>
                <div className="absolute bottom-1 right-1 text-2xl opacity-30">{card.suit}</div>
            </div>
        );
    };

    return (
        <div className="w-full h-full flex flex-col p-4 bg-[#0a5c2d] select-none overflow-hidden">
            <div className="flex justify-between mb-8">
                {/* Top Left: Stock & Waste */}
                <div className="flex gap-4">
                    <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={drawStock}>
                        {stock.length > 0 ? (
                            renderCard(stock[0])
                        ) : (
                            <div className="w-16 h-24 border-2 border-white/30 rounded-md flex items-center justify-center">
                                <RefreshCcw className="w-6 h-6 text-white/50" />
                            </div>
                        )}
                    </div>

                    <div className="relative w-16 h-24 cursor-pointer" onClick={handleWasteClick}>
                        {waste.length > 0 ? (
                            // Show up to 3 cards slightly offset
                            waste.slice(-3).map((card, i, arr) => (
                                <div key={card.id} className="absolute" style={{ left: `${i * 12}px`, zIndex: i }}>
                                    {renderCard(card, i === arr.length - 1 && isSelected("waste", 0))}
                                </div>
                            ))
                        ) : (
                            <div className="w-16 h-24 border-2 border-black/10 rounded-md" />
                        )}
                    </div>
                </div>

                {/* Top Right: Foundations */}
                <div className="flex gap-4">
                    {foundations.map((foundation, i) => (
                        <div key={`foundation-${i}`} className="w-16 h-24 cursor-pointer relative" onClick={() => handleFoundationClick(i)}>
                            {foundation.length > 0 ? (
                                renderCard(foundation[foundation.length - 1], isSelected("foundation", i))
                            ) : (
                                <div className="w-16 h-24 bg-black/20 border-2 border-black/30 rounded-md flex items-center justify-center">
                                    <span className="text-black/20 text-3xl">{SUITS[i]}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom: Tableaus */}
            <div className="flex justify-between flex-1">
                {tableaus.map((col, colI) => (
                    <div key={`tableau-${colI}`} className="relative w-16 h-full cursor-pointer" onClick={() => col.length === 0 && handleTableauClick(colI)}>
                        {col.length === 0 && (
                            <div className="w-16 h-24 border-2 border-black/10 rounded-md absolute top-0" />
                        )}
                        {col.map((card, cardI) => (
                            <div
                                key={card.id}
                                className="absolute w-full hover:brightness-105 transition-all"
                                style={{ top: `${cardI * 20}px`, zIndex: cardI }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleTableauClick(colI, cardI);
                                }}
                            >
                                {renderCard(card, isSelected("tableau", colI, cardI))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {checkWin && (
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white z-[100]">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4 animate-bounce">YOU WIN!</h1>
                    <button onClick={startNewGame} className="px-6 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-full">
                        PLAY AGAIN
                    </button>
                </div>
            )}
        </div>
    );
}
