declare const SumThreeValues: (a: number, b: number, c: number) => number;
declare let fir: number;
declare let sec: number;
declare let thr: number;
declare let a: void;
declare let a2: any;
declare let b: string;
declare let c: bigint;
declare let d: undefined;
declare let f: boolean;
declare let g: number[];
declare let z: Array<number>;
declare let zxc: [number, string, boolean];
declare const zxc1: string;
declare let func: (a: number, b: number, d: number) => number;
declare let func1: () => void;
interface Entity {
    id: number;
}
interface ToJsonStringify extends Entity {
    e1?: number;
    e2: string;
}
declare const data: ToJsonStringify;
declare const JsonPerson: string;
