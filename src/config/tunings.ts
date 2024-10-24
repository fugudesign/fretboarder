export const guitarTunings = {
  standard: { name: 'Standard', notes: ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
  dropD: { name: 'Drop D', notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'E4'] },
  openG: { name: 'Open G', notes: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'] },
  openD: { name: 'Open D', notes: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'] },
  openA: { name: 'Open A', notes: ['E2', 'A2', 'E3', 'A3', 'C#4', 'E4'] },
  openE: { name: 'Open E', notes: ['E2', 'B2', 'E3', 'G#3', 'B3', 'E4'] },
  dadgad: { name: 'DADGAD', notes: ['D2', 'A2', 'D3', 'G3', 'A3', 'D4'] },
  dropC: { name: 'Drop C', notes: ['C2', 'G2', 'C3', 'F3', 'A3', 'D4'] },
  dropB: { name: 'Drop B', notes: ['B1', 'F#2', 'B2', 'E3', 'G#3', 'C#4'] },
  doubleDropD: { name: 'Double Drop D', notes: ['D2', 'A2', 'D3', 'G3', 'B3', 'D4'] },
  halfStepDown: { name: 'Half Step Down', notes: ['D#2', 'G#2', 'C#3', 'F#3', 'A#3', 'D#4'] },
  fullStepDown: { name: 'Full Step Down', notes: ['D2', 'G2', 'C3', 'F3', 'A3', 'D4'] },
  openC: { name: 'Open C', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'] },
  openB: { name: 'Open B', notes: ['B1', 'F#2', 'B2', 'F#3', 'B3', 'D#4'] },
  openCSharp: { name: 'Open C#', notes: ['C#2', 'G#2', 'C#3', 'G#3', 'C#4', 'F4'] },
  openF: { name: 'Open F', notes: ['F2', 'A2', 'C3', 'F3', 'C4', 'F4'] },
  openGMinor: { name: 'Open G Minor', notes: ['D2', 'G2', 'D3', 'G3', 'A#3', 'D4'] },
  openDMinor: { name: 'Open D Minor', notes: ['D2', 'A2', 'D3', 'F3', 'A3', 'D4'] },
  openAMinor: { name: 'Open A Minor', notes: ['E2', 'A2', 'E3', 'A3', 'C4', 'E4'] },
  openEMinor: { name: 'Open E Minor', notes: ['E2', 'B2', 'E3', 'G3', 'B3', 'E4'] },
  openCMinor: { name: 'Open C Minor', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'D#4'] },
  openBMinor: { name: 'Open B Minor', notes: ['B1', 'F#2', 'B2', 'F#3', 'B3', 'D4'] },
  openCSharpMinor: { name: 'Open C# Minor', notes: ['C#2', 'G#2', 'C#3', 'G#3', 'C#4', 'E4'] },
  openFMinor: { name: 'Open F Minor', notes: ['F2', 'A2', 'C3', 'F3', 'C4', 'F4'] },
} as Tunings;

export const lapSteelTunings = {
  C6: { name: 'C6', notes: ['C3', 'E3', 'G3', 'A3', 'C4', 'E4'] },
  C9: { name: 'Leavitt / C9 / C#', notes: ['C#3', 'E3', 'G3', 'A#3', 'C4', 'D4'] },
  D6: { name: 'D6', notes: ['D3', 'A3', 'D3', 'F#3', 'B4', 'D4'] },
  D7: { name: 'D7', notes: ['D3', 'C4', 'D4', 'F#4', 'A4', 'D5'] },
  DMinor: { name: 'Dm', notes: ['D3', 'A3', 'D4', 'F4', 'A4', 'D5'] },
  DSus4: { name: 'Dad Gad / Dsus4', notes: ['D3', 'A3', 'D4', 'G4', 'A4', 'D5'] },
  E6: { name: 'E6 / C#m7', notes: ['E2', 'B2', 'E3', 'G#3', 'C#4', 'E4'] },
  E7: { name: 'E7', notes: ['E2', 'D3', 'E3', 'G#3', 'B3', 'E4'] },
  E7High: { name: 'E7 High', notes: ['B2', 'D3', 'E3', 'G#3', 'B3', 'E4'] },
  E9: { name: 'E9', notes: ['D3', 'E3', 'F#3', 'G#3', 'B3', 'E4'] },
  G6: { name: 'G6', notes: ['B2', 'D3', 'E3', 'G3', 'B3', 'D4'] },
  G6High: { name: 'G6 High', notes: ['G2', 'B2', 'E3', 'G3', 'B3', 'D4'] },
  A6: { name: 'A6', notes: ['C#3', 'E3', 'F#3', 'A3', 'C#4', 'E4'] },
  B11: { name: 'B11', notes: ['B2', 'D#3', 'F#3', 'A#3', 'C#4', 'E4'] },
  Bm11: { name: 'Bm11', notes: ['B2', 'D3', 'F#3', 'G#3', 'B3', 'D4'] },
  CSharpMinor7: { name: 'C#m7', notes: ['B2', 'E3', 'G#3', 'B3', 'C#4', 'E4'] },
  openD: { name: 'Open D', notes: ['D2', 'A2', 'D3', 'F#3', 'A3', 'D4'] },
  openE: { name: 'Open E', notes: ['E2', 'B2', 'E3', 'G#3', 'B3', 'E4'] },
  openG: { name: 'Open G Dobro', notes: ['D2', 'G2', 'D3', 'G3', 'B3', 'D4'] },
  openGHigh: { name: 'Open G High', notes: ['G2', 'B2', 'D3', 'G3', 'B3', 'D4'] },
  openA: { name: 'Open A', notes: ['E2', 'A2', 'E3', 'A3', 'C#4', 'E4'] },
  openAHigh: { name: 'Open A High', notes: ['A2', 'C#3', 'E3', 'A3', 'C#4', 'E4'] },
  openC: { name: 'Open C', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'E4'] },
  openF: { name: 'Open F', notes: ['F2', 'A2', 'C3', 'F3', 'C4', 'F4'] },
  openGMinor: { name: 'Open G Minor', notes: ['D2', 'G2', 'D3', 'G3', 'A#3', 'D4'] },
  openDMinor: { name: 'Open D Minor', notes: ['D2', 'A2', 'D3', 'F3', 'A3', 'D4'] },
  openAMinor: { name: 'Open A Minor', notes: ['E2', 'A2', 'E3', 'A3', 'C4', 'E4'] },
  openEMinor: { name: 'Open E Minor', notes: ['E2', 'B2', 'E3', 'G3', 'B3', 'E4'] },
  openCMinor: { name: 'Open C Minor', notes: ['C2', 'G2', 'C3', 'G3', 'C4', 'D#4'] },
  openBMinor: { name: 'Open B Minor', notes: ['B1', 'F#2', 'B2', 'F#3', 'B3', 'D4'] },
  openCSharpMinor: { name: 'Open C# Minor', notes: ['C#2', 'G#2', 'C#3', 'G#3', 'C#4', 'E4'] },
  openFMinor: { name: 'Open F Minor', notes: ['F2', 'A2', 'C3', 'F3', 'C4', 'F4'] },
} as Tunings;

export const bassTunings = {
  standard: { name: 'Standard', notes: ['E1', 'A1', 'D2', 'G2'] },
  dropD: { name: 'Drop D', notes: ['D1', 'A1', 'D2', 'G2'] },
  dropC: { name: 'Drop C', notes: ['C1', 'G1', 'C2', 'F2'] },
  dropB: { name: 'Drop B', notes: ['B0', 'F#1', 'B1', 'E2'] },
  dropA: { name: 'Drop A', notes: ['A0', 'E1', 'A1', 'D2'] },
  dropG: { name: 'Drop G', notes: ['G0', 'D1', 'G1', 'C2'] },
  dropF: { name: 'Drop F', notes: ['F0', 'C1', 'F1', 'A#1'] },
} as Tunings;

export const ukuleleTunings = {
  standard: { name: 'Standard', notes: ['G4', 'C4', 'E4', 'A4'] },
  lowG: { name: 'Low G', notes: ['G3', 'C4', 'E4', 'A4'] },
  baritone: { name: 'Baritone', notes: ['D3', 'G3', 'B3', 'E4'] },
  D6: { name: 'D6', notes: ['A4', 'D4', 'F#4', 'B4'] },
  D65th: { name: 'D6 5th', notes: ['A4', 'D4', 'F#4', 'C5'] },
  openC: { name: 'Open C', notes: ['G4', 'C4', 'E4', 'C4'] },
  openD: { name: 'Open D', notes: ['A4', 'D4', 'F#4', 'D4'] },
  openE: { name: 'Open E', notes: ['G4', 'C4', 'E4', 'E4'] },
  openF: { name: 'Open F', notes: ['G4', 'C4', 'F4', 'A4'] },
  openG: { name: 'Open G', notes: ['G4', 'D4', 'G4', 'B4'] },
} as Tunings;
