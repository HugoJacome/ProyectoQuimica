export interface ElementData {
    element: string;
    info?: string;
    symbol?: string;
    oxidationNumber?: string;
    family?: string;
    type?: string;
    state?: 'default' | 'flipped' | 'matched';
}
export interface CardData {
    element: string;
    state: 'default' | 'flipped' | 'matched';
}
