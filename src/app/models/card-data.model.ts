export interface ElementData {
    element: string;
    symbol: string;
    oxidationNumber: string;
    state?: 'default' | 'flipped' | 'matched';
}
export interface CardData {
    element: string;
    state: 'default' | 'flipped' | 'matched';
}
