import { Quadrilateral } from "./quadrilateral";
/**
 * A text result.
 */
export interface RecognizedText {
    /**
     * The location of the text.
     */
    readonly location: Quadrilateral;
    /**
     * The value of the text.
     */
    readonly value: string;
}
