import { CSSProperties } from "react";

// Type definitions

export type Alignment = "left" | "center" | "right";

export type State = {
    data: string[][];
    past: [string[][], Alignment[][]][]; // Each element is a tuple of [data, alignments]
    future: [string[][], Alignment[][]][];
    alignments: Alignment[][];
    selectedColumn: number | null;
    selectedRow: number | null;
    selectedCell: { row: number; col: number } | null;
    selectedCells: boolean[][];
    selectAll: boolean;
};

export type Action =
    | { type: "SET_DATA"; payload: string[][] }
    | { type: "UNDO" }
    | { type: "REDO" }
    | { type: "SET_ALIGNMENTS"; payload: Alignment[][] }
    | { type: "SET_SELECTED_COLUMN"; payload: number | null }
    | { type: "SET_SELECTED_ROW"; payload: number | null }
    | { type: "SET_SELECTED_CELL"; payload: { row: number; col: number } | null }
    | { type: "SET_SELECTED_CELLS"; payload: boolean[][] }
    | { type: "SET_SELECT_ALL"; payload: boolean }
    | { type: "CLEAR_SELECTION" }
    | { type: "ADD_ROW" }
    | { type: "REMOVE_ROW" }
    | { type: "ADD_COLUMN" }
    | { type: "REMOVE_COLUMN" }
    | { type: "SET_ALIGNMENT"; payload: Alignment }
    | { type: "HANDLE_PASTE"; payload: { newData: string[][]; newAlignments: Alignment[][] } }
    | { type: "SET_BOLD" }
    | { type: "SET_ITALIC" }
    | { type: "SET_CODE" };

/**
 * The initial state of the table.
 */
export const initialState: State = {
    data: Array.from({ length: 4 }, () => Array(5).fill("")),
    alignments: Array.from({ length: 4 }, () => Array(5).fill("left")),
    past: [],
    future: [],
    selectedColumn: null,
    selectedRow: null,
    selectedCell: null,
    selectedCells: Array.from({ length: 4 }, () => Array(5).fill(false)),
    selectAll: false,
};

export interface ButtonGroupContextType {
    onClickUndo: () => void;
    onClickRedo: () => void;
    onClickAlignLeft: () => void;
    onClickAlignCenter: () => void;
    onClickAlignRight: () => void;
    onClickAddRow: () => void;
    onClickRemoveRow: () => void;
    onClickAddColumn: () => void;
    onClickRemoveColumn: () => void;
    onClickSetBold: () => void;
    onClickSetItalic: () => void;
    onClickSetCode: () => void;
}

export interface CellProps {
    rowIndex: number;
    colIndex: number;
    align: "inherit" | "left" | "center" | "right" | "justify";
    selectedCells: boolean[][];
    selectedCell: { row: number; col: number } | null;
    handleCellSelection: (rowIndex: number, colIndex: number) => void;
    handleCellChange: (rowIndex: number, colIndex: number, value: string) => void;
    style?: CSSProperties;
    cellData?: string;
}
