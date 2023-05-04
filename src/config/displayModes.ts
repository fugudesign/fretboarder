export const displayModeList = ['note', 'interval'] as const;

export const displayModes = [...displayModeList];

export type DisplayModes = typeof displayModes;
export type DisplayMode = DisplayModes[number];
