import type { SetSectors, SetSectorFetchComplete, SetSectorFetchStart, SetSectorFetchError, SetSelectedSector } from '../../operations/actionTypes';
import type { AppData } from '../../operations/types';
export declare const setSectors: (appData: AppData) => SetSectors;
export declare const setSectorFetchComplete: () => SetSectorFetchComplete;
export declare const setSectorFetchStart: () => SetSectorFetchStart;
export declare const setSectorFetchError: (error: string) => SetSectorFetchError;
export declare const setSelectedSector: (sectorId: number, isSelected: boolean) => SetSelectedSector;
//# sourceMappingURL=setSectorActions.d.ts.map